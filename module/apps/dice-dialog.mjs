/**
 * Dialog avanzato per i tiri dado di Lord of the Mysteries.
 * Supporta: bonus manuale, vantaggio/svantaggio, difficoltà, chat card colorata.
 */

const ATTR_LABELS = {
  strength:    { label: "Forza",       abbr: "FOR", color: "#c0392b" },
  agility:     { label: "Agilità",     abbr: "AGI", color: "#27ae60" },
  willpower:   { label: "Volontà",     abbr: "VOL", color: "#8e44ad" },
  physique:    { label: "Fisico",      abbr: "FIS", color: "#d35400" },
  charisma:    { label: "Carisma",     abbr: "CAR", color: "#f39c12" },
  inspiration: { label: "Ispirazione", abbr: "ISP", color: "#2980b9" },
  luck:        { label: "Fortuna",     abbr: "FOR", color: "#16a085" },
  education:   { label: "Educazione",  abbr: "EDU", color: "#7f8c8d" },
};

/**
 * Apre il dialog di tiro per un attributo e invia il risultato al chat.
 * @param {Actor}  actor    - L'attore che effettua il tiro
 * @param {string} attrKey  - Chiave attributo (es. "strength")
 * @returns {Promise<Roll|null>}
 */
export async function openDiceDialog(actor, attrKey) {
  const info  = ATTR_LABELS[attrKey] ?? { label: attrKey, abbr: "?", color: "#c9a227" };
  const mod   = actor.system[`${attrKey}Fin`] ?? 0;
  const sign  = mod >= 0 ? "+" : "";

  const content = `
    <form class="lotm-dice-dialog">
      <div class="ld-attr-banner" style="border-left: 4px solid ${info.color}">
        <span class="ld-attr-name">${info.label}</span>
        <span class="ld-attr-mod" style="color:${info.color}">${sign}${mod}</span>
        <span class="ld-formula">2d6 ${sign}${mod}</span>
      </div>

      <div class="ld-row">
        <div class="ld-field">
          <label>Bonus aggiuntivo</label>
          <input type="number" name="bonus" value="0" min="-99" max="99">
        </div>
        <div class="ld-field">
          <label>Difficoltà (DC)</label>
          <input type="number" name="difficulty" value="" placeholder="—" min="1">
        </div>
      </div>

      <div class="ld-mode-group">
        <label class="ld-mode-label">Modalità tiro</label>
        <div class="ld-modes">
          <label class="ld-mode">
            <input type="radio" name="mode" value="normal" checked>
            <span class="ld-mode-icon">⚖</span>
            <span>Normale</span>
          </label>
          <label class="ld-mode">
            <input type="radio" name="mode" value="advantage">
            <span class="ld-mode-icon" style="color:#27ae60">⬆</span>
            <span>Vantaggio</span>
          </label>
          <label class="ld-mode">
            <input type="radio" name="mode" value="disadvantage">
            <span class="ld-mode-icon" style="color:#c0392b">⬇</span>
            <span>Svantaggio</span>
          </label>
        </div>
      </div>
    </form>
  `;

  return new Promise(resolve => {
    new Dialog({
      title: `✦ Tiro: ${info.label}`,
      content,
      buttons: {
        roll: {
          icon: '<i class="fas fa-dice-d6"></i>',
          label: "Tira!",
          callback: async (html) => {
            const bonus      = parseInt(html.find('[name="bonus"]').val()) || 0;
            const mode       = html.find('[name="mode"]:checked').val();
            const difficulty = parseInt(html.find('[name="difficulty"]').val()) || null;
            const totalMod   = mod + bonus;
            const sign2      = totalMod >= 0 ? "+" : "";

            // ── Esegui il tiro ──────────────────────────────────────
            let mainRoll, altRoll;
            if (mode === "advantage" || mode === "disadvantage") {
              const r1 = new Roll(`2d6 + ${totalMod}`);
              const r2 = new Roll(`2d6 + ${totalMod}`);
              await r1.evaluate();
              await r2.evaluate();
              if (mode === "advantage") {
                mainRoll = r1.total >= r2.total ? r1 : r2;
                altRoll  = r1.total <  r2.total ? r1 : r2;
              } else {
                mainRoll = r1.total <= r2.total ? r1 : r2;
                altRoll  = r1.total >  r2.total ? r1 : r2;
              }
            } else {
              mainRoll = new Roll(`2d6 + ${totalMod}`);
              await mainRoll.evaluate();
            }

            const total = mainRoll.total;

            // ── Valuta esito ────────────────────────────────────────
            let resultHtml = "";
            if (difficulty !== null) {
              const success = total >= difficulty;
              const cls     = success ? "ld-success" : "ld-failure";
              const icon    = success ? "✓" : "✗";
              const text    = success ? "Successo" : "Fallimento";
              resultHtml = `<div class="ld-result ${cls}">${icon} ${text} (DC ${difficulty})</div>`;
            }

            // ── Modalità label ──────────────────────────────────────
            let modeHtml = "";
            if (mode === "advantage")    modeHtml = `<div class="ld-mode-badge advantage">⬆ Vantaggio</div>`;
            if (mode === "disadvantage") modeHtml = `<div class="ld-mode-badge disadvantage">⬇ Svantaggio</div>`;

            // ── Dado scartato ───────────────────────────────────────
            let discardedHtml = "";
            if (altRoll) {
              discardedHtml = `<div class="ld-discarded">Scartato: ${altRoll.total}</div>`;
            }

            // ── Bonus extra label ───────────────────────────────────
            let bonusHtml = "";
            if (bonus !== 0) {
              const bs = bonus >= 0 ? "+" : "";
              bonusHtml = `<span class="ld-bonus">Bonus: ${bs}${bonus}</span>`;
            }

            // ── Costruisci chat card ────────────────────────────────
            const chatContent = `
              <div class="lotm-roll-card" style="--attr-color:${info.color}">
                <div class="lrc-header">
                  <span class="lrc-actor">${actor.name}</span>
                  <span class="lrc-attr" style="color:${info.color}">${info.label} (${info.abbr})</span>
                </div>
                <div class="lrc-formula">2d6 ${sign2}${totalMod} ${bonusHtml}</div>
                ${modeHtml}
                <div class="lrc-total">${total}</div>
                ${discardedHtml}
                ${resultHtml}
              </div>
            `;

            await ChatMessage.create({
              speaker: ChatMessage.getSpeaker({ actor }),
              content:  chatContent,
              rolls:    [mainRoll],
              sound:    CONFIG.sounds.dice,
            });

            resolve(mainRoll);
          },
        },
        cancel: { label: "Annulla", callback: () => resolve(null) },
      },
      default: "roll",
    }, { classes: ["lotm-dialog", "dialog"] }).render(true);
  });
}

/**
 * Dialog per un tiro dado generico (formula libera).
 * @param {Actor}  actor
 * @param {string} formula  es. "1D6", "2D10"
 * @param {string} label
 */
export async function openGenericRoll(actor, formula, label = "Tiro dado") {
  const roll = new Roll(formula.replace(/D/gi, "d"));
  await roll.evaluate();

  const chatContent = `
    <div class="lotm-roll-card" style="--attr-color:#c9a227">
      <div class="lrc-header">
        <span class="lrc-actor">${actor?.name ?? "Tabella"}</span>
        <span class="lrc-attr">${label}</span>
      </div>
      <div class="lrc-formula">${formula}</div>
      <div class="lrc-total">${roll.total}</div>
    </div>
  `;

  await ChatMessage.create({
    speaker: actor ? ChatMessage.getSpeaker({ actor }) : {},
    content:  chatContent,
    rolls:    [roll],
    sound:    CONFIG.sounds.dice,
  });

  return roll;
}
