import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems)

 const markup = createMarkup(galleryItems)

function createMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
   return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  })
    .join('')
    console.log(markup);
}
const container = document.querySelector('.gallery')
container.insertAdjacentHTML('afterbegin', markup)
    



