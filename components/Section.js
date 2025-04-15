class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.array.forEach((item) => {
      //call the render, and pass it the item as an argument
    });
  addItem(element){
    //add element to the container
  } 
  }
}

export default Section;
