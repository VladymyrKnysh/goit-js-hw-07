import { galleryItems } from './gallery-items.js';
// Change code below this line

 const markup = createMarkup(galleryItems)

function createMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
   return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
  })
    .join('')  
}
const list = document.querySelector('.gallery')
list.insertAdjacentHTML('afterbegin', markup)

const lightbox = new SimpleLightbox('.gallery a', {    
    'captionsData': 'alt',
    'captionPosition': 'bottom',
    'captionDelay': 250 
    
});

