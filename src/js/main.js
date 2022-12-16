import 'focus-visible';
import { getRandomOperand, increaseNumberInLoop, isEnterEvent, isSpaceEvent } from './utils.js';

const MIN_OPERAND_SIZE = 3;
const MAX_OPERAND_SIZE = 6;
const CLEARED_RESULT_SYMBOL = '?';

let currentFirstOperandSize = MIN_OPERAND_SIZE;
let currentSecondOperandSize = MIN_OPERAND_SIZE;

const firstOperandNode = document.querySelector('#first-operand');
const secondOperandNode = document.querySelector('#second-operand');
const resultNode = document.querySelector('#result');

const updateOperandNumber = (operand) => {
  switch (operand) {
    case 1:
      firstOperandNode.textContent = getRandomOperand(currentFirstOperandSize);
      break;
    case 2:
      secondOperandNode.textContent = getRandomOperand(currentSecondOperandSize);
      break;
  }
};

const updateOperands = () => {
  updateOperandNumber(1);
  updateOperandNumber(2);
};

const changeOperandSize = (operand) => {
  switch (operand) {
    case 1:
      currentFirstOperandSize = increaseNumberInLoop(currentFirstOperandSize, MIN_OPERAND_SIZE, MAX_OPERAND_SIZE);
      updateOperandNumber(1);
      break;
    case 2:
      currentSecondOperandSize = increaseNumberInLoop(currentSecondOperandSize, MIN_OPERAND_SIZE, MAX_OPERAND_SIZE);
      updateOperandNumber(2);
  }
};

const setResult = () => {
  resultNode.textContent = Number(firstOperandNode.textContent) * Number(secondOperandNode.textContent);
};

const clearResult = () => {
  resultNode.textContent = CLEARED_RESULT_SYMBOL;
};

const isResultCleared = () => resultNode.textContent === CLEARED_RESULT_SYMBOL;

const firstOperandAction = () => {
  changeOperandSize(1);
  clearResult();
};

const secondOperandAction = () => {
  changeOperandSize(2);
  clearResult();
};

const resultAction = () => {
  if (isResultCleared()) {
    setResult();
  } else {
    updateOperands();
    clearResult();
  }
};

const onFirstOperandClick = () => {
  return (evt) => {
    evt.preventDefault();

    firstOperandAction();
  };
};

const onSecondOperandClick = () => {
  return (evt) => {
    evt.preventDefault();

    secondOperandAction();
  };
};

const onResultClick = () => {
  return (evt) => {
    evt.preventDefault();

    resultAction();
  };
};


const onFirstOperandKeydown = () => {
  return (evt) => {
    if (isEnterEvent(evt) || isSpaceEvent(evt)) {
      evt.preventDefault();

      firstOperandAction();
    }
  };
};

const onSecondOperandKeydown = () => {
  return (evt) => {
    if (isEnterEvent(evt) || isSpaceEvent(evt)) {
      evt.preventDefault();

      secondOperandAction();
    }
  };
};

const onResultKeydown = () => {
  return (evt) => {
    if (isEnterEvent(evt) || isSpaceEvent(evt)) {
      evt.preventDefault();

      resultAction();
    }
  };
};

firstOperandNode.addEventListener('click', onFirstOperandClick());
firstOperandNode.addEventListener('keydown', onFirstOperandKeydown());
secondOperandNode.addEventListener('click', onSecondOperandClick());
secondOperandNode.addEventListener('keydown', onSecondOperandKeydown());
resultNode.addEventListener('click', onResultClick());
resultNode.addEventListener('keydown', onResultKeydown());

updateOperands();
