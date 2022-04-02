let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
let off = document.querySelector('.theme-button-off');
let on = document.querySelector('.theme-button-on');

const toggleButtonTheme = () => {
    themeButton.onclick = function () {
      page.classList.toggle('light-theme');
      page.classList.toggle('dark-theme');
    };
    return themeButton.onclick;
}
toggleButtonTheme();

const bodyImg = document.getElementById('body-style');  

off.addEventListener ('click', () => {
    bodyImg.textContent =   'body {position: relative; margin: 0; min-width: 1408px; font-family: "Montserrat", "Helvetica", "Arial", sans-serif; font-size: 16px; line-height: 32px; color: #222222; background-image: url("img/hero-bg-2.png"); background-repeat: no-repeat; background-position-y: top; background-position-x: calc(50vw + 16px);};';
    setTimeout(() => {
        off.classList.add('hidden');
        on.classList.remove('hidden');
    }, 1000);
    
});

on.addEventListener ('click', () => {
    bodyImg.textContent =   'body {position: relative; margin: 0; min-width: 1408px; font-family: "Montserrat", "Helvetica", "Arial", sans-serif; font-size: 16px; line-height: 32px; color: #222222; background-image: url("img/hero-bg.jpg"); background-repeat: no-repeat; background-position-y: top; background-position-x: calc(50vw + 16px);};';
    setTimeout(() => {
        on.classList.add('hidden');
        off.classList.remove('hidden');
    }, 1000);
});