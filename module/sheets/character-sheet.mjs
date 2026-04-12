import { SEQUENCE_TABLE } from "../data/actor-character.mjs";

export class LotMCharacterSheet extends ActorSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["lotm", "sheet", "actor", "character"],
      template: "systems/lotm/templates/actor/character-sheet.hbs",
      width: 860,
      height: 780,
      tabs: [
        { navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "overview" }
      ],
      scrollY: [".sheet-body"],
      dragDrop: [{ dragSelector: ".item-list .item", dropSelector: null }],
    });
  }

  /** @override */
  async getData(options = {}) {
    try {
      const context = await super.getData(options);
      const sys = this.actor.system;

      context.system = sys;
      context.actor  = this.actor;
      context.isCharacter = this.actor.type === "character";
      context.isNpc = this.actor.type === "npc";
      context.isEditable = this.isEditable;

      // Attributi con finale calcolato per il template
      context.attrs = {
        strength:    { ...sys.strength,    fin: sys.strFin,  key: "strength",    label: "Forza",       abbr: "STR" },
        agility:     { ...sys.agility,     fin: sys.aglFin,  key: "agility",     label: "Agilità",     abbr: "AGL" },
        willpower:   { ...sys.willpower,   fin: sys.willFin, key: "willpower",   label: "Volontà",     abbr: "WILL" },
        physique:    { ...sys.physique,    fin: sys.phyFin,  key: "physique",    label: "Fisico",      abbr: "PHY" },
        charisma:    { ...sys.charisma,    fin: sys.chaFin,  key: "charisma",    label: "Carisma",     abbr: "CHA" },
        inspiration: { ...sys.inspiration, fin: sys.insFin,  key: "inspiration", label: "Ispirazione", abbr: "INS" },
        luck:        { ...sys.luck,        fin: sys.luckFin, key: "luck",        label: "Fortuna",     abbr: "LUCK" },
        education:   { ...sys.education,   fin: sys.eduFin,  key: "education",   label: "Educazione",  abbr: "EDU" },
      };

      context.attributeValue = sys.attributeValue;

      // Difese calcolate
      context.defense = {
        physical:   sys.physDefense,
        willpower:  sys.willDefense,
        resistance: sys.resistance,
        dPen:       sys.dPen,
        ignEva:     sys.ignEva,
        armor:      sys.defenseExtras?.armor ?? 0,
        dmgBonus:   sys.dmgBonus,
        mythicForm: sys.defenseExtras?.mythicForm ?? "",
      };

      // Sequenze disponibili per select (include "Senza Sequenza" in cima)
      context.sequenceOptions = [
        { value: 10, label: "Senza Sequenza", selected: sys.sequenceNumber === 10 },
        ...SEQUENCE_TABLE.map(s => ({
          value: s.seq,
          label: `Seq. ${s.seq} — ${s.name}`,
          selected: s.seq === sys.sequenceNumber,
        })),
      ];

      // Info sequenza corrente
      context.seqInfo = sys.currentSequenceInfo;

      // Tabella sequenze completa per reference
      context.sequenceTable = SEQUENCE_TABLE;

      // Items raggruppati per tipo
      const items = this.actor.items.contents;
      context.abilities  = items.filter(i => i.type === "ability");
      context.equipment  = items.filter(i => i.type === "equipment");

      return context;
    } catch(err) {
      console.error("LotM | Error in getData:", err);
      return super.getData(options);
    }
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    if (!this.isEditable) return;

    // Tiro attributo (clic sul nome attributo)
    html.find(".attr-roll").on("click", this._onRollAttribute.bind(this));

    // Aggiungi skill
    html.find(".skill-add").on("click", this._onSkillAdd.bind(this));

    // Rimuovi skill
    html.find(".skill-delete").on("click", this._onSkillDelete.bind(this));

    // Aggiungi item (abilità / equipment)
    html.find(".item-create").on("click", this._onItemCreate.bind(this));

    // Usa item
    html.find(".item-use").on("click", this._onItemUse.bind(this));

    // Modifica item
    html.find(".item-edit").on("click", ev => {
      const li = ev.currentTarget.closest("[data-item-id]");
      const item = this.actor.items.get(li.dataset.itemId);
      item?.sheet.render(true);
    });

    // Cancella item
    html.find(".item-delete").on("click", async ev => {
      const li = ev.currentTarget.closest("[data-item-id]");
      const item = this.actor.items.get(li.dataset.itemId);
      if (item) {
        const confirmed = await Dialog.confirm({
          title: "Elimina Elemento",
          content: `<p>Eliminare <strong>${item.name}</strong>?</p>`,
        });
        if (confirmed) item.delete();
      }
    });

    // Tiro dadi personalizzato
    html.find(".roll-dice").on("click", this._onRollDice.bind(this));

    // Bottone avanzamento Sequenza
    html.find(".btn-advance-sequence").on("click", ev => {
      ev.preventDefault();
      this.actor.advanceSequence();
    });

    // Sequence select → aggiorna nome
    html.find('select[name="system.sequenceNumber"]').on("change", ev => {
      const num = parseInt(ev.target.value);
      if (num === 10) {
        this.actor.update({ "system.sequenceName": "Senza Sequenza" });
      } else {
        const info = SEQUENCE_TABLE.find(s => s.seq === num);
        if (info) this.actor.update({ "system.sequenceName": info.name });
      }
    });
  }

  async _onRollAttribute(ev) {
    ev.preventDefault();
    const key = ev.currentTarget.dataset.attr;
    await this.actor.rollAttribute(key);
  }

  async _onRollDice(ev) {
    ev.preventDefault();
    const formula = ev.currentTarget.dataset.formula;
    const label   = ev.currentTarget.dataset.label ?? "";
    await this.actor.rollDice(formula, label);
  }

  async _onSkillAdd(ev) {
    ev.preventDefault();
    const skills = foundry.utils.deepClone(this.actor.system.skills ?? []);
    skills.push({ name: "", edu: 0, ins: 0, ext: 0, prac: 0, numb: 0, corr: 0 });
    await this.actor.update({ "system.skills": skills });
  }

  async _onSkillDelete(ev) {
    ev.preventDefault();
    const idx = parseInt(ev.currentTarget.closest("[data-index]").dataset.index);
    const skills = foundry.utils.deepClone(this.actor.system.skills ?? []);
    skills.splice(idx, 1);
    await this.actor.update({ "system.skills": skills });
  }

  async _onItemCreate(ev) {
    ev.preventDefault();
    const type = ev.currentTarget.dataset.type ?? "ability";
    const itemData = {
      name: type === "ability" ? "Nuova Abilità" : "Nuovo Oggetto",
      type,
    };
    const [item] = await this.actor.createEmbeddedDocuments("Item", [itemData]);
    item?.sheet.render(true);
  }

  async _onItemUse(ev) {
    ev.preventDefault();
    const li = ev.currentTarget.closest("[data-item-id]");
    const item = this.actor.items.get(li.dataset.itemId);
    await item?.use();
  }
}
