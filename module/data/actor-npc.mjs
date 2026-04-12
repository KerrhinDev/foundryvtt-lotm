const { fields } = foundry.data;

function resourceField(initial = 10) {
  return new fields.SchemaField({
    value: new fields.NumberField({ required: true, nullable: false, initial }),
    max:   new fields.NumberField({ required: true, nullable: false, initial }),
  });
}

export class LotMNPCData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      npcType:        new fields.StringField({ initial: "minion", choices: ["minion","elite","boss","unique"] }),
      threat:         new fields.NumberField({ initial: 1, min: 1, max: 10, integer: true }),
      pathway:        new fields.StringField({ initial: "" }),
      sequenceNumber: new fields.NumberField({ initial: 9, min: 0, max: 9, integer: true }),
      sequenceName:   new fields.StringField({ initial: "" }),

      // Attributi — solo valore finale
      strength:    new fields.NumberField({ initial: 0, integer: true }),
      agility:     new fields.NumberField({ initial: 0, integer: true }),
      willpower:   new fields.NumberField({ initial: 0, integer: true }),
      physique:    new fields.NumberField({ initial: 0, integer: true }),
      charisma:    new fields.NumberField({ initial: 0, integer: true }),

      // Risorse
      life:      resourceField(10),
      spiritual: resourceField(5),

      // Difesa (manuale per NPC)
      physDefense: new fields.NumberField({ initial: 10, integer: true }),
      willDefense: new fields.NumberField({ initial: 10, integer: true }),
      armor:       new fields.NumberField({ initial: 0, integer: true }),
      dmgBonus:    new fields.StringField({ initial: "0" }),
      resistance:  new fields.NumberField({ initial: 10, integer: true }),

      // Azioni e note
      actions: new fields.HTMLField({ initial: "" }),
      notes:   new fields.HTMLField({ initial: "" }),
    };
  }
}
