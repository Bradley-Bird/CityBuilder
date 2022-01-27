// import functions and grab DOM elements
// import { createCountString, displaySlogans } from './utils.js';
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
    cityCounter++;
    createCountString(cityDropdown, cityCounter);
    displayStats('city');
});
planetDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    planetImage.src = `./assets/${value}-planet.jpg`;
    planetCounter++;
    createCountString(planetDropdown, planetCounter);
    displayStats('planet');
});
heroDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    heroImage.src = `./assets/${value}-hero.png`;
    heroCounter++;
    createCountString(heroDropdown, heroCounter);
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

function createCountString(type, count) {
    displayMessage = `You have changed ${type.name} ${count} times`;
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
