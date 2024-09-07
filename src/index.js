import { about } from "./about.js";
import { contact } from "./contact.js";
import { home } from "./home.js";
import { menu } from "./menu.js";

const navbar = document.querySelector('#navbar');
navbar.style.display = `flex`;
navbar.style.justifyContent = `center`;
navbar.style.alignItems = `center`;
navbar.style.gap = `2rem`;

const content = document.querySelector('#content');

const homePage = document.querySelector('#home');
homePage.addEventListener('click', () => {
    clear();
    home();
})

const menuPage = document.querySelector('#menu');
menuPage.addEventListener('click', () => {
    clear();
    menu();
})

const aboutPage = document.querySelector('#about');
aboutPage.addEventListener('click', () => {
    clear();
    about();
})

const contactPage = document.querySelector('#contact');
contactPage.addEventListener('click', () => {
    clear();
    contact();
})

function clear() {
    const innerContent = content.querySelector('div');
    if (innerContent) {
        innerContent.remove();
    }
}

home();
