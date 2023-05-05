export function createPhotographerFactory(photographer, target) {
    const { name, city, tagline, price, portrait, id } = photographer

    const article = document.createElement('article');
    const link = document.createElement("a"); /* Constant link pour créer mon élément "a" (href) qui apparaîtra dans mon DOM*/
    link.setAttribute("href", `photographer.html?id=${id}`); /* Je set un "href" + le "lien" de la page html avec l'"id" correspondant au click */
    article.appendChild(link);
    const img = document.createElement('img');
    img.setAttribute("src", `assets/photographers/${portrait}`)
    const h2 = document.createElement('h2');
    h2.textContent = name;
    h2.textContent = city;
    link.appendChild(img);
    link.appendChild(h2);
    target.appendChild(article);
}

export function createCurrentPhotographerProfil(photographer) {
    const { name, country, city, tagline, portrait } = photographer; /* J'ajoute dans ma constante "id" pour chercher les "données" correspondantes*/
    //TITRE
    // 2
    let h1 = document.createElement('h1');
    // 3
    h1.textContent = name;
    // 4
    document.querySelector(".name").appendChild(h1);

    //CITY
    let location = document.createElement('h2');
    location.textContent = city + ', ' + country;
    document.querySelector(".city").appendChild(location);

    //TAGLINE
    let citation = document.createElement('p');
    citation.textContent = tagline;
    document.querySelector(".tagline").appendChild(citation);

    //PORTRAIT
    /*const picture = `assets/photographers/${portrait}`;*/ // constant déja déclaré plus haut
    let photo = document.createElement('img');
    console.log(portrait);
    photo.setAttribute("src", `assets/photographers/${portrait}`);
    document.querySelector('.picture_photographer').appendChild(photo);

    // NAME FORM

    const getNameForm = document.querySelector("#nameForm");

    const nameForm = document.createElement("div");
    nameForm.className = "nameContent";
    nameForm.innerHTML = `
        <p>${name}</p>
        `;

        getNameForm.appendChild(nameForm);
}

export function displayCta(photos, photographer) {
    let counterLikes = 0; // créer une variable qui vaut zéro (point de depart du compteur)
    photos.forEach((photo) => { //je boucle sur LES "photos" pour accéder à chaque "photo"
        counterLikes += photo.likes; // j'ajoute à "counterLikes" le nombre de like à ma photo courante 
    });
    // CALL TO ACTION
    const callToAction = document.querySelector(".callToAction_section");
    callToAction.innerHTML = "";

    const cta = document.createElement("div");
    cta.className = "ctaContent";
    cta.innerHTML = `
            <p class="nombreLikes">${counterLikes}</p>
            <img src="assets/heart-solid.svg" style="
            height: 15px;
            width: 18px;">
            <div class="pricePhotographer">
            <p>${photographer.price}</p>
            <p> € / jour</p>
            </div>
        `;

    callToAction.appendChild(cta);
}


export default { createPhotographerFactory, createCurrentPhotographerProfil, displayCta }