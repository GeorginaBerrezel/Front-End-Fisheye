import getPhotographers from "../services/photographers.services.js"
import { createCurrentPhotographerProfil, displayCta } from "../utils/photographers.js"
import { displayLightbox, closeLightbox, goToPreviousImage, goToNextImage } from "../utils/lightbox.js";

const { photographers, media } = await getPhotographers();
console.log(media)



document.addEventListener('keyup', function(e) {
    e = e || window.event;
    if (e.keyCode == 27) {
        closeLightbox();
    }
});
// Mettre le code JavaScript lié à la page photographer.html

// chercher avec un .find l'id que je veux pour afficher mle photographe correspondant
// filter pour avoir les images qui correspondent à mon bon photographe (id)
// TO DELETE function georgiGetAll(){

    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    const dropdownButton = dropdown.querySelector('.dropdown-button');
    
    function toggleDropdown(event) {
      dropdownContent.classList.toggle('open');
      const expanded = dropdownButton.getAttribute('aria-expanded') === 'true' || false;
      dropdownButton.setAttribute('aria-expanded', !expanded);
    }
    
    dropdown.addEventListener('click', toggleDropdown);
    
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        dropdownContent.classList.remove('open');
        dropdownButton.setAttribute('aria-expanded', 'false');
      }
    });
     // Afficher le contenu de la dropdown
    dropdownButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        toggleDropdown(event);
      }
    });
    
    function afficherContenuDropdown() {
        const options = dropdownContent.querySelectorAll('li');
        options.forEach((option) => {
          console.log(option.textContent);
        });
      }
      
      afficherContenuDropdown();
    
// const dropdown = document.querySelector('.dropdown');
// const select = document.querySelector('#filter');
// const dropdownContent = document.querySelector('.dropdown-content');

// dropdown?.addEventListener('click', (event) => {
//   dropdownContent.classList.toggle('open');
// });

// document.addEventListener('keydown', (event) => {
//   if (event.key === 'Escape') {
//     dropdownContent.classList.remove('open');
//     select.blur();
//   }
// });

// select.addEventListener('keydown', (event) => {
//   if (event.key === 'ArrowUp' && select.selectedIndex > 0) {
//     select.selectedIndex--;
//   } else if (event.key === 'ArrowDown' && select.selectedIndex < select.options.length - 1) {
//     select.selectedIndex++;
//   }
// });



// Récupérer les parametres de l'url
const paramsString = window.location.search;
let searchParams = new URLSearchParams(paramsString);
let photographerId = searchParams.get("id");

//chercher avec un .find dans photographers l'id qui m'interesse
const currentPhotographer = photographers.find(photograph => photograph.id == photographerId); // => comparaison "sans regarder le type nombre, tetxt, tableau, objet.." que je veux apporter
createCurrentPhotographerProfil (currentPhotographer);
//remplir le dom de la page 
// .filter pour chercher dans les médias 
let currentPhotographerMedias = media.filter(mediaPhotographer => mediaPhotographer.photographerId == photographerId); // => comparaison "sans regarder le type nombre, text, tableau, objet.." que je veux apporter
let currentPhotographerMediasFiltered;
console.log(currentPhotographer.name);
// .filter s'applique dataPhotographers.media (données json importé plus haut) ; il filtre les mediaPhotographer qui ont un photograherId equivalent à mes parametres d'id dans l'url
// mediasFactory(currentPhotographerMedias)
function displayDataMedia(media, name, photos, photographer) {
    // console.log(media);
    // je recupere ma div parent la plus haute
    // je decortique media 
    const { id, image, video, title, likes, price } = media;
    const picture = `assets/sample-photos/${name}/${image}`;
    const mediaDiv = document.createElement("article");


    // CREER UNE DIV QUI ENGLOBE MES DEUX H2
    const divInformations = document.createElement("div");
    divInformations.className = "informationsContent";
    divInformations.innerHTML = `
        <h2 tabindex="8" class="title">${title}</h2>
        <div class="likes" tabindex="8">
            <h2>${likes}</h2>
            <img src="assets/heart-solid.svg" style="
            height: 15px;
            width: 18px;
            color: #901C1C;
            cursor: pointer;
        ">
        </div>
    `;
    const likeButton = divInformations.children[1].children[1];
    const likesNumber = divInformations.children[1].children[0];
    likeButton.addEventListener('click', function () {
        if (media.liked) {
            media.likes = media.likes - 1;
            media.liked = false;
        } else {
            media.likes = media.likes + 1;
            media.liked = true;
        }
        likesNumber.innerHTML = media.likes;
        displayCta(photos, photographer)
    });

    const likesDiv = divInformations.querySelector('.likes');

    likesDiv.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            // Augmenter le nombre de likes lorsque la touche flèche vers le haut est enfoncée
            media.likes++;
        } else if (event.key === 'ArrowDown') {
            // Diminuer le nombre de likes lorsque la touche flèche vers le bas est enfoncée
            media.likes = Math.max(0, media.likes - 1); // Assurez-vous que le nombre de likes ne devient pas négatif
        }
        likesNumber.textContent = media.likes;
        displayCta(photos, photographer);
    });


    // Le cas ou c'est une image
    if (media.image) {
        const mediaImg = document.createElement("img");
        mediaImg.src = picture;
        mediaImg.alt = title;
        mediaImg.tabIndex = "8";
        mediaDiv.appendChild(mediaImg);
        mediaDiv.appendChild(divInformations);
        mediaImg.addEventListener('click', () => {
            const photoIndex = photos.findIndex(photo => { // findIndex retrouve la position de l'element
                return photo.id === media.id;
            })
            displayLightbox(photos, photoIndex, name)
        })

        mediaImg.onkeydown = function (e) {
            e = e || window.event;
            if (e.keyCode == 13) {
                const photoIndex = photos.findIndex(photo => { // findIndex retrouve la position de l'element
                    return photo.id === media.id;
                })
                displayLightbox(photos, photoIndex, name)
            }
        }

    } else  // Le cas ou c'est une VIDEO
    {
        const mediaVideo = document.createElement("video");// balise video avec src
        const videoSrc = `assets/sample-photos/${name}/${video}`;
        mediaVideo.src = videoSrc;
        mediaVideo.alt = title;
        mediaVideo.setAttribute("controls", "controls")
        mediaDiv.appendChild(mediaVideo);
        mediaDiv.appendChild(divInformations);
        mediaVideo.addEventListener('click', () => {
            console.log(photos)
            const videoIndex = photos.findIndex(video => {
                console.log(video) // findIndex retrouve la position de l'element
                return video.video === media.video;
            })
            console.log(videoIndex)
            displayLightbox(photos, videoIndex, name)
        })
        /*
        mediaDiv.appendChild(thumbnailImage);
        */

    }
    // afficher le titre, like ...

    // j'injestc un par un dans le DOM mediaDiv
    document.querySelector(".thumbnail_section").appendChild(mediaDiv);
};

// Fonction qui affiche la galerie 
function photographersMedias(photos, photographer) {
    const currentPhotographerFirstName = currentPhotographer.name.split(" ")[0];
    // vider le dom
    document.querySelector(".thumbnail_section").innerHTML = ""
    //boucle sur le tableau de media (soit video soit image)
    photos.forEach((media) => {
        //j'appelle displayDataMedia avec media qui est un seul objet
        displayDataMedia(media, currentPhotographerFirstName, photos, photographer)
    });
    displayCta(photos, photographer);// jexcecute ma fonction
    const previousArrow = document.getElementById('previousArrow');
    const nextArrow = document.getElementById('nextArrow');
    previousArrow.addEventListener('click', function () {
        goToPreviousImage(photos, currentPhotographerFirstName);
    })
    nextArrow.addEventListener('click', function () {
        goToNextImage(photos, currentPhotographerFirstName);
    })


    document.onkeyup = function (e) {
        e = e || window.event;
        if (e.keyCode == 39) {
            goToNextImage(photos, currentPhotographerFirstName);
        } 
        if (e.keyCode == 37) {
            console.log('previous');
            goToPreviousImage(photos, currentPhotographerFirstName);
        }
    };
};

let currentFilter = document.getElementById("filter");
changeFilter();

currentFilter.addEventListener('change', changeFilter);
function changeFilter() {
    const filterValue = currentFilter.value
    if (filterValue === "Popularité") {
        currentPhotographerMediasFiltered = currentPhotographerMedias.sort((a, b) => parseFloat(a.likes) - parseFloat(b.likes));
    } else if (filterValue === "Date") {
        currentPhotographerMediasFiltered = currentPhotographerMedias.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
        currentPhotographerMediasFiltered = currentPhotographerMedias.sort((a, b) => a.title.localeCompare(b.title));
    }
    photographersMedias(currentPhotographerMediasFiltered, currentPhotographer)
}

