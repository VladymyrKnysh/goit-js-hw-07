import { galleryItems } from './gallery-items.js';
// Change code below this line


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
}


const list = document.querySelector('.gallery')
list.insertAdjacentHTML('afterbegin', markup)
   
list.addEventListener('click', onListClick)

function onListClick(evt) {
  evt.preventDefault()
  if (evt.target.nodeName !== 'IMG') {
    return
  }
  const url = evt.target.dataset.source

  const instance = basicLightbox.create(`     
   <img src="${url}" width="800" height="600">   
`)
  instance.show()

  list.addEventListener('keydown', (evt) => {
  if (evt.code === "Escape") {
    instance.close()
  }
})

}




