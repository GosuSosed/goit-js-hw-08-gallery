import galleryItems from './gallery-items.js';
// console.log(galleryItems);

const refs = {
  galleryContainer: document.querySelector('.js-gallery'),
}

const createEl = createGalleryMarkup(galleryItems);
refs.galleryContainer.insertAdjacentHTML('beforeend', createEl);

function createGalleryMarkup (images) {
  return images.map( ({preview, original, description}) => {
    return `
    <li class="gallery__item">
      <a 
       class="gallery__link" 
       href="${original}"
      >
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}">
      </a>
    </li>
    `
  }).join('');
}
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
refs.galleryContainer.addEventListener('click', onImageClick)

function onImageClick (evt) {
  evt.preventDefault();
    if (evt.target.nodeName !== "IMG") { 
    return;
    }

}