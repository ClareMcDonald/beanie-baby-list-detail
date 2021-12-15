export function renderBabyCard(baby) {
    const babyEl = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');

    babyEl.classList.add('baby-card');

    nameEl.textContent = baby.name;
    img.src =
    a.href = 

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
    animalEl.textContent = baby.animal;
    birthdayEl.textContent = baby.birthday;
    introDateEl.textContent = baby.introductionDate;

    img.src = 
        
    div.append(img, nameEl, animalEl, birthdayEl, introDateEl);
    
    return div;
}