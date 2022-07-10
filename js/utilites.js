import {NIGHT_LIGHTES} from './data-base.js';

const getRandomNumber = (a, b) => {
    const minimum = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const maximum = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return result;
};

const getRandomNightLight = () => {
  const nightLightIndex =  getRandomNumber(0, NIGHT_LIGHTES.length - 1);
  return NIGHT_LIGHTES[nightLightIndex];
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomNightLight, isEscapeKey};