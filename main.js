const add = (a, b) => { return a + b; };
const subtract = (a, b) => { return a - b; };
const multiply = (a, b) => { return a * b; };
const divide = (a, b) => { return a / b; };

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'error';
    }
}

const btn0 = document.querySelector('#zero');
const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#two');
const btn3 = document.querySelector('#three');
const btn4 = document.querySelector('#four');
const btn5 = document.querySelector('#five');
const btn6 = document.querySelector('#six');
const btn7 = document.querySelector('#seven');
const btn8 = document.querySelector('#eight');
const btn9 = document.querySelector('#nine');
const btnDot = document.querySelector('#dot');
const btnAdd = document.querySelector('#add');
const btnSub = document.querySelector('#subtract');
const btnMult = document.querySelector('#multiply');
const btnDiv = document.querySelector('#divide');
const btnEqual = document.querySelector('#operate');
const btnClr = document.querySelector('#clear');
const display = document.querySelector('#display');
let displayValue;
updateDisplay();

function updateDisplay() {
    displayValue = display.textContent;
}

btnClr.addEventListener('click', () => {
    display.textContent = '';
    updateDisplay();
});

btnAdd.addEventListener('click', () => {
    updateDisplay();
});

btnSub.addEventListener('click', () => {
    updateDisplay();
});

btnMult.addEventListener('click', () => {
    updateDisplay();
});

btnDiv.addEventListener('click', () => {
    updateDisplay();
});

btnDot.addEventListener('click', () => {
    display.textContent += '.';
    updateDisplay();
});

btnEqual.addEventListener('click', () => {
    // Operate
    updateDisplay();
});

btn0.addEventListener('click', () => {
    display.textContent += '0';
    updateDisplay();
});

btn1.addEventListener('click', () => {
    display.textContent += '1';
    updateDisplay();
});

btn2.addEventListener('click', () => {
    display.textContent += '2';
    updateDisplay();
});

btn3.addEventListener('click', () => {
    display.textContent += '3';
    updateDisplay();
});

btn4.addEventListener('click', () => {
    display.textContent += '4';
    updateDisplay();
});

btn5.addEventListener('click', () => {
    display.textContent += '5';
    updateDisplay();
});

btn6.addEventListener('click', () => {
    display.textContent += '6';
    updateDisplay();
});

btn7.addEventListener('click', () => {
    display.textContent += '7';
    updateDisplay();
});

btn8.addEventListener('click', () => {
    display.textContent += '8';
    updateDisplay();
});

btn9.addEventListener('click', () => {
    display.textContent += '9';
    updateDisplay();
});