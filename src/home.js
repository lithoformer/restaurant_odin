import "./styles.css";
import logopic from './Benders2_transparent_crop.png';

const home = function home() {
    const content = document.querySelector('#content');
    const innerContent = document.createElement('div');
    const logo = document.createElement('img');
    logo.src = logopic;

    logo.style.maxWidth = `50vw`;
    logo.style.maxHeight = `50vh`;

    innerContent.style.display = `flex`;
    innerContent.style.justifyContent = `space-between`;
    innerContent.style.alignItems = `center`;
    innerContent.style.maxHeight = `100vh`;
    innerContent.style.maxWidth = `100vw`;

    const title = document.createElement('div');

    const desc = document.createElement('p')
    desc.style.color = `white`;
    desc.style.fontSize = `4vw`;
    desc.textContent = `Serving New Jersey since 1980 and offering up a unique selection of bagels, wraps, sandwiches, and smoothies.  We have always prided ourselves in sourcing only the freshest ingredients and also in our commitment to quality and service. Voted Best Bagels in New Jersey 5 times in a row by New Jersey News!`;
    desc.style.margin = `4vw`;
    title.appendChild(logo);
    title.appendChild(desc);
    title.style.display = `flex`;
    title.style.flexDirection = `column`;
    title.style.alignItems = `center`;
    title.style.justifyContent = `space-between`;
    title.style.backgroundColor = `rgba(0,0,0,.25)`;
    title.style.maxHeight = `100vh`;
    title.style.maxWidth = `100vw`;

    innerContent.appendChild(title);
    content.appendChild(innerContent);
}

export { home };