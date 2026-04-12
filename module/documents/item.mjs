export class LotMItem extends Item {
  /** @override */
  prepareData() {
    super.prepareData();
  }

  async use() {
    const sys = this.system;
    const content = `<div class="lotm-chat-item">
      <h3>${this.name}</h3>
      ${sys.cost ? `<p><strong>Costo:</strong> ${sys.cost}</p>` : ""}
      ${sys.range ? `<p><strong>Gittata:</strong> ${sys.range}</p>` : ""}
      ${sys.duration ? `<p><strong>Durata:</strong> ${sys.duration}</p>` : ""}
      <hr>
      <div class="description">${sys.description ?? ""}</div>
    </div>`;

    ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content,
    });
  }
}
