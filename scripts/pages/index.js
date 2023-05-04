import getPhotographers from "../services/photographers.services.js"
import { createPhotographerFactory } from '../utils/photographers.js'

async function displayPhotographers() {
    const { photographers } = await getPhotographers();
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        createPhotographerFactory(photographer, photographersSection)
    });
}

displayPhotographers()