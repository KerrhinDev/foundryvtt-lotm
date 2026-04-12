/**
 * MACRO — Crea le Macro precostruite LotM nel compendio lotm-macros
 * Esegui questa macro in-game da un utente GM.
 */

const MACROS = [
  {
    name: "LotM — Tiro Iniziativa",
    type: "script",
    img:  "icons/svg/d20-grey.svg",
    command: `
// Tiro Iniziativa LotM (2d6 + AGI)
const token = canvas.tokens.controlled[0];
const actor = token?.actor ?? game.user.character;
if (!actor) return ui.notifications.warn("Seleziona un token o assegna un personaggio.");
const agl = actor.system?.aglFin ?? actor.system?.agility ?? 0;
const roll = new Roll(\`2d6 + \${agl}\`);
await roll.evaluate();
const content = \`
  <div class="lotm-roll-card" style="--attr-color:#27ae60">
    <div class="lrc-header">
      <span class="lrc-actor">\${actor.name}</span>
      <span class="lrc-attr" style="color:#27ae60">Iniziativa</span>
    </div>
    <div class="lrc-formula">2d6 + \${agl} (AGL)</div>
    <div class="lrc-total">\${roll.total}</div>
  </div>
\`;
await ChatMessage.create({
  speaker: ChatMessage.getSpeaker({ actor }),
  content,
  rolls: [roll],
  sound: CONFIG.sounds.dice,
});
    `.trim(),
  },
  {
    name: "LotM — Riposo Breve",
    type: "script",
    img:  "icons/svg/regen.svg",
    command: `
// Riposo Breve — recupera Spirito parzialmente (1D6)
const token = canvas.tokens.controlled[0];
const actor = token?.actor ?? game.user.character;
if (!actor) return ui.notifications.warn("Seleziona un token.");
const roll = new Roll("1d6");
await roll.evaluate();
const sp = actor.system?.spiritual;
if (!sp) return ui.notifications.warn("Risorsa Spirito non trovata.");
const newVal = Math.min(sp.value + roll.total, sp.max);
await actor.update({ "system.spiritual.value": newVal });
ChatMessage.create({
  speaker: ChatMessage.getSpeaker({ actor }),
  content: \`<div class="lotm-roll-card" style="--attr-color:#5070c0">
    <div class="lrc-header"><span class="lrc-actor">\${actor.name}</span><span class="lrc-attr">Riposo Breve</span></div>
    <div class="lrc-formula">+\${roll.total} Spirito</div>
    <div class="lrc-total">\${newVal}/\${sp.max}</div>
  </div>\`,
  rolls: [roll], sound: CONFIG.sounds.dice,
});
    `.trim(),
  },
  {
    name: "LotM — Riposo Lungo",
    type: "script",
    img:  "icons/svg/sleep.svg",
    command: `
// Riposo Lungo — recupera Vita, Spirito e Razionalità al massimo
const token = canvas.tokens.controlled[0];
const actor = token?.actor ?? game.user.character;
if (!actor) return ui.notifications.warn("Seleziona un token.");
const sys = actor.system;
const updates = {};
if (sys.life)        { updates["system.life.value"]        = sys.life.max; }
if (sys.spiritual)   { updates["system.spiritual.value"]   = sys.spiritual.max; }
if (sys.rationality) { updates["system.rationality.value"] = sys.rationality.max; }
await actor.update(updates);
ChatMessage.create({
  speaker: ChatMessage.getSpeaker({ actor }),
  content: \`<div class="lotm-roll-card" style="--attr-color:#c9a227">
    <div class="lrc-header"><span class="lrc-actor">\${actor.name}</span><span class="lrc-attr">Riposo Lungo</span></div>
    <div class="lrc-formula">Vita · Spirito · Razionalità ripristinati</div>
    <div class="lrc-total">✦</div>
    <div class="ld-result ld-success">Il personaggio è completamente ristabilito.</div>
  </div>\`,
});
    `.trim(),
  },
  {
    name: "LotM — Usa Punto Fortuna",
    type: "script",
    img:  "icons/svg/aura.svg",
    command: `
// Usa 1 Punto Fortuna per ripetere un tiro fallito
const token = canvas.tokens.controlled[0];
const actor = token?.actor ?? game.user.character;
if (!actor) return ui.notifications.warn("Seleziona un token.");
const lp = actor.system?.luckPoints;
if (!lp) return ui.notifications.warn("Punti Fortuna non trovati.");
if (lp.value <= 0) return ui.notifications.warn(\`\${actor.name} non ha Punti Fortuna disponibili!\`);
await actor.update({ "system.luckPoints.value": lp.value - 1 });
ChatMessage.create({
  speaker: ChatMessage.getSpeaker({ actor }),
  content: \`<div class="lotm-roll-card" style="--attr-color:#c9a227">
    <div class="lrc-header"><span class="lrc-actor">\${actor.name}</span><span class="lrc-attr" style="color:#c9a227">Punto Fortuna</span></div>
    <div class="lrc-formula">Punti Fortuna rimanenti</div>
    <div class="lrc-total">\${lp.value - 1}/\${lp.max}</div>
    <div class="ld-result" style="background:rgba(201,162,39,0.15);color:#c9a227;border-color:#c9a22760">
      ✦ Un Punto Fortuna è stato speso. Puoi ripetere il tiro.
    </div>
  </div>\`,
});
    `.trim(),
  },
  {
    name: "LotM — Apri Tarocchi",
    type: "script",
    img:  "icons/svg/target.svg",
    command: `game.lotm.tarot();`,
  },
  {
    name: "LotM — Avanza Sequenza",
    type: "script",
    img:  "icons/svg/upgrade.svg",
    command: `
const token = canvas.tokens.controlled[0];
const actor = token?.actor ?? game.user.character;
if (!actor) return ui.notifications.warn("Seleziona un token o assegna un personaggio.");
await actor.advanceSequence?.() ?? ui.notifications.warn("Metodo non disponibile su questo attore.");
    `.trim(),
  },
];

async function populateMacros() {
  const packName = "lotm.lotm-macros";
  let pack = game.packs.get(packName);
  if (!pack) return ui.notifications.error(`Compendio '${packName}' non trovato.`);

  await pack.configure({ locked: false });
  const existing  = await pack.getDocuments();
  const existNames = new Set(existing.map(m => m.name));
  let created = 0;

  for (const macroData of MACROS) {
    if (existNames.has(macroData.name)) continue;
    await Macro.create(macroData, { pack: packName });
    created++;
  }

  await pack.configure({ locked: true });
  ui.notifications.info(`LotM | ${created} macro create nel compendio.`);
}

populateMacros();
