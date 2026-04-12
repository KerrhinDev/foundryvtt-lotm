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

    const confirmed = await Dialog.confirm({
      title:   "⬡ Avanzamento di Sequenza",
      content: `
        <div style="font-family:'Palatino Linotype',serif;padding:8px">
          <p>${this.name} sta per avanzare nel proprio percorso Beyonder.</p>
          <table style="width:100%;margin:8px 0;border-collapse:collapse">
            <tr>
              <td style="padding:4px;opacity:0.7">Da</td>
              <td style="padding:4px"><strong>Sequenza ${currentSeq} — ${oldName}</strong></td>
            </tr>
            <tr>
              <td style="padding:4px;opacity:0.7">A</td>
              <td style="padding:4px;color:#c9a227"><strong>Sequenza ${newSeq} — ${newName}</strong></td>
            </tr>
          </table>
          <p style="color:#c0392b;font-size:0.85em">
            ⚠ Assicurati che il rituale sia stato completato correttamente e che la pozione sia stata digerita.
          </p>
        </div>
      `,
    });

    if (!confirmed) return;

    // Aggiorna dati
    await this.update({
      "system.sequenceNumber": newSeq,
      "system.sequenceName":   newName,
    });

    // Chat card di avanzamento
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: `
        <div class="lotm-roll-card" style="--attr-color:#7b5ea7">
          <div class="lrc-header">
            <span class="lrc-actor">${this.name}</span>
            <span class="lrc-attr" style="color:#a688d4">Avanzamento di Sequenza</span>
          </div>
          <div class="lrc-formula" style="opacity:0.7">
            Seq. ${currentSeq} (${oldName}) → Seq. ${newSeq}
          </div>
          <div class="lrc-total" style="font-size:1.5em;color:#c9a227">${newName}</div>
          <div class="ld-result ld-success" style="margin-top:6px">
            ✦ Il rituale è completato. Il potere Beyonder si consolida.
          </div>
        </div>
      `,
    });

    ui.notifications.info(`${this.name} ha avanzato a Sequenza ${newSeq} — ${newName}!`);
  }
}
