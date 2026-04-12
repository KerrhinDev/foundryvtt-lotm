/**
 * Lord of the Mysteries — Sistema Foundry VTT
 * Versione: 1.1.0
 */

import { LotMCharacterData } from "./data/actor-character.mjs";
import { LotMNPCData }       from "./data/actor-npc.mjs";
import { LotMAbilityData, LotMEquipmentData } from "./data/item-ability.mjs";
import { LotMActor }         from "./documents/actor.mjs";
import { LotMItem }          from "./documents/item.mjs";
import { LotMCharacterSheet } from "./sheets/character-sheet.mjs";
import { LotMNPCSheet }      from "./sheets/npc-sheet.mjs";
import { LotMAbilitySheet }  from "./sheets/ability-sheet.mjs";
import { LotMTarotApp }      from "./apps/tarot-app.mjs";

/* ══════════════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════════════ */
Hooks.once("init", () => {
  console.log("LotM | Inizializzazione del sistema Lord of the Mysteries v1.1.0");

  // ── Esponi utilità globali ────────────────────────────────────
  game.lotm = {
    LotMActor,
    LotMItem,
    tarot: () => LotMTarotApp.open(),
  };

  // ── Configurazione Actor ──────────────────────────────────────
  CONFIG.Actor.documentClass = LotMActor;
  CONFIG.Actor.dataModels = {
    character: LotMCharacterData,
    npc:       LotMNPCData,
  };

  // ── Configurazione Item ───────────────────────────────────────
  CONFIG.Item.documentClass = LotMItem;
  CONFIG.Item.dataModels = {
    ability:   LotMAbilityData,
    equipment: LotMEquipmentData,
  };

  // ── Registrazione Sheets ──────────────────────────────────────
  try {
    DocumentSheetConfig.unregisterSheet(Actor, "core", ActorSheet);
    DocumentSheetConfig.registerSheet(Actor, "lotm", LotMCharacterSheet, {
      types: ["character"],
      makeDefault: true,
      label: "LotM — Scheda PG",
    });
    DocumentSheetConfig.registerSheet(Actor, "lotm", LotMNPCSheet, {
      types: ["npc"],
      makeDefault: true,
      label: "LotM — Scheda PNG",
    });
    DocumentSheetConfig.unregisterSheet(Item, "core", ItemSheet);
    DocumentSheetConfig.registerSheet(Item, "lotm", LotMAbilitySheet, {
      types: ["ability", "equipment"],
      makeDefault: true,
      label: "LotM Item",
    });
  } catch(e) {
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("lotm", LotMCharacterSheet, {
      types: ["character"],
      makeDefault: true,
      label: "LotM — Scheda PG",
    });
    Actors.registerSheet("lotm", LotMNPCSheet, {
      types: ["npc"],
      makeDefault: true,
      label: "LotM — Scheda PNG",
    });
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("lotm", LotMAbilitySheet, {
      types: ["ability", "equipment"],
      makeDefault: true,
      label: "LotM Item",
    });
  }

  // ── Token: barre tracciabili ──────────────────────────────────
  CONFIG.Actor.trackableAttributes = {
    character: {
      bar:   ["life", "spiritual", "rationality", "luckPoints"],
      value: [],
    },
    npc: {
      bar:   ["life", "spiritual"],
      value: [],
    },
  };

  // ── Effetti di stato LotM ─────────────────────────────────────
  // IMPORTANTE: prefisso "lotm-" obbligatorio — evita collisioni con gli id
  // built-in di Foundry V14 ("curse", "poison", ecc.) che causano il crash
  // "ownKeys on proxy: trap returned duplicate entries".
  const LOTM_STATUS_EFFECTS = [
    {
      id:   "lotm-contamination-1",
      name: "Contaminazione Lieve",
      img:  "systems/lotm/assets/icons/contamination.svg",
      changes: [{ key: "system.willpower.bonus", mode: 2, value: -1 }],
    },
    {
      id:   "lotm-contamination-2",
      name: "Contaminazione Moderata",
      img:  "systems/lotm/assets/icons/contamination.svg",
      changes: [{ key: "system.willpower.bonus", mode: 2, value: -2 }],
    },
    {
      id:   "lotm-contamination-3",
      name: "Contaminazione Grave",
      img:  "systems/lotm/assets/icons/contamination.svg",
      changes: [{ key: "system.willpower.bonus", mode: 2, value: -3 }],
    },
    {
      id:   "lotm-madness-1",
      name: "Follia Lieve",
      img:  "systems/lotm/assets/icons/madness.svg",
    },
    {
      id:   "lotm-madness-2",
      name: "Follia Profonda",
      img:  "systems/lotm/assets/icons/madness.svg",
    },
    {
      id:   "lotm-poison",
      name: "Avvelenamento da Pozione",
      img:  "systems/lotm/assets/icons/poison.svg",
    },
    {
      id:   "lotm-curse",
      name: "Maledizione",
      img:  "systems/lotm/assets/icons/curse.svg",
    },
    {
      id:   "lotm-blessed",
      name: "Benedizione Beyonder",
      img:  "systems/lotm/assets/icons/blessed.svg",
    },
  ];

  // Aggiunge solo se non già presenti (guard anti-hot-reload, nessun splice sul Proxy)
  if (!CONFIG.statusEffects.some(e => e?.id?.startsWith("lotm-"))) {
    for (const effect of LOTM_STATUS_EFFECTS) CONFIG.statusEffects.push(effect);
  }

  // ── Handlebars helpers ────────────────────────────────────────
  Handlebars.registerHelper("add", (a, b) => (Number(a) || 0) + (Number(b) || 0));
  Handlebars.registerHelper("eq",  (a, b) => a === b);
  Handlebars.registerHelper("times", function(n, block) {
    let out = "";
    for (let i = 0; i < n; i++) out += block.fn(i);
    return out;
  });
  Handlebars.registerHelper("pct", (val, max) => {
    if (!max || Number(max) === 0) return 0;
    return Math.min(100, Math.max(0, Math.round((Number(val) / Number(max)) * 100)));
  });

  // ── Precarica template Handlebars ─────────────────────────────
  loadTemplates([
    "systems/lotm/templates/actor/character-sheet.hbs",
    "systems/lotm/templates/actor/npc-sheet.hbs",
    "systems/lotm/templates/item/ability-sheet.hbs",
    "systems/lotm/templates/apps/tarot.hbs",
  ]);

  console.log("LotM | Sistema inizializzato con successo");
});

/* ══════════════════════════════════════════════════════════════════
   READY
══════════════════════════════════════════════════════════════════ */
Hooks.once("ready", () => {
  console.log("LotM | Pronto!");

  // Registra macro globali nel chat (comando /tarot)
  Hooks.on("chatMessage", (chatLog, message, data) => {
    if (message.trim().toLowerCase() === "/tarot") {
      LotMTarotApp.open();
      return false; // impedisce l'invio del messaggio chat
    }
  });
});

/* ══════════════════════════════════════════════════════════════════
   CHAT MESSAGE (stile messaggi LotM)
══════════════════════════════════════════════════════════════════ */
Hooks.on("renderChatMessage", (message, html) => {
  if (message.rolls?.length) {
    html.addClass("lotm-roll-message");
  }
});
