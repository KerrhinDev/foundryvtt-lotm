/**
 * LotM Tarot — Deck interattivo dei 22 Arcani Maggiori
 * Corrisponde ai 22 Percorsi Beyonder di Lord of the Mysteries
 */

const ARCANA = [
  { num: "0",    roman: "0",      en: "The Fool",             it: "Il Folle",              pathway: "Folle",           color: "#7b5ea7" },
  { num: "I",    roman: "I",      en: "The Magician",         it: "Il Mago",               pathway: "Mago",            color: "#2980b9" },
  { num: "II",   roman: "II",     en: "The High Priestess",   it: "La Sacerdotessa",       pathway: "Sacerdotessa",    color: "#8e44ad" },
  { num: "III",  roman: "III",    en: "The Empress",          it: "L'Imperatrice",         pathway: "Imperatrice",     color: "#c0392b" },
  { num: "IV",   roman: "IV",     en: "The Emperor",          it: "L'Imperatore",          pathway: "Imperatore",      color: "#e67e22" },
  { num: "V",    roman: "V",      en: "The Hierophant",       it: "Il Papa",               pathway: "Papa",            color: "#1a5276" },
  { num: "VI",   roman: "VI",     en: "The Lovers",           it: "Gli Amanti",            pathway: "Amanti",          color: "#e91e8c" },
  { num: "VII",  roman: "VII",    en: "The Chariot",          it: "Il Carro",              pathway: "Carro",           color: "#795548" },
  { num: "VIII", roman: "VIII",   en: "Strength",             it: "La Forza",              pathway: "Forza",           color: "#f39c12" },
  { num: "IX",   roman: "IX",     en: "The Hermit",           it: "L'Eremita",             pathway: "Eremita",         color: "#616161" },
  { num: "X",    roman: "X",      en: "Wheel of Fortune",     it: "La Ruota della Fortuna",pathway: "Ruota",           color: "#c9a227" },
  { num: "XI",   roman: "XI",     en: "Justice",              it: "La Giustizia",          pathway: "Giustizia",       color: "#d4af37" },
  { num: "XII",  roman: "XII",    en: "The Hanged Man",       it: "L'Appeso",              pathway: "Appeso",          color: "#1abc9c" },
  { num: "XIII", roman: "XIII",   en: "Death",                it: "La Morte",              pathway: "Morte",           color: "#2c3e50" },
  { num: "XIV",  roman: "XIV",    en: "Temperance",           it: "La Temperanza",         pathway: "Temperanza",      color: "#3498db" },
  { num: "XV",   roman: "XV",     en: "The Devil",            it: "Il Diavolo",            pathway: "Diavolo",         color: "#922b21" },
  { num: "XVI",  roman: "XVI",    en: "The Tower",            it: "La Torre",              pathway: "Torre",           color: "#784212" },
  { num: "XVII", roman: "XVII",   en: "The Star",             it: "La Stella",             pathway: "Stella",          color: "#85c1e9" },
  { num: "XVIII",roman: "XVIII",  en: "The Moon",             it: "La Luna",               pathway: "Luna",            color: "#5d6d7e" },
  { num: "XIX",  roman: "XIX",    en: "The Sun",              it: "Il Sole",               pathway: "Sole",            color: "#f1c40f" },
  { num: "XX",   roman: "XX",     en: "Judgement",            it: "Il Giudizio",           pathway: "Giudizio",        color: "#e74c3c" },
  { num: "XXI",  roman: "XXI",    en: "The World",            it: "Il Mondo",              pathway: "Mondo",           color: "#27ae60" },
];

export class LotMTarotApp extends Application {
  constructor(options = {}) {
    super(options);
    this._drawn  = new Set();   // indici delle carte pescate
    this._flipped = new Set();  // indici mostrate faccia in su
  }

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id:       "lotm-tarot",
      title:    "✦ Arcani Maggiori — I Tarocchi del Folle",
      template: "systems/lotm/templates/apps/tarot.hbs",
      width:    820,
      height:   640,
      resizable: true,
      classes:  ["lotm", "lotm-tarot-app"],
    });
  }

  /** @override */
  getData() {
    return {
      arcana:  ARCANA.map((card, i) => ({
        ...card,
        index:   i,
        isDrawn:   this._drawn.has(i),
        isFlipped: this._flipped.has(i),
      })),
      drawnCount:     this._drawn.size,
      remainingCount: ARCANA.length - this._drawn.size,
    };
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Clicca carta — prima estrazione, poi reveal
    html.find(".tarot-card").on("click", ev => {
      const idx = parseInt(ev.currentTarget.dataset.index);
      if (this._flipped.has(idx)) return;

      if (!this._drawn.has(idx)) {
        this._drawn.add(idx);
      }
      this._flipped.add(idx);
      this.render(false);
    });

    // Invia carta al chat
    html.find(".tarot-send-chat").on("click", ev => {
      ev.stopPropagation();
      const idx  = parseInt(ev.currentTarget.closest("[data-index]").dataset.index);
      const card = ARCANA[idx];
      this._sendToChat(card);
    });

    // Rimetti nel mazzo (face-down ma estratta)
    html.find(".tarot-facedown").on("click", ev => {
      ev.stopPropagation();
      const idx = parseInt(ev.currentTarget.closest("[data-index]").dataset.index);
      this._flipped.delete(idx);
      this.render(false);
    });

    // Pesca casuale
    html.find("#tarot-draw-random").on("click", () => {
      const remaining = ARCANA.map((_, i) => i).filter(i => !this._drawn.has(i));
      if (remaining.length === 0) {
        ui.notifications.warn("Il mazzo è esaurito. Mescola per ricominciare.");
        return;
      }
      const idx = remaining[Math.floor(Math.random() * remaining.length)];
      this._drawn.add(idx);
      this._flipped.add(idx);
      this.render(false);
      this._sendToChat(ARCANA[idx]);
    });

    // Mescola (resetta tutto)
    html.find("#tarot-shuffle").on("click", async () => {
      const ok = await Dialog.confirm({
        title: "Mescola il Mazzo",
        content: "<p>Rimettere tutte le carte nel mazzo?</p>",
      });
      if (!ok) return;
      this._drawn.clear();
      this._flipped.clear();
      this.render(false);
    });
  }

  async _sendToChat(card) {
    await ChatMessage.create({
      speaker: { alias: "Il Folle" },
      content: `
        <div class="lotm-roll-card" style="--attr-color:${card.color}">
          <div class="lrc-header">
            <span class="lrc-actor" style="color:${card.color}">Arcano ${card.roman}</span>
            <span class="lrc-attr">${card.it}</span>
          </div>
          <div class="lrc-formula" style="font-size:0.9em;opacity:0.7">${card.en}</div>
          <div class="lrc-total" style="font-size:1.6em;color:${card.color}">${card.roman}</div>
          <div class="ld-result" style="background:rgba(0,0,0,0.3);color:var(--lotm-gold);border:1px solid ${card.color}30">
            ✦ Percorso: ${card.pathway}
          </div>
        </div>
      `,
    });
  }

  /** Apre o porta in primo piano l'app */
  static open() {
    if (!LotMTarotApp._instance) LotMTarotApp._instance = new LotMTarotApp();
    LotMTarotApp._instance.render(true);
  }
}
