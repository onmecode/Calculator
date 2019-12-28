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
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});
//using keys on the keyboard instead of the display keys

//1
document.addEventListener("keydown", () =>{
               if(event.keyCode === 49){
                 document.getElementById("").style.borderColor = "blue";
               }
           });
// 2
document.addEventListener("keydown", () =>{
               if(event.keyCode === 50){
                 document.getElementById("").style.borderColor = "blue";
               }
           });
//3
document.addEventListener("keydown", () =>{
               if(event.keyCode === 51){
                 document.getElementById("").style.borderColor = "blue";
               }
           });
//4
document.addEventListener("keydown", () =>{
               if(event.keyCode === 52){
                 document.getElementById("").style.borderColor = "blue";
               }
           });
//5
document.addEventListener("keydown", () =>{
               if(event.keyCode === 53){
                 document.getElementById("").style.borderColor = "blue";
               }
           });
//6
document.addEventListener("keydown", () =>{
               if(event.keyCode === 54){
                 document.getElementById("").style.borderColor = "blue";
               }
           });
//7
document.addEventListener("keydown", () =>{
               if(event.keyCode === 55){
                 document.getElementById("").style.borderColor = "blue";
               }
           });
//8
document.addEventListener("keydown", () =>{
               if(event.keyCode === 56){
                 document.getElementById("").style.borderColor = "blue";
               }
           });
//9
document.addEventListener("keydown", () =>{
               if(event.keyCode === 57){
                 document.getElementById("").style.borderColor = "blue";
               }

           });
//0
document.addEventListener("keydown", () =>{
               if(event.keyCode === 48){
                 document.getElementById("").style.borderColor = "blue";
               }
           });

//- might  not work
document.addEventListener("keydown", () =>{
               if(event.keyCode === 16){
               // +
                 if(event.keyCode == 187){
                   document.getElementById("").style.borderColor = "blue";

                 }
                 // -
                 if(event.keyCode === 189){
                   document.getElementById("").style.borderColor = "blue";

                 }
               }
           });
// /
document.addEventListener("keydown", () =>{
               if(event.keyCode === 191){
                 document.getElementById("").style.borderColor = "blue";
               }
           });

// =
document.addEventListener("keydown", () =>{
               if(event.keyCode === 187){
                 document.getElementById("").style.borderColor = "blue";
               }
           });
