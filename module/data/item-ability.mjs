const { fields } = foundry.data;

export class LotMAbilityData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType:  new fields.StringField({ initial: "active", choices: ["active", "passive", "ritual", "formula"] }),
      sequence:     new fields.NumberField({ initial: 9, min: 0, max: 9, integer: true }),
      pathway:      new fields.StringField({ initial: "" }),
      cost:         new fields.StringField({ initial: "" }),
      range:        new fields.StringField({ initial: "" }),
      duration:     new fields.StringField({ initial: "" }),
      ritual:       new fields.BooleanField({ initial: false }),
      description:  new fields.HTMLField({ initial: "" }),
      notes:        new fields.StringField({ initial: "" }),
    };
  }
}

export class LotMEquipmentData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      equipmentType: new fields.StringField({ initial: "weapon", choices: ["weapon", "armor", "consumable", "tool", "other"] }),
      quantity:      new fields.NumberField({ initial: 1, min: 0, integer: true }),
      weight:        new fields.NumberField({ initial: 0 }),
      price:         new fields.StringField({ initial: "" }),
      damage:        new fields.StringField({ initial: "" }),
      armor:         new fields.NumberField({ initial: 0, integer: true }),
      rarity:        new fields.StringField({ initial: "common", choices: ["common", "uncommon", "rare", "legendary"] }),
      equipped:      new fields.BooleanField({ initial: false }),
      description:   new fields.HTMLField({ initial: "" }),
    };
  }
}
