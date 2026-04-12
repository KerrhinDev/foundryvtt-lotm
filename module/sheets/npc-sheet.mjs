export class LotMNPCSheet extends ActorSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes:  ["lotm", "sheet", "actor", "npc"],
      template: "systems/lotm/templates/actor/npc-sheet.hbs",
      width:    640,
      height:   580,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "stats" }],
      scrollY: [".sheet-body"],
    });
  }

  /** @override */
  async getData(options = {}) {
    const context = await super.getData(options);
    const sys = this.actor.system;
    context.system    = sys;
    context.actor     = this.actor;
    context.isEditable = this.isEditable;

    context.npcTypes = {
      minion: "Gregario",
      elite:  "Élite",
      boss:   "Capo",
      unique: "Unico",
    };

    context.threatStars = "★".repeat(Math.min(sys.threat ?? 1, 10));

    const items = this.actor.items.contents;
    context.abilities = items.filter(i => i.type === "ability");

    return context;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Ottieni l'elemento root — compatibile jQuery (V12/V13) e HTMLElement nativo (V14)
    const root = (html instanceof HTMLElement) ? html : (html?.[0] ?? null);
    if (!root) { console.error("LotM | NPC activateListeners: root element non trovato"); return; }

    const on = (sel, evt, fn) => root.querySelectorAll(sel).forEach(el => el.addEventListener(evt, fn));

    if (!this.isEditable) return;

    // Tiro attributo NPC
    on(".npc-attr-roll", "click", ev => {
      ev.preventDefault();
      const attrKey = ev.currentTarget.dataset.attr;
      const val     = this.actor.system[attrKey] ?? 0;
      const label   = ev.currentTarget.dataset.label ?? attrKey;
      this.actor.rollDice(`2d6+${val}`, label);
    });

    // Item create
    on(".item-create", "click", async ev => {
      const [item] = await this.actor.createEmbeddedDocuments("Item", [
        { name: "Nuova Abilità", type: "ability" }
      ]);
      item?.sheet.render(true);
    });

    // Item edit
    on(".item-edit", "click", ev => {
      const li = ev.currentTarget.closest("[data-item-id]");
      this.actor.items.get(li?.dataset.itemId)?.sheet.render(true);
    });

    // Item use
    on(".item-use", "click", ev => {
      const li = ev.currentTarget.closest("[data-item-id]");
      this.actor.items.get(li?.dataset.itemId)?.use();
    });

    // Item delete
    on(".item-delete", "click", async ev => {
      const li   = ev.currentTarget.closest("[data-item-id]");
      const item = this.actor.items.get(li?.dataset.itemId);
      if (!item) return;
      const ok = await Dialog.confirm({
        title: "Elimina",
        content: `<p>Eliminare <strong>${item.name}</strong>?</p>`,
      });
      if (ok) item.delete();
    });
  }
}
