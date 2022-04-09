import {getRandomNightLight} from './utilites.js';

let off = document.querySelector('.theme-button-off');
let on = document.querySelector('.theme-button-on');

const bodyImg = document.getElementById('body-style');
const setIntro = document.getElementById('set-intro');
const changeAbleStrings = document.querySelectorAll('.change-able-text');
const contrastStrings = document.querySelectorAll('.contrast');  

off.addEventListener ('click', () => {
  bodyImg.textContent = 'body {position: relative; margin: 0; min-width: 1408px; font-family: "Montserrat", "Helvetica", "Arial", sans-serif; font-size: 16px; line-height: 32px; color: #222222; background-image: url("img/hero-bg-2.png"); background-repeat: no-repeat; background-position-y: top; background-position-x: calc(50vw + 16px); background-color: #1C1B1C;};';
  setIntro.textContent = '.intro {margin: 0 0 160px; padding-top: 240px; padding-bottom: 80px; background-color: #1C1B1C;}';
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
  bodyImg.textContent = 'body {position: relative; margin: 0; min-width: 1408px; font-family: "Montserrat", "Helvetica", "Arial", sans-serif; font-size: 16px; line-height: 32px; color: #222222; background-image: url("img/hero-bg.jpg"); background-repeat: no-repeat; background-position-y: top; background-position-x: calc(50vw + 16px);};';
  setIntro.textContent = '.intro {margin: 0 0 160px; padding-top: 240px; padding-bottom: 80px; background-color: #fafbfd;}';
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