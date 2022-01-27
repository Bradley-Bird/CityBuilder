// import functions and grab DOM elements
import { createCountString } from './utils.js';
const cityDropdown = document.getElementById('citySelector');
const cityImage = document.getElementById('cityImg');

const planetDropdown = document.getElementById('planetSelector');
const planetImage = document.getElementById('planetImg');

const heroDropdown = document.getElementById('heroSelector');
const heroImage = document.getElementById('heroImg');

const sloganButton = document.getElementById('sloganBtn');
const sloganInput = document.getElementById('SloganInput');
const sloganList = document.getElementById('sloganList');
const resetBtn = document.getElementById('reset');

// let state
let slogans = [];
let cityCounter = 0;
let planetCounter = 0;
let heroCounter = 0;
// set event listeners
cityDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    cityImage.src = `./assets/${value}-city.jpg`;
    cityCounter++;
});
planetDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    planetImage.src = `./assets/${value}-planet.jpg`;
    planetCounter++;
});
heroDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    heroImage.src = `./assets/${value}-hero.png`;
    heroCounter++;
});
// get user input
// use user input to update state
// update DOM to reflect the new state
