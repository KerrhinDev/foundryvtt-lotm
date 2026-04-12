export class LotMAbilitySheet extends ItemSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["lotm", "sheet", "item"],
      template: "systems/lotm/templates/item/ability-sheet.hbs",
      width: 500,
      height: 480,
    });
  }

  /** @override */
  async getData(options = {}) {
    const context = await super.getData(options);
    context.system = this.item.system;
    context.isAbility = this.item.type === "ability";
    context.isEquipment = this.item.type === "equipment";
    context.abilityTypes = {
      active:  "Attiva",
      passive: "Passiva",
      ritual:  "Rituale",
      formula: "Formula / Pozione",
    };
    context.equipmentTypes = {
      weapon:     "Arma",
      armor:      "Armatura",
      consumable: "Consumabile",
      tool:       "Strumento",
      other:      "Altro",
    };
    context.rarities = {
      common:    "Comune",
      uncommon:  "Non comune",
      rare:      "Raro",
      legendary: "Leggendario",
    };
    context.enrichedDescription = await TextEditor.enrichHTML(
      this.item.system.description ?? "",
      { secrets: this.item.isOwner, rollData: this.item.actor?.getRollData() ?? {} }
    );
    return context;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Toggle tra vista renderizzata e editor HTML sorgente
    html.find(".desc-toggle").on("click", ev => {
      const container = html.find(".lotm-desc-container")[0];
      const view    = container.querySelector(".lotm-description-view");
      const editor  = container.querySelector(".lotm-desc-editor");
      const btn     = ev.currentTarget;
      if (editor.style.display === "none") {
        view.style.display   = "none";
        editor.style.display = "block";
        btn.textContent      = "👁 Mostra";
      } else {
        view.style.display   = "block";
        editor.style.display = "none";
        btn.textContent      = "✎ Modifica HTML";
      }
    });
  }
}
