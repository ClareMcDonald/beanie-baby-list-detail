export function renderBaby(baby) {
    const babyEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const animalEl = document.createElement('p');
    const birthdayEl = document.createElement('p');
    const introDateEl = document.createElement('p');

    babyEl.classList.add('baby-item');

    nameEl.textContent = baby.name;
    animalEl.textContent = baby.animal;
    birthdayEl.textContent = baby.birthday;
    introDateEl.textContent = baby.introductionDate;

    babyEl.append(nameEl, animalEl, birthdayEl, introDateEl);

    return babyEl;
}