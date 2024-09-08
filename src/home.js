import "./styles.css";
import logopic from './Benders2_transparent_crop.png';

const home = function home() {
    const content = document.querySelector('#content');
    const innerContent = document.createElement('div');
    const logo = document.createElement('img');
    logo.src = logopic;

    logo.style.maxWidth = `40vw`;
    logo.style.maxHeight = `40vh`;

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

    const footer = document.createElement('footer');
    const creditspan = document.createElement('span');
    creditspan.textContent = `Photo by `;
    const creditspan2 = document.createElement('a');
    creditspan2.href = `https://unsplash.com/@taradee`;
    creditspan2.textContent = `Tara Evans`;
    const creditspan3 = document.createElement('span');
    creditspan3.textContent = ` on `;
    const creditspan4 = document.createElement('a');
    creditspan4.href = `https://unsplash.com/`;
    creditspan4.textContent = `Unsplash.`;
    footer.appendChild(creditspan);
    footer.appendChild(creditspan2);
    footer.appendChild(creditspan3);
    footer.appendChild(creditspan4);

    title.appendChild(logo);
    title.appendChild(desc);
    title.appendChild(footer);
    title.style.display = `flex`;
    title.style.flexDirection = `column`;
    title.style.alignItems = `center`;
    title.style.justifyContent = `space-between`;
    title.style.backgroundColor = `rgba(0,0,0,.25)`;
    title.style.height = `90vh`;
    title.style.width = `100vw`;

    innerContent.appendChild(title);
    content.appendChild(innerContent);
}

export { home };