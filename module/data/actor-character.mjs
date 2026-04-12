const { fields } = foundry.data;

/**
 * Tabella Bonus Danno basata su STR (da VLOOKUP Excel)
 */
const DMG_BONUS_TABLE = [
  { min: 1, bonus: "-2" },
  { min: 2, bonus: "-1" },
  { min: 3, bonus: "0" },
  { min: 4, bonus: "+1D2" },
  { min: 5, bonus: "+1D4" },
  { min: 6, bonus: "+1D6" },
  { min: 7, bonus: "+1D8" },
  { min: 8, bonus: "+1D10" },
  { min: 9, bonus: "+1D12" },
  { min: 10, bonus: "+2D6" },
  { min: 11, bonus: "+2D8" },
  { min: 12, bonus: "+2D10" },
  { min: 13, bonus: "+2D12" },
  { min: 14, bonus: "+3D8" },
  { min: 15, bonus: "+3D10" },
  { min: 20, bonus: "+3D12" },
  { min: 25, bonus: "+4D10" },
  { min: 30, bonus: "+4D12" },
];

/**
 * Tabella Sequenze (da Excel sheet "Subject Information")
 */
export const SEQUENCE_TABLE = [
  { seq: 9, name: "Ordinary Person", dig: 0, chrBonus: "-2", strReq: 3, val: "1" },
  { seq: 8, name: "Sequence 8",      dig: 1, chrBonus: "-1", strReq: 4, val: "1D2" },
  { seq: 7, name: "Sequence 7",      dig: 2, chrBonus: "0",  strReq: 5, val: "1D4" },
  { seq: 6, name: "Sequence 6",      dig: 3, chrBonus: "+1D2", strReq: 6, val: "1D6" },
  { seq: 5, name: "Sequence 5",      dig: 4, chrBonus: "+1D4", strReq: 7, val: "1D8" },
  { seq: 4, name: "Sequence 4",      dig: 5, chrBonus: "+1D6", strReq: 8, val: "1D10" },
  { seq: 3, name: "Sequence 3",      dig: 6, chrBonus: "+1D6", strReq: 9, val: "1D12" },
  { seq: 2, name: "Sequence 2",      dig: 7, chrBonus: "+1D8", strReq: 10, val: "2D6" },
  { seq: 1, name: "Sequence 1",      dig: 8, chrBonus: "+1D10", strReq: 11, val: "2D8" },
  { seq: 0, name: "Sequence 0",      dig: 9, chrBonus: "+1D12", strReq: 12, val: "2D10" },
];

function attributeField() {
  return new fields.SchemaField({
    found: new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true }),
    bey:   new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true }),
    corr:  new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true }),
    bonus: new fields.NumberField({ required: true, nullable: false, initial: 0, integer: true,
      label: "Bonus aggiuntivo (da oggetti, abilità, ecc.)" }),
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
      sequenceNumber: new fields.NumberField({ required: true, nullable: false, initial: 9, min: 0, max: 9, integer: true }),
      sequenceName:   new fields.StringField({ initial: "Ordinary Person" }),

      // ── Attributi ──────────────────────────────────────────────────
      // Ogni attributo: found (Foundation), bey (Beyond), corr (Correction), bonus, fin (calcolato)
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

      // ── Spirito ────────────────────────────────────────────────────
      spiritual: resourceField(10),

      // ── Razionalità ────────────────────────────────────────────────
      rationality: resourceField(10),

      // ── Punti Fortuna ──────────────────────────────────────────────
      luckPoints: new fields.SchemaField({
        value: new fields.NumberField({ required: true, nullable: false, initial: 0 }),
        max:   new fields.NumberField({ required: true, nullable: false, initial: 0 }),
        drain: new fields.NumberField({ required: true, nullable: false, initial: 0 }),
        heal:  new fields.NumberField({ required: true, nullable: false, initial: 0 }),
      }),

      // ── Difesa (bonus manuali aggiuntivi) ─────────────────────────
      defenseExtras: new fields.SchemaField({
        physBonus:    new fields.NumberField({ initial: 0, integer: true }),
        willBonus:    new fields.NumberField({ initial: 0, integer: true }),
        healingBonus: new fields.NumberField({ initial: 0, integer: true }),
        armor:        new fields.NumberField({ initial: 0, integer: true }),
        mythicForm:   new fields.StringField({ initial: "" }),
        dPenBonus:    new fields.NumberField({ initial: 0, integer: true }),
        ignEvaBonus:  new fields.NumberField({ initial: 0, integer: true }),
      }),

      // ── Abilità Straordinarie (testo libero aggiuntivo) ───────────
      extraordinaryProperties: new fields.HTMLField({ initial: "" }),

      // ── Note / Biografia ──────────────────────────────────────────
      biography: new fields.HTMLField({ initial: "" }),
      notes:     new fields.HTMLField({ initial: "" }),

      // ── Skills (array dinamico) ────────────────────────────────────
      skills: new fields.ArrayField(new fields.SchemaField({
        name: new fields.StringField({ initial: "" }),
        edu:  new fields.NumberField({ initial: 0 }),
        ins:  new fields.NumberField({ initial: 0 }),
        ext:  new fields.NumberField({ initial: 0 }),
        prac: new fields.NumberField({ initial: 0 }),
        numb: new fields.NumberField({ initial: 0 }),
        corr: new fields.NumberField({ initial: 0 }),
      })),
    };
  }

  /** Calcola STR finale (include bonus da sequenza tramite schedule) */
  get strFin() {
    const s = this.strength;
    return s.found + s.bey + s.corr + s.bonus;
  }
  get aglFin() {
    const s = this.agility;
    return s.found + s.bey + s.corr + s.bonus;
  }
  get willFin() {
    const s = this.willpower;
    return s.found + s.bey + s.corr + s.bonus;
  }
  get phyFin() {
    const s = this.physique;
    return s.found + s.bey + s.corr + s.bonus;
  }
  get chaFin() {
    const s = this.charisma;
    return s.found + s.bey + s.corr + s.bonus;
  }
  get insFin() {
    const s = this.inspiration;
    return s.found + s.bey + s.corr + s.bonus;
  }
  get luckFin() {
    const s = this.luck;
    return s.found + s.bey + s.corr + s.bonus;
  }
  get eduFin() {
    const s = this.education;
    return s.found + s.bey + s.corr + s.bonus;
  }

  /** Valore totale attributi */
  get attributeValue() {
    return this.strFin + this.aglFin + this.willFin + this.phyFin +
           this.chaFin + this.insFin + this.luckFin + this.eduFin;
  }

  /** Difesa Fisica: 10 + PHY + extras */
  get physDefense() {
    return 10 + this.phyFin + this.defenseExtras.physBonus + this.defenseExtras.healingBonus;
  }

  /** Difesa Volontà: 10 + WILL + extras */
  get willDefense() {
    return 10 + this.willFin + this.defenseExtras.willBonus;
  }

  /** Resistenza: 10 + PHY */
  get resistance() {
    return 10 + this.phyFin;
  }

  /** Penetrazione Danni */
  get dPen() {
    return 10 + this.phyFin + this.defenseExtras.dPenBonus;
  }

  /** Ignora Evasione */
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

  /** Info sequenza corrente */
  get currentSequenceInfo() {
    return SEQUENCE_TABLE.find(s => s.seq === this.sequenceNumber) ?? SEQUENCE_TABLE[0];
  }

  // prepareDerivedData() removed: TypeDataModel fields are read-only after definition in V14.
  // Resource max values are managed manually by the user via the sheet inputs.
}
