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
  console.log("LotM | Inizializzazione del sistema Lord of the Mysteries v1.2.0");

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

  // ── Iniziativa: 1d20 + Agilità ───────────────────────────────
  CONFIG.Combat.initiative = {
    formula: "1d20 + @aglFin",
    decimals: 0,
  };

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

  console.log("LotM | Sistema inizializzato con successo v1.2.0");
});

/* ══════════════════════════════════════════════════════════════════
   READY
══════════════════════════════════════════════════════════════════ */
Hooks.once("ready", () => {
  console.log("LotM | Pronto!");
});

/* ══════════════════════════════════════════════════════════════════
   CHAT MESSAGE — Comando /tarot
   Registrato a livello modulo (non dentro ready) per evitare
   accumulo di listener su ricariche del mondo.
══════════════════════════════════════════════════════════════════ */
Hooks.on("chatMessage", (chatLog, message, data) => {
  const text = typeof message === "string" ? message : (data?.content ?? "");
  if (text.trim().toLowerCase() === "/tarot") {
    LotMTarotApp.open();
    return false;
  }
});

/* ══════════════════════════════════════════════════════════════════
   CHAT MESSAGE (stile messaggi LotM)
   Usiamo entrambi gli hook per coprire V12 (renderChatMessage)
   e V13/V14 (renderChatMessageHTML).
══════════════════════════════════════════════════════════════════ */

// V12 — html è jQuery
Hooks.on("renderChatMessage", (message, html) => {
  if (!message.rolls?.length) return;
  if (typeof html?.addClass === "function") html.addClass("lotm-roll-message");
  else if (html instanceof HTMLElement) html.classList.add("lotm-roll-message");
  else if (html?.[0] instanceof HTMLElement) html[0].classList.add("lotm-roll-message");
});

// V13/V14 — html è HTMLElement nativo
Hooks.on("renderChatMessageHTML", (message, html) => {
  if (!message.rolls?.length) return;
  if (html instanceof HTMLElement) html.classList.add("lotm-roll-message");
});
