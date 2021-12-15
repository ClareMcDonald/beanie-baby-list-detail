export function renderBabyCard(baby) {
    const babyEl = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');

    babyEl.classList.add('baby-card');

    nameEl.textContent = baby.name;
    img.src = `./assets/${baby.name}.png`;
    a.href = `./detail/?id=${baby.id}`;

    babyEl.append(nameEl, img);

    a.append(babyEl);

    return a;
}

export function renderBabyDetail(baby) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');
    const animalEl = document.createElement('p');
    const birthdayEl = document.createElement('p');
    const introDateEl = document.createElement('p');

    nameEl.textContent = baby.name;
    nameEl.classList.add('name');

    animalEl.textContent = `Animal: ${baby.animal}`;
    animalEl.classList.add('details');

    birthdayEl.textContent = `Birthday: ${baby.birthday}`;
    birthdayEl.classList.add('details');

    introDateEl.textContent = `Introduction date: ${baby.introductionDate}`;
    introDateEl.classList.add('details');

    img.src = `../assets/${baby.name}.png`;

    div.classList.add('baby-detail');
        
    div.append(img, nameEl, animalEl, birthdayEl, introDateEl);
    
    return div;
}