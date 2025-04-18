class Section {
  constructor({ items, render, containerSelector }) {
    this._items = items;
    this._renderer = render;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}

export default Section;
