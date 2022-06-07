import {getRandomNightLight} from './utilites.js';

let off = document.querySelector('.theme-button-off');
let on = document.querySelector('.theme-button-on');

const body = document.querySelector('body');
const sectionPageHeader = body.querySelector('.page-header');
const sectionHeroImage = body.querySelector('.hero-image');
const sectionIntro = body.querySelector('.intro');
const changeAbleStrings = document.querySelectorAll('.change-able-text');
const contrastStrings = document.querySelectorAll('.contrast');

off.addEventListener ('click', () => {
  sectionPageHeader.style.backgroundColor='#1C1B1C';
  sectionHeroImage.style.backgroundColor='#1C1B1C';
  sectionHeroImage.style.backgroundImage = 'url(files/hero-bg-2.png)';
  sectionHeroImage.style.backgroundRepeat='no-repeat';
  sectionHeroImage.style.backgroundPositionY='top';
  sectionHeroImage.style.backgroundPositionX='calc(50vw + 16px)';
  sectionIntro.style.backgroundColor='#1C1B1C';
  for (let i = 0; i < changeAbleStrings.length; i++) {
    const changeAbleString = changeAbleStrings[i];
    changeAbleString.classList.remove('change-able-text');
    changeAbleString.classList.add(getRandomNightLight());
  };

  for (let j = 0; j < contrastStrings.length; j++) {
    const contrastString = contrastStrings[j];
    contrastString.classList.remove('contrast');
    contrastString.classList.add(getRandomNightLight());
  };

  setTimeout(() => {
    off.classList.add('hidden')
    on.classList.remove('hidden');
  }, 1000);

});

on.addEventListener ('click', () => {
  sectionPageHeader.style.backgroundColor='#fafbfd';
  sectionHeroImage.style.backgroundColor='#fafbfd';
  sectionHeroImage.style.backgroundImage = 'url(img/hero-bg.jpg)';
  sectionHeroImage.style.backgroundRepeat='no-repeat';
  sectionHeroImage.style.backgroundPositionY='top';
  sectionHeroImage.style.backgroundPositionX='calc(50vw + 16px)';
  sectionIntro.style.backgroundColor = '#fafbfd';
  for (let i = 0; i < changeAbleStrings.length; i++) {
    const changeAbleString = changeAbleStrings[i];
    const className = changeAbleString.getAttribute('class');
    changeAbleString.classList.remove(className);
    changeAbleString.classList.add('change-able-text');
  };
  
  for (let j = 0; j < contrastStrings.length; j++) {
    const contrastString = contrastStrings[j];
    const classNameContrast = contrastString.getAttribute('class');
    contrastString.classList.remove(classNameContrast);
    contrastString.classList.add('contrast');
  };

  setTimeout(() => {
    on.classList.add('hidden');
    off.classList.remove('hidden');
  }, 1000);

});