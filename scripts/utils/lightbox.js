// LIGHTBOX avec +1 et -1 sur les index 
export function displayLightbox(images, imageToDisplayIndex, photographerName,) {
    const lightbox = document.getElementById('lightbox'); // balise <div>
    const lightboxImage = document.getElementById('lightboxImage'); // balise <img>
    const lightboxVideo = document.getElementById('lightboxVideo'); // balise <video>
    const lightboxImageTitle = document.getElementById('lightboxImageTitle');
    const imageToDisplay = images[imageToDisplayIndex];
    if (imageToDisplay?.image) {
        lightboxImage.src = `assets/sample-photos/${photographerName}/${imageToDisplay.image}`; // On change la src de l'image à afficher
        lightbox.classList.add("show"); // Class CSS show ajoute la propriété display: block
        lightboxImageTitle.textContent = imageToDisplay.title;
        // stocker la position (l'index) de l'image qui vient d'etre ouverte
        lightbox.dataset.indexImage = imageToDisplayIndex;
            // Au clic sur les flêches, appeler les deux fonctions
    } else {
        lightboxVideo.src = `assets/sample-photos/${photographerName}/${imageToDisplay.video}`;
    }
}

export function closeLightbox() {
    const lightbox = document.getElementById('lightbox'); // balise <div>
    lightbox.classList.remove("show");
}

// Définir deux fonctions : image précédente et image suivant au CLICK
export function goToPreviousImage(images, photographerName) {
    console.log(images);
    const lightbox = document.getElementById('lightbox'); // getElement la lightbox
    const indexImage = parseInt(lightbox.dataset.indexImage); // recuperr valeur de l'indexImage
    const previousImage = indexImage === 0 ? images.length - 1 : indexImage - 1; // soustraire à mon index
    displayLightbox(images, previousImage, photographerName);

}

export function goToNextImage(images, photographerName) {
    const lightbox = document.getElementById('lightbox'); // getElement la lightbox
    const indexImage = parseInt(lightbox.dataset.indexImage); // recuperr valeur de l'indexImage
    const nextImage = indexImage === images.length - 1 ? 0 : indexImage + 1; // additionner à mon index
    console.log(nextImage);
    displayLightbox(images, nextImage, photographerName);
}


export default { displayLightbox, closeLightbox, goToPreviousImage, goToNextImage }
