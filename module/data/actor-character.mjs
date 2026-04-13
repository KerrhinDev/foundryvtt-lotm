const { fields } = foundry.data;

/**
 * Tabella Bonus Danno basata su STR
 */
const DMG_BONUS_TABLE = [
  { min: 1,  bonus: "-2"   },
  { min: 2,  bonus: "-1"   },
  { min: 3,  bonus: "0"    },
  { min: 4,  bonus: "+1D2" },
  { min: 5,  bonus: "+1D4" },
  { min: 6,  bonus: "+1D6" },
  { min: 7,  bonus: "+1D8" },
  { min: 8,  bonus: "+1D10" },
  { min: 9,  bonus: "+1D12" },
  { min: 10, bonus: "+2D6"  },
  { min: 11, bonus: "+2D8"  },
  { min: 12, bonus: "+2D10" },
  { min: 13, bonus: "+2D12" },
  { min: 14, bonus: "+3D8"  },
  { min: 15, bonus: "+3D10" },
  { min: 20, bonus: "+3D12" },
  { min: 25, bonus: "+4D10" },
  { min: 30, bonus: "+4D12" },
];

/**
 * Tabella Sequenze
 */
export const SEQUENCE_TABLE = [
  { seq: 9, name: "Ordinary Person", dig: 0, chrBonus: "-2",   strReq: 3,  val: "1"    },
  { seq: 8, name: "Sequence 8",      dig: 1, chrBonus: "-1",   strReq: 4,  val: "1D2"  },
  { seq: 7, name: "Sequence 7",      dig: 2, chrBonus: "0",    strReq: 5,  val: "1D4"  },
  { seq: 6, name: "Sequence 6",      dig: 3, chrBonus: "+1D2", strReq: 6,  val: "1D6"  },
  { seq: 5, name: "Sequence 5",      dig: 4, chrBonus: "+1D4", strReq: 7,  val: "1D8"  },
  { seq: 4, name: "Sequence 4",      dig: 5, chrBonus: "+1D6", strReq: 8,  val: "1D10" },
  { seq: 3, name: "Sequence 3",      dig: 6, chrBonus: "+1D6", strReq: 9,  val: "1D12" },
  { seq: 2, name: "Sequence 2",      dig: 7, chrBonus: "+1D8", strReq: 10, val: "2D6"  },
  { seq: 1, name: "Sequence 1",      dig: 8, chrBonus: "+1D10",strReq: 11, val: "2D8"  },
  { seq: 0, name: "Sequence 0",      dig: 9, chrBonus: "+1D12",strReq: 12, val: "2D10" },
];

/**
 * Livelli di abilità con bonus associati
 */
export const SKILL_LEVELS = {
  untrained:   { label: "Non addestrato", bonus: -4 },
  trained:     { label: "Addestrato",     bonus:  2 },
  proficiency: { label: "Competente",     bonus:  4 },
  advanced:    { label: "Avanzato",       bonus:  5 },
  mastery:     { label: "Maestria",       bonus:  6 },
  lore:        { label: "Sapere",         bonus:  7 },
  grandmaster: { label: "Grandmaster",    bonus:  8 },
};

/** Bonus numerico dal nome del livello */
export function skillLevelBonus(level) {
  return SKILL_LEVELS[level]?.bonus ?? -4;
}

function attributeField() {
  return new fields.SchemaField({
    found: new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true }),
    bey:   new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true }),
    corr:  new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true }),
    bonus: new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true }),
  });
}

function resourceField(initial = 10) {
  return new fields.SchemaField({
    value: new fields.NumberField({ required: true, nullable: false, initial }),
    max:   new fields.NumberField({ required: true, nullable: false, initial }),
    loss:  new fields.NumberField({ required: true, nullable: false, initial: 0 }),
    heal:  new fields.NumberField({ required: true, nullable: false, initial: 0 }),
  });
}

export class LotMCharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      // ── Informazioni Base ──────────────────────────────────────────
      surname:        new fields.StringField({ initial: "" }),
      characterName:  new fields.StringField({ initial: "" }),
      player:         new fields.StringField({ initial: "" }),
      age:            new fields.StringField({ initial: "" }),
      occupation:     new fields.StringField({ initial: "" }),
      pathway:        new fields.StringField({ initial: "" }),
      race:           new fields.StringField({ initial: "" }),
      gender:         new fields.StringField({ initial: "" }),
      sequenceNumber: new fields.NumberField({ required: true, nullable: false, initial: 10, min: 0, max: 10, integer: true }),
      sequenceName:   new fields.StringField({ initial: "Senza Sequenza" }),

      // ── Attributi ──────────────────────────────────────────────────
      strength:    attributeField(),
      agility:     attributeField(),
      willpower:   attributeField(),
      physique:    attributeField(),
      charisma:    attributeField(),
      inspiration: attributeField(),
      luck:        attributeField(),
      education:   attributeField(),

      // ── Vita ───────────────────────────────────────────────────────
      life:     resourceField(10),
      // HP guadagnati dagli avanzamenti di sequenza (auto-incrementati da advanceSequence)
      hpFromSequences: new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true }),

      // ── Spirito ────────────────────────────────────────────────────
      spiritual: resourceField(10),
      // Valori iniziali Will e Ins per calcolo SP (inseriti dal giocatore a creazione)
      spInitialWill: new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true }),
      spInitialIns:  new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true }),

      // ── Razionalità / Sanità ───────────────────────────────────────
      rationality: resourceField(10),

      // ── Punti Fortuna ──────────────────────────────────────────────
      luckPoints: new fields.SchemaField({
        value: new fields.NumberField({ required: true, nullable: false, initial: 0 }),
        max:   new fields.NumberField({ required: true, nullable: false, initial: 0 }),
        drain: new fields.NumberField({ required: true, nullable: false, initial: 0 }),
        heal:  new fields.NumberField({ required: true, nullable: false, initial: 0 }),
      }),

      // ── Schivata (skill speciale — auto-trained, usata in Difesa Fisica) ──
      dodgeLevel: new fields.StringField({ initial: "trained" }),

      // ── Difesa (bonus manuali aggiuntivi) ─────────────────────────
      defenseExtras: new fields.SchemaField({
        physBonus:   new fields.NumberField({ initial: 0, integer: true }),
        willBonus:   new fields.NumberField({ initial: 0, integer: true }),
        armor:       new fields.NumberField({ initial: 0, integer: true }),
        mythicForm:  new fields.StringField({ initial: "" }),
        dPenBonus:   new fields.NumberField({ initial: 0, integer: true }),
        ignEvaBonus: new fields.NumberField({ initial: 0, integer: true }),
      }),

      // ── Abilità Straordinarie (testo libero) ──────────────────────
      extraordinaryProperties: new fields.HTMLField({ initial: "" }),

      // ── Note / Biografia ──────────────────────────────────────────
      biography: new fields.HTMLField({ initial: "" }),
      notes:     new fields.HTMLField({ initial: "" }),

      // ── Skills (array dinamico con livelli discreti) ───────────────
      // Ogni skill: nome, livello (untrained→grandmaster), attributo collegato, bonus extra
      skills: new fields.ArrayField(new fields.SchemaField({
        name:      new fields.StringField({ initial: "" }),
        level:     new fields.StringField({ initial: "untrained" }),
        attribute: new fields.StringField({ initial: "agl" }),
        bonus:     new fields.NumberField({ initial: 0, integer: true }),
      })),
    };
  }

  // ── Attributi finali calcolati ─────────────────────────────────────
  get strFin()  { const s = this.strength;    return s.found + s.bey + s.corr + s.bonus; }
  get aglFin()  { const s = this.agility;     return s.found + s.bey + s.corr + s.bonus; }
  get willFin() { const s = this.willpower;   return s.found + s.bey + s.corr + s.bonus; }
  get phyFin()  { const s = this.physique;    return s.found + s.bey + s.corr + s.bonus; }
  get chaFin()  { const s = this.charisma;    return s.found + s.bey + s.corr + s.bonus; }
  get insFin()  { const s = this.inspiration; return s.found + s.bey + s.corr + s.bonus; }
  get luckFin() { const s = this.luck;        return s.found + s.bey + s.corr + s.bonus; }
  get eduFin()  { const s = this.education;   return s.found + s.bey + s.corr + s.bonus; }

  /** Somma totale di tutti gli attributi finali */
  get attributeValue() {
    return this.strFin + this.aglFin + this.willFin + this.phyFin +
           this.chaFin + this.insFin + this.luckFin + this.eduFin;
  }

  // ── Movimento ─────────────────────────────────────────────────────
  /** Distanza di movimento in metri = Forza + Agilità */
  get movement() { return this.strFin + this.aglFin; }

  // ── Schivata ──────────────────────────────────────────────────────
  /** Bonus numerico del livello di schivata */
  get dodgeBonus() {
    return skillLevelBonus(this.dodgeLevel);
  }

  // ── Difese calcolate ──────────────────────────────────────────────

  /**
   * Difesa Fisica: 10 + Agilità + Armatura + Schivata + bonus
   * Regola: "Physical Defense = 10 + Agility + Armor + Dodge Skill"
   */
  get physDefense() {
    return 10 + this.aglFin + this.defenseExtras.armor + this.dodgeBonus + this.defenseExtras.physBonus;
  }

  /**
   * Difesa Volontà: 10 + Volontà + bonus
   * Regola: "Will Defense = 10 + Will"
   */
  get willDefense() {
    return 10 + this.willFin + this.defenseExtras.willBonus;
  }

  /**
   * Difesa Fisica (Resistenza/Corporea): 10 + Fisico
   * Regola: "Physique Defense = 10 + Physique"
   */
  get resistance() {
    return 10 + this.phyFin;
  }

  /** Penetrazione Danni: 10 + Fisico + bonus */
  get dPen() {
    return 10 + this.phyFin + this.defenseExtras.dPenBonus;
  }

  /** Ignora Evasione: 10 + Forza + bonus */
  get ignEva() {
    return 10 + this.strFin + this.defenseExtras.ignEvaBonus;
  }

  /** Bonus danno da tabella STR */
  get dmgBonus() {
    const str = this.strFin;
    let result = "-2";
    for (const entry of DMG_BONUS_TABLE) {
      if (str >= entry.min) result = entry.bonus;
      else break;
    }
    return result;
  }

  // ── HP automatico ─────────────────────────────────────────────────
  /** HP base di partenza: 10 + Fisico attuale */
  get baseHp() { return 10 + this.phyFin; }

  /** HP massimi totali: base + guadagnati dagli avanzamenti sequenza */
  get totalMaxHp() { return this.baseHp + (this.hpFromSequences ?? 0); }

  // ── Sanità ────────────────────────────────────────────────────────
  /** Limite Sanità: Volontà + 10 (hard cap, impossibile recuperare oltre) */
  get sanityLimit() { return this.willFin + 10; }

  // ── Spiritualità ──────────────────────────────────────────────────
  /**
   * Limite SP: (Will₀ + Ins₀) + (livello_sequenza × InsFin)
   * livello_sequenza: 10 - sequenceNumber (seq9 = livello 1, seq0 = livello 10)
   */
  get spLimit() {
    const seqLevel = Math.max(0, 10 - this.sequenceNumber);
    return (this.spInitialWill + this.spInitialIns) + (seqLevel * this.insFin);
  }

  /** Info sequenza corrente */
  get currentSequenceInfo() {
    if (this.sequenceNumber === 10) return { seq: 10, name: "Senza Sequenza", dig: "-", chrBonus: "-", strReq: "-", val: "-" };
    return SEQUENCE_TABLE.find(s => s.seq === this.sequenceNumber) ?? SEQUENCE_TABLE[0];
  }
}
