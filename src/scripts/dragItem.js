export class DragItem {
  constructor(templateId, index, setDraggedItem, setHoveredItem) {
    this._templateId = templateId;
    this._index = index;
    this._setDraggedItem = setDraggedItem;
    this._setHoveredItem = setHoveredItem;
  }
  _getTemplate() {
    const itemElement = document
      .getElementById(this._templateId)
      .content.cloneNode(true);
    return itemElement;
  }
  generateItem() {
    this._element = this._getTemplate();

    this._element.id = this._id;
    this._setEventListeners(this._element);
    this._element.querySelector('.drag_item').id = this._index;
    this._element.querySelector('.text').textContent = this._index;
    this._element.querySelector('.drag_item').shape = this._element.querySelector('.drag_item').classList[0];
    console.log(this._element.querySelector('.drag_item').classList);
    return this._element;
  }
  _setEventListeners() {
    const element = this._element.querySelector('.drag_item');
    element.addEventListener('dragstart', (e) => {
      this._dragStart(e, this._setDraggedItem);
    });
    element.addEventListener('dragend', this._dragEnd);
    element.addEventListener('dragenter', (e) => {
      this._dragEnter(e, this._setHoveredItem);
    });
    element.addEventListener('drop', this._drop);
  }
  _dragStart(event, setElementHandler) {
    event.target.classList.add('is_dragging');
    event.dataTransfer.setData('text/plain', null);
    event.dataTransfer.dropEffect = 'copy';
    this._setDraggedItem(this._index);
    console.log(event)
  }
  _dragEnd(event) {
    this.classList.remove('is_dragging');
    event.dataTransfer.dropEffect = 'unset';
  }
  _dragEnter(event, setHoveredItem) {
 //   console.log(event);
    setHoveredItem(event.target.id)
  }
  _drop(event) {
    console.log('drop',event)
  }
}
