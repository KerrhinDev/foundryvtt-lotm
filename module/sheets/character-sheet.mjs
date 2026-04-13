import { SEQUENCE_TABLE, SKILL_LEVELS, skillLevelBonus } from "../data/actor-character.mjs";

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

      context.defense = {
        physical:   sys.physDefense,
        willpower:  sys.willDefense,
        resistance: sys.resistance,
        dPen:       sys.dPen,
        ignEva:     sys.ignEva,
        armor:      sys.defenseExtras?.armor ?? 0,
        dmgBonus:   sys.dmgBonus,
        mythicForm: sys.defenseExtras?.mythicForm ?? "",
        movement:   sys.movement,
      };

      context.sequenceOptions = [
        { value: 10, label: "Senza Sequenza", selected: sys.sequenceNumber === 10 },
        ...SEQUENCE_TABLE.map(s => ({
          value: s.seq,
          label: `Seq. ${s.seq} — ${s.name}`,
          selected: s.seq === sys.sequenceNumber,
        })),
      ];

      context.seqInfo = sys.currentSequenceInfo;
      context.sequenceTable = SEQUENCE_TABLE;

      // Opzioni livello skill per i dropdown
      context.skillLevelOptions = Object.entries(SKILL_LEVELS).map(([key, info]) => ({
        value: key,
        label: `${info.label} (${info.bonus >= 0 ? "+" : ""}${info.bonus})`,
      }));

      // Opzioni attributo per i dropdown skill
      context.attrOptions = [
        { value: "str",  label: "FOR" },
        { value: "agl",  label: "AGL" },
        { value: "will", label: "VOL" },
        { value: "phy",  label: "FIS" },
        { value: "cha",  label: "CHA" },
        { value: "ins",  label: "ISP" },
        { value: "luck", label: "LCK" },
        { value: "edu",  label: "EDU" },
      ];

      // Opzioni livello per dropdown Schivata (stessa lista)
      context.skillLevelOptions = Object.entries(SKILL_LEVELS).map(([key, info]) => ({
        value: key,
        label: `${info.label} (${info.bonus >= 0 ? "+" : ""}${info.bonus})`,
        selected: sys.dodgeLevel === key,
      }));

      // Calcola totale di ogni skill per il display (livello bonus + attributo finale + bonus extra)
      const attrMap = {
        str: sys.strFin, agl: sys.aglFin, will: sys.willFin, phy: sys.phyFin,
        cha: sys.chaFin, ins: sys.insFin, luck: sys.luckFin, edu: sys.eduFin,
      };
      context.skills = (sys.skills ?? []).map(sk => ({
        ...sk,
        total: skillLevelBonus(sk.level) + (attrMap[sk.attribute] ?? 0) + (sk.bonus ?? 0),
      }));

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

    // Ottieni l'elemento root — compatibile jQuery (V12/V13) e HTMLElement nativo (V14)
    const root = (html instanceof HTMLElement) ? html : (html?.[0] ?? null);
    console.log("LotM | CharacterSheet activateListeners — html type:", typeof html, "| isJQuery:", typeof html?.find === "function", "| root:", root?.tagName ?? "NULL");
    if (!root) { console.error("LotM | activateListeners: root element non trovato"); return; }

    // Helper: registra un listener su tutti gli elementi che corrispondono al selettore
    const on = (sel, evt, fn) => root.querySelectorAll(sel).forEach(el => el.addEventListener(evt, fn));

    if (!this.isEditable) return;

    // Tiro attributo
    on(".attr-roll", "click", this._onRollAttribute.bind(this));

    // Skill
    on(".skill-add",    "click", this._onSkillAdd.bind(this));
    on(".skill-delete", "click", this._onSkillDelete.bind(this));

    // Item create
    on(".item-create", "click", this._onItemCreate.bind(this));

    // Item use
    on(".item-use", "click", this._onItemUse.bind(this));

    // Item edit
    on(".item-edit", "click", ev => {
      const li = ev.currentTarget.closest("[data-item-id]");
      const item = this.actor.items.get(li?.dataset.itemId);
      item?.sheet.render(true);
    });

    // Item delete
    on(".item-delete", "click", async ev => {
      const li = ev.currentTarget.closest("[data-item-id]");
      const item = this.actor.items.get(li?.dataset.itemId);
      if (!item) return;
      const confirmed = await Dialog.confirm({
        title: "Elimina Elemento",
        content: `<p>Eliminare <strong>${item.name}</strong>?</p>`,
      });
      if (confirmed) item.delete();
    });

    // Roll dado skill
    on(".skill-roll", "click", this._onSkillRoll.bind(this));

    // Roll dice generico
    on(".roll-dice", "click", this._onRollDice.bind(this));

    // Avanzamento Sequenza
    on(".btn-advance-sequence", "click", ev => {
      ev.preventDefault();
      this.actor.advanceSequence();
    });

    // Sequence select → aggiorna nome
    on('select[name="system.sequenceNumber"]', "change", ev => {
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

  async _onSkillRoll(ev) {
    ev.preventDefault();
    const idx   = parseInt(ev.currentTarget.dataset.index);
    const skill = this.actor.system.skills?.[idx];
    if (!skill) return;
    const attrMap = {
      str: this.actor.system.strFin, agl: this.actor.system.aglFin,
      will: this.actor.system.willFin, phy: this.actor.system.phyFin,
      cha: this.actor.system.chaFin, ins: this.actor.system.insFin,
      luck: this.actor.system.luckFin, edu: this.actor.system.eduFin,
    };
    const attrVal  = attrMap[skill.attribute] ?? 0;
    const lvlBonus = skillLevelBonus(skill.level);
    const total    = lvlBonus + attrVal + (skill.bonus ?? 0);
    const sign     = total >= 0 ? "+" : "";
    const label    = skill.name || "Abilità";
    await this.actor.rollDice(`1d20${sign}${total}`, label);
  }

  async _onSkillAdd(ev) {
    ev.preventDefault();
    const skills = foundry.utils.deepClone(this.actor.system.skills ?? []);
    skills.push({ name: "", level: "untrained", attribute: "agl", bonus: 0 });
    await this.actor.update({ "system.skills": skills });
  }

  async _onSkillDelete(ev) {
    ev.preventDefault();
    const idx = parseInt(ev.currentTarget.closest("[data-index]")?.dataset.index);
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
    const item = this.actor.items.get(li?.dataset.itemId);
    console.log("LotM | item use:", item?.name, "| type:", item?.type);
    await item?.use();
  }
}
