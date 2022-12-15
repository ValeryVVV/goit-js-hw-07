import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector('.gallery');
const imagesMarkup = createImagesCardsMarkup(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);

imageContainer.addEventListener('click', onClickImage);

function createImagesCardsMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `
    }).join('');

}

function onClickImage(event) {
    event.preventDefault();

    if(event.target.classList.contains("gallery")) {
        return;
    }


    console.log(event.target);


    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `)

    instance.show()

    // if(instance.code === 'Escape') {
    //     instance.close();
    // }
}


console.log(galleryItems);
