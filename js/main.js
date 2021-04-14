import galleryItems from './gallery-items.js';
// console.log(galleryItems);

const refs = {
  galleryContainer: document.querySelector('.js-gallery'),
  galleryImg: document.querySelector('.gallery__image'),
  modalWindow: document.querySelector('.js-lightbox'),
  lightBoxImg: document.querySelector('.lightbox__image'),
  lightBoxOverlay: document.querySelector('.lightbox__overlay'),
  closeBtn: document.querySelector('[data-action="close-lightbox"]'),
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
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image

refs.galleryContainer.addEventListener('click', onImageClick);

function onModalOpen () {
  refs.modalWindow.classList.add('is-open');
}

function onImageClick (evt) {
  evt.preventDefault();
    if (evt.target.nodeName !== "IMG") { 
    return;
    }

    const originalUrl = evt.target.dataset.source;
    const imageAlt = evt.target.alt;
    
    onModalOpen();
    refs.lightBoxImg.src = originalUrl;
    refs.lightBoxImg.alt = imageAlt;
}

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"]
// Закрытие модального окна по клику на div.lightbox__overlay

refs.closeBtn.addEventListener('click', onModalClose);
refs.lightBoxOverlay.addEventListener('click', onModalClose);

function onModalClose () {
  refs.modalWindow.classList.remove('is-open');
  
  refs.lightBoxImg.src = '';
  refs.lightBoxImg.alt = '';
}

// Закрытие модального окна по нажатию клавиши ESC
document.addEventListener('keydown', closeWithEsc);

function closeWithEsc (e) {
 if(e.code === "Escape") {
   onModalClose();
 };
}