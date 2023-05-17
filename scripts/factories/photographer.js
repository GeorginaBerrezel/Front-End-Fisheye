const dropdown = document.querySelector('.dropdown');
const select = document.querySelector('#filter');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown?.addEventListener('click', (event) => {
  dropdownContent.classList.toggle('open');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    dropdownContent.classList.remove('open');
    select.blur();
  }
});

select.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' && select.selectedIndex > 0) {
    select.selectedIndex--;
  } else if (event.key === 'ArrowDown' && select.selectedIndex < select.options.length - 1) {
    select.selectedIndex++;
  }
});


// get element byId
// // function openDropdown() {
// //     document.onkeydown = function (e) {
// //         e = e || window.event;
// //         if (e.keyCode == 13)
// //         openDropdown();
// //     }
// // }

// //add photographers 

// // 1.recupe dans le dom le div parent dans lequel je veux inserer ma donnée
// // 2. créer virtuellement ma futur balise (h1...)
// // remplir avec text, attribut img... image = img.setAttribute("src", picture)

// // .appendChild pour insérer dans le dom

// // 1. 
// let getDivName = document.querySelector('.name');
// let getDivLocation = document.querySelector('.city');
// let getDivCitation = document.querySelector('.tagline');
// let getDivPicture = document.querySelector('.picture_photographer');
// const thumbnailSection = document.querySelector(".thumbnail_section");

// function photographerPageFactory(data) {
//     const { name, country, city, tagline, portrait } = data; /* J'ajoute dans ma constante "id" pour chercher les "données" correspondantes*/
//     //TITRE
//     // 2
//     let h1 = document.createElement('h1');
//     // 3
//     h1.textContent = name;
//     // 4
//     getDivName.appendChild(h1);

//     //CITY
//     let location = document.createElement('h2');
//     location.textContent = city + ', ' + country;
//     getDivLocation.appendChild(location);

//     //TAGLINE
//     let citation = document.createElement('p');
//     citation.textContent = tagline;
//     getDivCitation.appendChild(citation);

//     //PORTRAIT
//     /*const picture = `assets/photographers/${portrait}`;*/ // constant déja déclaré plus haut
//     let photo = document.createElement('img');
//     console.log(portrait);
//     photo.setAttribute("src", `assets/photographers/${portrait}`);
//     getDivPicture.appendChild(photo);

//     // NAME FORM

//     const getNameForm = document.querySelector("#nameForm");

//     const nameForm = document.createElement("div");
//     nameForm.className = "nameContent";
//     nameForm.innerHTML = `
//         <p>${name}</p>
//         `;

//     getNameForm.appendChild(nameForm);
// }


// Fonction pour les MEDIAS qui sera un tableau d'objet comme sur l'index, boucle 

/**/

// data (11) est mon tableau d'objet filtré 
// media est l'objet virtuel d'une seul occruence de la boucle
// j'appelle displayDataMedia avec en parametre (media) qui est crée en bas

// Dans le scope globale de mon fichier, stocker mes photos et les photographes
// pour y avoir acces partout pour ne plus le passer en parametres 
// Déféinire dans 2 variable globale dans ce fichier avec une valeur nul,
// Re exetuter cette functions en parametres 

// 1 - Ecouteru d'evenement sur mon select
// 2 - Nouvelle funtion qui vient trier par rapport aux différents critères
// 3 - Vider la galerie et la re rendre grace à ma fonction photographerMedias

// au clic du coeur (si pas liké) on vient rajouter une propriété liked de la photo
// au clic du coeur (si liké) on vient mettre la propriété liked à false et on retire un like du compteur
// booleen (true ou false)
// add prpopriété like sur la photo
// add like au compteur

// re declanche la function displayCta pour que le commpteur nous donne le bon nombre






