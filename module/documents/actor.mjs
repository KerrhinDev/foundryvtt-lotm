import { openDiceDialog, openGenericRoll } from "../apps/dice-dialog.mjs";
import { SEQUENCE_TABLE } from "../data/actor-character.mjs";

export class LotMActor extends Actor {
  /** @override */
  prepareData() { super.prepareData(); }

  /** @override */
  prepareBaseData() {}

  /** @override */
  prepareDerivedData() {}

  /**
   * Espone i valori calcolati alle formule Roll (es. iniziativa).
   * @override
   */
  getRollData() {
    const data = super.getRollData();
    const sys  = this.system;
    // PG — usa il valore finale calcolato dal getter
    if (this.type === "character") {
      data.aglFin  = sys.aglFin  ?? 0;
      data.strFin  = sys.strFin  ?? 0;
      data.willFin = sys.willFin ?? 0;
      data.phyFin  = sys.phyFin  ?? 0;
      data.chaFin  = sys.chaFin  ?? 0;
      data.insFin  = sys.insFin  ?? 0;
      data.luckFin = sys.luckFin ?? 0;
      data.eduFin  = sys.eduFin  ?? 0;
    }
    // PNG — agility è già un valore finale diretto
    if (this.type === "npc") {
      data.aglFin = sys.agility ?? 0;
    }
    return data;
  }

  /**
   * Attributi tracciabili per le barre token.
   * @override
   */
  getBarAttribute(barName, { alternative } = {}) {
    const attr = alternative ?? barName;
    const mapping = {
      bar1:        "life",
      bar2:        "spiritual",
      life:        "life",
      spiritual:   "spiritual",
      rationality: "rationality",
      luckPoints:  "luckPoints",
    };
    const key = mapping[attr];
    if (key && this.system?.[key]) {
      const res = this.system[key];
      if (typeof res.value === "number" && typeof res.max === "number") {
        return { type: "bar", attribute: key, value: res.value, max: res.max, editable: true };
      }
    }
    return super.getBarAttribute(barName, { alternative });
  }

  /**
   * Apre il dialog di tiro avanzato per un attributo (solo PG).
   */
  async rollAttribute(attrKey) {
    return openDiceDialog(this, attrKey);
  }

  /**
   * Tira una formula generica con chat card stilizzata.
   */
  async rollDice(formula, label = "") {
    return openGenericRoll(this, formula, label);
  }

  /**
   * Avanza il personaggio alla Sequenza successiva (numero più basso).
   * Mostra un dialog di conferma e invia un messaggio al chat.
   */
  async advanceSequence() {
    const sys = this.system;
    const currentSeq = sys.sequenceNumber;

    if (currentSeq == null || currentSeq <= 0) {
      return void ui.notifications.warn("Il personaggio ha già raggiunto la Sequenza 0 — il culmine del percorso.");
    }

    // "Senza Sequenza" (10) → prima sequenza Beyonder (9)
    const newSeq = currentSeq === 10 ? 9 : currentSeq - 1;
    const newInfo = SEQUENCE_TABLE.find(s => s.seq === newSeq);
    const newName = newInfo?.name ?? "Sconosciuto";
    const oldName = SEQUENCE_TABLE.find(s => s.seq === currentSeq)?.name ?? "";

    // Aggiorna dati
    await this.update({
      "system.sequenceNumber": newSeq,
      "system.sequenceName":   newName,
    });

    // Chat card di avanzamento
    console.log("LotM | advanceSequence — creo ChatMessage per:", this.name, "→ Seq", newSeq);
    try {
      await ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: this }),
        content: `
          <div class="lotm-roll-card" style="--attr-color:#7b5ea7">
            <div class="lrc-header">
              <span class="lrc-actor">${this.name}</span>
              <span class="lrc-attr" style="color:#a688d4">Avanzamento di Sequenza</span>
            </div>
            <div class="lrc-formula" style="opacity:0.7">
              ${currentSeq === 10 ? "Senza Sequenza" : `Seq. ${currentSeq} (${oldName})`} → Seq. ${newSeq}
            </div>
            <div class="lrc-total" style="font-size:1.5em;color:#c9a227">${newName}</div>
            <div class="ld-result ld-success" style="margin-top:6px">
              ✦ Il rituale è completato. Il potere Beyonder si consolida.
            </div>
          </div>
        `,
      });
    } catch(err) {
      console.error("LotM | advanceSequence ChatMessage errore:", err);
      ui.notifications.error(`LotM — Errore chat: ${err.message}`);
      return;
    }

    console.log("LotM | advanceSequence — ChatMessage inviato con successo");
    ui.notifications.info(`${this.name} ha avanzato a Sequenza ${newSeq} — ${newName}!`);
  }
}
