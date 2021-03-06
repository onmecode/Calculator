//actual working calculator
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
  const { target } = event;

  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value)
    return;
  }

  inputDigit (target.value);
  updateDisplay();
});

function inputDecimal(dot){
  if(! calculator.displayValue.includes(dot)){
    calculator.displayValue += dot;
  }
}
//using keys on the keyboard instead of the display keys

function inputDigit(digit) {

  const { displayValue } = calculator;
  calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;

}
