/**
 * Dialog avanzato per i tiri dado di Lord of the Mysteries.
 * Supporta: bonus manuale, vantaggio/svantaggio, difficoltà, chat card colorata.
 * Compatibile con Foundry V12/V13/V14.
 */

const ATTR_LABELS = {
  strength:    { label: "Forza",       abbr: "FOR", color: "#c0392b" },
  agility:     { label: "Agilità",     abbr: "AGI", color: "#27ae60" },
  willpower:   { label: "Volontà",     abbr: "VOL", color: "#8e44ad" },
  physique:    { label: "Fisico",      abbr: "FIS", color: "#d35400" },
  charisma:    { label: "Carisma",     abbr: "CAR", color: "#f39c12" },
  inspiration: { label: "Ispirazione", abbr: "ISP", color: "#2980b9" },
  luck:        { label: "Fortuna",     abbr: "LCK", color: "#16a085" },
  education:   { label: "Educazione",  abbr: "EDU", color: "#7f8c8d" },
};

/**
 * Legge un valore da un form — compatibile jQuery e HTMLElement (V14).
 */
function readForm(htmlOrEvent) {
  // V14: primo argomento è l'Event, il form è nel target
  let el = (htmlOrEvent instanceof Event)
    ? htmlOrEvent.target?.closest("form") ?? document.querySelector(".lotm-dice-dialog")
    : (htmlOrEvent instanceof HTMLElement ? htmlOrEvent : htmlOrEvent?.[0]);

  if (!el) return {};
  const q = (sel) => el.querySelector(sel);
  return {
    bonus:      parseInt(q('[name="bonus"]')?.value)      || 0,
    mode:       q('[name="mode"]:checked')?.value          ?? "normal",
    difficulty: parseInt(q('[name="difficulty"]')?.value)  || null,
  };
}

/**
 * Invia la chat card del tiro.
 */
async function sendRollCard(actor, info, totalMod, mainRoll, altRoll, mode, difficulty, bonus) {
  const sign2 = totalMod >= 0 ? "+" : "";
  const total = mainRoll.total;

  const bonusHtml = bonus !== 0
    ? `<span class="ld-bonus">Bonus: ${bonus >= 0 ? "+" : ""}${bonus}</span>`
    : "";
  const modeHtml = mode === "advantage"
    ? `<div class="ld-mode-badge advantage">⬆ Vantaggio</div>`
    : mode === "disadvantage"
    ? `<div class="ld-mode-badge disadvantage">⬇ Svantaggio</div>`
    : "";
  const discardedHtml = altRoll
    ? `<div class="ld-discarded">Scartato: ${altRoll.total}</div>`
    : "";
  let resultHtml = "";
  if (difficulty !== null) {
    const ok = total >= difficulty;
    resultHtml = `<div class="ld-result ${ok ? "ld-success" : "ld-failure"}">${ok ? "✓ Successo" : "✗ Fallimento"} (DC ${difficulty})</div>`;
  }

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

  try {
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor }),
      content: chatContent,
      rolls:   [mainRoll],
      type:    CONST.CHAT_MESSAGE_TYPES?.ROLL ?? CONST.CHAT_MESSAGE_STYLES?.ROLL ?? 0,
    });
  } catch(err) {
    console.error("LotM | ChatMessage.create errore:", err);
    ui.notifications.error(`LotM — Errore chat: ${err.message}`);
  }
}

/**
 * Esegue il tiro dati a partire dai valori del form.
 */
async function executeRoll(actor, info, mod, formData, resolve) {
  try {
    const { bonus, mode, difficulty } = formData;
    const totalMod = mod + bonus;

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

    await sendRollCard(actor, info, totalMod, mainRoll, altRoll, mode, difficulty, bonus);
    resolve(mainRoll);
  } catch(err) {
    console.error("LotM | executeRoll errore:", err);
    ui.notifications.error(`LotM — Errore tiro: ${err.message}`);
    resolve(null);
  }
}

/**
 * Apre il dialog di tiro per un attributo e invia il risultato al chat.
 * Compatibile V12/V13/V14: legge il form tramite querySelector (non jQuery).
 */
export async function openDiceDialog(actor, attrKey) {
  const info = ATTR_LABELS[attrKey] ?? { label: attrKey, abbr: "?", color: "#c9a227" };
  const mod  = actor.system[`${attrKey}Fin`] ?? 0;
  const sign = mod >= 0 ? "+" : "";

  const content = `
    <form class="lotm-dice-dialog">
      <div class="ld-attr-banner" style="border-left:4px solid ${info.color}">
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
          <label class="ld-mode"><input type="radio" name="mode" value="normal" checked><span class="ld-mode-icon">⚖</span><span>Normale</span></label>
          <label class="ld-mode"><input type="radio" name="mode" value="advantage"><span class="ld-mode-icon" style="color:#27ae60">⬆</span><span>Vantaggio</span></label>
          <label class="ld-mode"><input type="radio" name="mode" value="disadvantage"><span class="ld-mode-icon" style="color:#c0392b">⬇</span><span>Svantaggio</span></label>
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
          icon:  '<i class="fas fa-dice-d6"></i>',
          label: "Tira!",
          // Compatibile V12/V13 (html=jQuery) e V14 (html=Event o HTMLElement)
          callback: async (html) => {
            const formData = readForm(html);
            await executeRoll(actor, info, mod, formData, resolve);
          },
        },
        cancel: { label: "Annulla", callback: () => resolve(null) },
      },
      default: "roll",
    }, { classes: ["lotm-dialog", "dialog"] }).render(true);
  });
}

/**
 * Tiro dado generico (formula libera) — nessun dialog.
 */
export async function openGenericRoll(actor, formula, label = "Tiro dado") {
  try {
    const roll = new Roll(formula.replace(/D/gi, "d"));
    await roll.evaluate();

    const chatContent = `
      <div class="lotm-roll-card" style="--attr-color:#c9a227">
        <div class="lrc-header">
          <span class="lrc-actor">${actor?.name ?? ""}</span>
          <span class="lrc-attr">${label}</span>
        </div>
        <div class="lrc-formula">${formula}</div>
        <div class="lrc-total">${roll.total}</div>
      </div>
    `;

    await ChatMessage.create({
      speaker: actor ? ChatMessage.getSpeaker({ actor }) : {},
      content: chatContent,
      rolls:   [roll],
      type:    CONST.CHAT_MESSAGE_TYPES?.ROLL ?? CONST.CHAT_MESSAGE_STYLES?.ROLL ?? 0,
    });

    return roll;
  } catch(err) {
    console.error("LotM | openGenericRoll errore:", err);
    ui.notifications.error(`LotM — Errore tiro: ${err.message}`);
    return null;
  }
}
