// import functions and grab DOM elements
import { createCountString } from './utils.js';
const cityDropdown = document.getElementById('citySelector');
const cityImage = document.getElementById('cityImg');

const planetDropdown = document.getElementById('planetSelector');
const planetImage = document.getElementById('planetImg');

const heroDropdown = document.getElementById('heroSelector');
const heroImage = document.getElementById('heroImg');

const resultsCity = document.getElementById('results-city');
const resultsPlanet = document.getElementById('results-planet');
const resultsHero = document.getElementById('results-hero');
const sloganButton = document.getElementById('sloganBtn');
const sloganInput = document.getElementById('sloganInput');
const sloganList = document.getElementById('sloganList');
const resetBtn = document.getElementById('reset');
const image1 = document.getElementById('cityImg');
const image2 = document.getElementById('planetImg');
const image3 = document.getElementById('heroImg');

// let state
let slogans = [];
let cityCounter = 0;
let planetCounter = 0;
let heroCounter = 0;
let displayMessage = '';
// set event listeners
cityDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    cityImage.src = `./assets/${value}-city.jpg`;
    // image1.style.backgroundImage = `url(./assets/${value}-city.jpg)`;
    // image1.style.backgroundSize = 'cover';
    // image1.style.backgroundRepeat = 'no-repeat';
    // image1.style.backgroundAttachment = 'fixed';
    // image1.style.backgroundPosition = 'center';

    cityCounter++;
    displayMessage = createCountString(cityDropdown.name, cityCounter);
    displayStats('city');
});
planetDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    planetImage.src = `./assets/${value}-planet.jpg`;
    // image2.style.backgroundImage = `url(./assets/${value}-planet.jpg)`;
    // image2.style.backgroundSize = 'cover';
    // image2.style.backgroundRepeat = 'no-repeat';
    // image2.style.backgroundAttachment = 'fill';
    // image1.style.backgroundPosition = 'right center';
    planetCounter++;
    displayMessage = createCountString(planetDropdown.name, planetCounter);
    displayStats('planet');
});
heroDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    heroImage.src = `./assets/${value}-hero.png`;
    // image3.style.backgroundImage = `url(./assets/${value}-hero.png)`;
    // image2.style.backgroundSize = 'cover';
    // image2.style.backgroundRepeat = 'no-repeat';
    // image2.style.backgroundAttachment = 'fill';
    // image1.style.backgroundPosition = 'right center';
    heroCounter++;
    displayMessage = createCountString(heroDropdown.name, heroCounter);
    displayStats('hero');
});
sloganButton.addEventListener('click', () => {
    const input = sloganInput.value;
    slogans.push(input);
    displaySlogans();
});
resetBtn.addEventListener('click', () => {
    sloganInput.textContent = '';
    sloganList.textContent = '';
    slogans = [];
});
// get user input

// use user input to update state
// update DOM to reflect the new state
function displayStats(results) {
    if (results === 'city') {
        resultsCity.textContent = displayMessage;
    } else if (results === 'planet') {
        resultsPlanet.textContent = displayMessage;
    } else {
        resultsHero.textContent = displayMessage;
    }
}

function displaySlogans() {
    sloganInput.value = '';
    sloganList.textContent = '';
    for (let slogan of slogans) {
        const li = document.createElement('li');
        li.textContent = slogan;
        sloganList.append(li);
    }
}
