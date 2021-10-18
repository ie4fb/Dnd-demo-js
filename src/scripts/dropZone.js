export class DropZone {
  constructor(selector) {
    this._selector = selector;
    this._elements = [];
  }
  getDropZone() {
    this._dropZone = document.querySelector(this._selector);
    this._setEventListeners(this._dropZone, this._elements);
  }
  setDropedObject(id) {
    this._item = document.getElementById(id);
  }
  setHoveredObject(id) {
    this._hoveredItem = document.getElementById(id);
  }
  _appendItem(item, hoveredElement) {
    if (!item.classList.contains('moved')) {
      item.classList.add('moved');
      document.querySelector('.drop_zone').append(item);
    } else {
      document.querySelector('.drop_zone').insertBefore(item, hoveredElement);
    }
  }
  _setEventListeners(element, elements) {
    element.addEventListener('drop', (e, elements) =>
      this._dropEventHandler(e, this._item, this._appendItem, this._hoveredItem)
    );
    element.addEventListener('dragenter', this._dragEnter);
    element.addEventListener('dragover', this._dragOver);
  }
  _dropEventHandler(event, item, appendHandler, hoveredElement) {
    event.preventDefault();
    appendHandler(item, hoveredElement);
  }
  _dragEnd(event) {
    this.classList.remove('is_dragging');
    event.dataTransfer.dropEffect = 'unset';
  }
  _dragEnter(event) {
    event.preventDefault();
  }
  _dragOver(event) {
    event.preventDefault();
  }
}
