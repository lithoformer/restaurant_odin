import "./styles.css";
import pc from "./Philly-Cheesesteak-Wrap-Real-Food-by-Dad.jpg"
import bg from "./Everything-Bagel-Breakfast-Sandwich-6-700x1050.jpg"

const menu = function menu() {
    const content = document.querySelector('#content');
    const innerContent = document.createElement('div');

    const bagelOuter = document.createElement('div');
    const bagels = document.createElement('div');
    const bagelImg = document.createElement('img');
    bagelImg.src = bg;
    const bagelText = document.createElement('span');
    const bagelsList = document.createElement('ul');
    const breakfast = document.createElement('li');
    const creamCheese = document.createElement('li');
    const flavoredCheese = document.createElement('li');
    const lox = document.createElement('li');
    const tomato = document.createElement('li');
    const dozen = document.createElement('li');
    bagelText.textContent = 'Bagels';
    creamCheese.textContent = `ORIGINAL - Cream Cheese on any bagel - with our famous homemade cream cheese - $3`;
    flavoredCheese.textContent = `FLAVORED - Blueberry, Veggie, Strawberry, Chives and Onion, or Fat Free Cream Cheese on any bagel - $4`;
    lox.textContent = `LOX - Fresh lox salmon, capers, with our famous homemade cream cheese on any bagel - $5`;
    breakfast.textContent = `BREAKFAST - Any meat, eggs any style, cheddar cheese, cream cheese, salt, pepper, and ketchup on any bagel or roll - $6`;
    tomato.textContent = `Add 2 slices of plump tomato - $1`;
    dozen.textContent = `A dozen bagels - pick and choose - $9`;
    bagels.appendChild(bagelText);
    bagelsList.appendChild(creamCheese);
    bagelsList.appendChild(flavoredCheese);
    bagelsList.appendChild(breakfast);
    bagelsList.appendChild(lox);
    bagelsList.appendChild(tomato);
    bagelsList.appendChild(dozen);
    bagels.appendChild(bagelsList);
    bagels.classList.add('menuPanel');
    bagelOuter.classList.add('outer');
    bagelOuter.appendChild(bagels);
    bagelOuter.appendChild(bagelImg);

    const wrapOuter = document.createElement('div');
    const wraps = document.createElement('div');
    const wrapimg = document.createElement('img');
    wrapimg.src = pc;
    const wrapText = document.createElement('span');
    const wrapsList = document.createElement('ul');
    const breakfastWrap = document.createElement('li');
    const greekWrap = document.createElement('li');
    const veggieWrap = document.createElement('li');
    const phillyWrap = document.createElement('li');
    const italianWrap = document.createElement('li');
    wrapText.textContent = `Wraps`;
    breakfastWrap.textContent = `BREAKFAST - Any meat, scrambled eggs, cheddar cheese, and hash browns in a wheat wrap - $6`;
    greekWrap.textContent = `GREEK - Gyro meat, feta cheese, onions, Kalamata olives, and tzatziki sauce in a tomato wrap - $7`;
    veggieWrap.textContent = `VEGGIE - Lettuce, tomato, green peppers, onions, cucumbers, avocado, chickpeas, muenster cheese, and thousand island sauce in a veggie wrap - $7`;
    phillyWrap.textContent = `PHILLY - Steak, peppers, onions, and melted provolone in a wheat wrap - $8`;
    italianWrap.textContent = `ITALIAN - Ham, capicola, salami, lettuce, tomato, onion, provolone, vinegar, black pepper, olive oil in a tomato wrap - $7`;
    wraps.appendChild(wrapText);
    wrapsList.appendChild(breakfastWrap);
    wrapsList.appendChild(greekWrap);
    wrapsList.appendChild(veggieWrap);
    wrapsList.appendChild(phillyWrap);
    wrapsList.appendChild(italianWrap);
    wraps.appendChild(wrapsList);
    wraps.classList.add('menuPanel');
    wrapOuter.classList.add('outer');
    wrapOuter.appendChild(wraps);
    wrapOuter.appendChild(wrapimg);

    const sandwichOuter = document.createElement('div');
    const sandwiches = document.createElement('div');
    const sandwichImg = document.createElement('img');
    sandwichImg.src = bg;
    const sandwichText = document.createElement('span');
    const sandwichList = document.createElement('ul');
    const bender = document.createElement('li');
    const monster = document.createElement('li');
    const club = document.createElement('li');
    const spy = document.createElement('li');
    const american = document.createElement('li');
    sandwichText.textContent = 'Sandwiches';
    bender.textContent = `THE BENDER - roast beef, proscuitto, swiss cheese, jalapenos, banana peppers, and cranberry sauce on a hero - $8`;
    monster.textContent = `THE MONSTER - chicken cutlet, provolone cheese, fried tater tots, and buffalo sauce on a roll - $8`;
    club.textContent = `THE CLUB - honey ham, turkey, tomatoes, onions, pepper jack cheese, and honey mustard on a roll - $8`;
    american.textContent = `THE AMERICAN - steak, fried potatoes, American cheese, and bbq sauce on an everything bagel - $8`;
    spy.textContent = `THE SPY - chicken fingers, avocado, mozzarella cheese, and vodka sauce on a hero - $8`;
    sandwiches.appendChild(sandwichText);
    sandwichList.appendChild(bender);
    sandwichList.appendChild(monster);
    sandwichList.appendChild(club);
    sandwichList.appendChild(american);
    sandwichList.appendChild(spy);
    sandwiches.appendChild(sandwichList);
    sandwiches.classList.add('menuPanel');
    sandwichOuter.classList.add('outer');
    sandwichOuter.appendChild(sandwiches);
    sandwichOuter.appendChild(sandwichImg);

    const smoothies = document.createElement('div');

    innerContent.appendChild(bagelOuter);
    innerContent.appendChild(wrapOuter);
    innerContent.appendChild(sandwichOuter);
    // innerContent.appendChild(smoothieOuter);

    innerContent.style.display = `flex`;
    innerContent.style.alignItems = `center`;
    innerContent.style.justifyContent = `center`;
    innerContent.style.flexDirection = `column`;
    innerContent.style.maxHeight = `100%`;
    innerContent.style.maxWidth = `100%`;
    innerContent.style.marginTop = `400px`;

    content.appendChild(innerContent);

    content.style.display = `flex`;
    content.style.alignItems = `center`;
    content.style.justifyContent = `center`;
    content.style.flexDirection = `column`;
}

export { menu };