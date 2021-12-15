// import functions and grab DOM elements
import { renderBabyCard } from './render-utils.js';
import { getBabies } from './fetch-utils.js';

const babyContainer = document.getElementById('beanie-baby-container');

// let state

// set event listeners 
  // get user input
  // use user input to update state
  // update DOM to reflect the new state

window.addEventListener('load', async() => {
    const babies = await getBabies();

    for (let baby of babies) {
        const babyEl = renderBabyCard(baby);
        babyContainer.append(babyEl);
    }
});
