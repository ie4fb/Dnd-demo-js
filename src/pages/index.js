import { DragItem } from '../scripts/dragItem.js';
import { DropZone } from '../scripts/dropZone.js';
const dropContainer = document.querySelector('.drop_zone');
const dragContainer = document.querySelector('.drag_zone');
const circle = document.getElementById('circle');
const square = document.getElementById('square');
const dropZone = new DropZone('.drop_zone');
dropZone.getDropZone();

function addElement(figure) {
  dragContainer.append(figure);
}
const items = [
  'circle',
  'square',
  'circle',
  'square',
  'circle',
  'square',
  'square',
];

items.forEach((item, index) => {
  const dragItem = new DragItem(
    item,
    index,
    (id) => {
      dropZone.setDropedObject(id);
    },
    (id) => {
      dropZone.setHoveredObject(id);
    }
  );
  const figure = dragItem.generateItem();
  addElement(figure);
});
