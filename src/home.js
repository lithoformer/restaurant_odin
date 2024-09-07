import "./styles.css";
import logopic from './Benders2_transparent_crop.png';

const home = function home() {
    const content = document.querySelector('#content');
    const innerContent = document.createElement('div');
    const logo = document.createElement('img');
    logo.src = logopic;

    logo.style.maxWidth = `100%`;
    logo.style.maxHeight = `100%`;

    innerContent.style.display = `flex`;
    innerContent.style.justifyContent = `space-between`;
    innerContent.style.alignItems = `center`;

    const title = document.createElement('div');

    const desc = document.createElement('p')
    desc.style.color = `white`;
    desc.style.fontSize = `2vw`;
    desc.textContent = `Serving New Jersey since 1980 and offering up a unique selection of bagels, wraps, sandwiches, and smoothies.  Voted Best Bagels in New Jersey 5 times in a row by New Jersey News!`;
    desc.style.margin = `200px`;
    title.appendChild(logo);
    title.appendChild(desc);
    title.style.display = `flex`;
    title.style.flexDirection = `column`;
    title.style.alignItems = `center`;
    title.style.justifyContent = `space-around`;
    title.style.backgroundColor = `rgba(0,0,0,.25)`;

    innerContent.appendChild(title);
    content.appendChild(innerContent);
    content.style.maxWidth = `100%`;
    content.style.maxHeight = `100%`;
}

export { home };