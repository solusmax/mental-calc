export const getRandomInteger = (min = 0, max = 1) => {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);

  return Math.floor(Math.random() * (roundedMax - roundedMin + 1) + roundedMin);
};

export const getRandomOperand = (size = 3) => {
  const numberSize = Math.floor(size);

  const minNumber = 10 ** (numberSize - 1);
  const maxNumber = (10 ** numberSize) - 1;

  return getRandomInteger(minNumber, maxNumber);
};

export const increaseNumberInLoop = (number, min, max) => number + 1 > max ? min : number + 1;

export const isEnterEvent = (evt) => evt.key === 'Enter';

export const isSpaceEvent = (evt) => evt.key === ' ';
