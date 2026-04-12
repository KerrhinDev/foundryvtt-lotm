import { openDiceDialog, openGenericRoll } from "../apps/dice-dialog.mjs";

export class LotMActor extends Actor {
  /** @override */
  prepareData() {
    super.prepareData();
  }

  /** @override */
  prepareBaseData() {}

  /** @override */
  prepareDerivedData() {}

  /**
   * Attributi tracciabili per le barre token.
   * Restituisce { value, max } per le risorse principali.
   * @override
   */
  getBarAttribute(barName, { alternative } = {}) {
    const attr = alternative ?? barName;
    const mapping = {
      bar1:       "life",
      bar2:       "spiritual",
      life:       "life",
      spiritual:  "spiritual",
      rationality:"rationality",
      luckPoints: "luckPoints",
    };
    const key = mapping[attr];
    if (key && this.system?.[key]) {
      const res = this.system[key];
      if (typeof res.value === "number" && typeof res.max === "number") {
        return { type: "bar", attribute: key, value: res.value, max: res.max, editable: true };
      }
    }
    return super.getBarAttribute(barName, { alternative });
  }

  /**
   * Apre il dialog di tiro avanzato per un attributo.
   * @param {string} attrKey
   */
  async rollAttribute(attrKey) {
    return openDiceDialog(this, attrKey);
  }

  /**
   * Tira una formula generica con chat card stilizzata.
   * @param {string} formula  es. "1D6", "2D10"
   * @param {string} label
   */
  async rollDice(formula, label = "") {
    return openGenericRoll(this, formula, label);
  }
}
