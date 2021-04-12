import images from './gallery-items.js';
console.log(images);

const listRef = document.querySelector('.gallery');
const createEl = createImagesMarkup(images);
console.log(createEl);
// listRef.insertAdjacentElement('beforeend', createEl);

function createImagesMarkup(array) {
    return array.map( ({preview, original, description}) => { 
    `<li class="gallery__item">
      <a
      class="gallery__link"
      href="${original}"
      >
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
      </a>
    </li>
    `}).join('');
};
