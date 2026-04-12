const ABILITY_TYPE_LABELS = {
  active:  "Attiva",
  passive: "Passiva",
  ritual:  "Rituale",
  formula: "Formula / Pozione",
};

const ABILITY_TYPE_COLORS = {
  active:  "#c9a227",
  passive: "#7b5ea7",
  ritual:  "#c0392b",
  formula: "#27ae60",
};

export class LotMItem extends Item {
  /** @override */
  prepareData() {
    super.prepareData();
  }

  /**
   * Usa l'abilità: invia una chat card stilizzata con tutti i dettagli.
   * Solo per item di tipo "ability" — l'equipaggiamento usa rollDice direttamente.
   */
  async use() {
    if (this.type !== "ability") {
      return ui.notifications.warn(`${this.name}: usa l'abilità solo su oggetti di tipo Abilità.`);
    }
    const sys   = this.system;
    const type  = sys.abilityType ?? "active";
    const color = ABILITY_TYPE_COLORS[type] ?? "#c9a227";
    const typeLabel = ABILITY_TYPE_LABELS[type] ?? type;

    // Strappa HTML dalla descrizione per la chat card (mostra testo pulito)
    const rawDesc = sys.description ?? "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = rawDesc;
    const plainDesc = tempDiv.textContent?.trim() ?? "";
    const shortDesc = plainDesc.length > 280
      ? plainDesc.slice(0, 280).trimEnd() + "…"
      : plainDesc;

    const metaRows = [
      sys.cost     ? `<div class="lrc-meta-row"><span class="lrc-meta-key">Costo</span><span class="lrc-meta-val">${sys.cost}</span></div>`     : "",
      sys.range    ? `<div class="lrc-meta-row"><span class="lrc-meta-key">Gittata</span><span class="lrc-meta-val">${sys.range}</span></div>`    : "",
      sys.duration ? `<div class="lrc-meta-row"><span class="lrc-meta-key">Durata</span><span class="lrc-meta-val">${sys.duration}</span></div>` : "",
    ].filter(Boolean).join("");

    const content = `
      <div class="lotm-roll-card lotm-ability-card" style="--attr-color:${color}">
        <div class="lrc-header">
          <span class="lrc-actor">${this.actor?.name ?? ""}</span>
          <span class="lrc-attr" style="color:${color}">${this.name}</span>
        </div>
        <div class="lac-type-badge" style="background:${color}22;border:1px solid ${color}60;color:${color}">
          ${typeLabel}
        </div>
        ${metaRows ? `<div class="lac-meta">${metaRows}</div>` : ""}
        ${shortDesc ? `<div class="lac-desc">${shortDesc}</div>` : ""}
      </div>
    `;

    console.log("LotM | item.use() — creo ChatMessage per:", this.name);
    try {
      const msg = await ChatMessage.create({
        speaker: this.actor ? ChatMessage.getSpeaker({ actor: this.actor }) : {},
        content,
      });
      console.log("LotM | item.use() — messaggio creato:", msg?.id);
    } catch(err) {
      console.error("LotM | item.use() ChatMessage errore:", err);
      ui.notifications.error(`LotM — Errore chat: ${err.message}`);
    }
  }
}
