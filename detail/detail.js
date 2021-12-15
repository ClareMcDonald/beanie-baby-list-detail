import { renderBabyDetail } from '../render-utils.js';
import { getBaby } from '../fetch-utils.js';

const babyDetailContainer = document.getElementById('beanie-baby-detail-container');


window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const baby = await getBaby(id);

    const babyEl = renderBabyDetail(baby);
    babyDetailContainer.append(babyEl);
});