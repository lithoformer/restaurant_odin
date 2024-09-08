import "./styles.css";
import logopic from "./Benders2_transparent_crop.png";
import instagram from "./Instagram_icon.png";
import twitter from "./twitter.png";

const contact = function () {
    const innerContent = document.createElement('div');
    const twitterLink = document.createElement('a');
    const instaLink = document.createElement('a');
    twitterLink.href = `#`;
    instaLink.href = `#`;

    const instagramImg = document.createElement('img');
    const twitterImg = document.createElement('img');
    instagramImg.src = instagram;
    twitterImg.src = twitter;

    twitterLink.appendChild(twitterImg);
    instaLink.appendChild(instagramImg);

    twitterImg.style.maxWidth = `5vw`;
    twitterImg.style.maxHeight = `5vh`;
    instagramImg.style.maxWidth = `5vw`;
    instagramImg.style.maxHeight = `5vh`;

    const logo = document.createElement('img');
    logo.src = logopic;
    logo.style.maxWidth = `50vw`;
    logo.style.maxHeight = `50vh`;

    innerContent.style.display = `flex`;
    innerContent.style.flexDirection = `column`;
    innerContent.style.justifyContent = `space-between`;
    innerContent.style.alignItems = `center`;
    innerContent.style.maxHeight = `100%`;
    innerContent.style.maxWidth = `100%`;

    const title = document.createElement('div');

    const address = document.createElement('p')
    address.classList.add('contactText');
    address.textContent = `4338 Main Street, Freehold, New Jersey 07728`;

    const phone = document.createElement('p')
    phone.classList.add('contactText');
    phone.textContent = `(555) 555-5555`;

    const hourswk = document.createElement('p')
    hourswk.classList.add('contactText');
    hourswk.textContent = `Mon-Fri 6am-8pm`;

    const hourswknd = document.createElement('p')
    hourswknd.classList.add('contactText');
    hourswknd.textContent = `Sat-Sun 7am-7pm`;

    const email = document.createElement('p')
    email.classList.add('contactText');
    email.textContent = `bendersbagels@gmail.com`;

    title.appendChild(logo);
    title.appendChild(address);
    title.appendChild(phone);
    title.appendChild(hourswk);
    title.appendChild(hourswknd);
    title.appendChild(email);

    const social = document.createElement('div');
    social.appendChild(twitterLink);
    social.appendChild(instaLink);
    social.style.margin = `5vw`;
    title.appendChild(social);

    title.style.display = `flex`;
    title.style.flexDirection = `column`;
    title.style.alignItems = `center`;
    title.style.justifyContent = `center`;
    title.style.backgroundColor = `rgba(0, 0, 0, .25)`;
    title.style.maxHeight = `100%`;
    title.style.maxWidth = `100%`;

    innerContent.appendChild(title);
    content.appendChild(innerContent);
}

export { contact };