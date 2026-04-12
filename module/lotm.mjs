/**
 * Lord of the Mysteries — Sistema Foundry VTT
 * Versione: 1.0.0
 */

import { LotMCharacterData } from "./data/actor-character.mjs";
import { LotMAbilityData, LotMEquipmentData } from "./data/item-ability.mjs";
import { LotMActor } from "./documents/actor.mjs";
import { LotMItem } from "./documents/item.mjs";
import { LotMCharacterSheet } from "./sheets/character-sheet.mjs";
import { LotMAbilitySheet } from "./sheets/ability-sheet.mjs";

/* ══════════════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════════════ */
Hooks.once("init", () => {
  console.log("LotM | Inizializzazione del sistema Lord of the Mysteries");

  // ── Configurazione Actor ──────────────────────────────────────
  CONFIG.Actor.documentClass = LotMActor;
  CONFIG.Actor.dataModels = {
    character: LotMCharacterData,
    npc:       LotMCharacterData,
  };

  // ── Configurazione Item ───────────────────────────────────────
  CONFIG.Item.documentClass = LotMItem;
  CONFIG.Item.dataModels = {
    ability:   LotMAbilityData,
    equipment: LotMEquipmentData,
  };

  // ── Registrazione Sheets ──────────────────────────────────────
  // V14 uses DocumentSheetConfig, V12/V13 uses Actors/Items.registerSheet
  try {
    DocumentSheetConfig.unregisterSheet(Actor, "core", ActorSheet);
    DocumentSheetConfig.registerSheet(Actor, "lotm", LotMCharacterSheet, {
      types: ["character", "npc"],
      makeDefault: true,
      label: "Lord of the Mysteries",
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
      types: ["character", "npc"],
      makeDefault: true,
      label: "Lord of the Mysteries",
    });
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("lotm", LotMAbilitySheet, {
      types: ["ability", "equipment"],
      makeDefault: true,
      label: "LotM Item",
    });
  }

  // ── Token: barre tracciabili (Vita e Spirito) ────────────────
  // Questi attributi appariranno nel menu Token → Attribute
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
  // Percentage helper for resource bars: {{pct current max}} → 0-100
  Handlebars.registerHelper("pct", (val, max) => {
    if (!max || Number(max) === 0) return 0;
    return Math.min(100, Math.max(0, Math.round((Number(val) / Number(max)) * 100)));
  });

  // ── Precarica template Handlebars ─────────────────────────────
  loadTemplates([
    "systems/lotm/templates/actor/character-sheet.hbs",
    "systems/lotm/templates/item/ability-sheet.hbs",
  ]);

  console.log("LotM | Sistema inizializzato con successo");
});

/* ══════════════════════════════════════════════════════════════════
   READY
══════════════════════════════════════════════════════════════════ */
Hooks.once("ready", () => {
  console.log("LotM | Pronto!");
});

/* ══════════════════════════════════════════════════════════════════
   CHAT MESSAGE (tiri dadi custom)
══════════════════════════════════════════════════════════════════ */
Hooks.on("renderChatMessage", (message, html) => {
  // Stile messaggi LotM nel chat
  if (message.rolls?.length) {
    html.addClass("lotm-roll-message");
  }
});
