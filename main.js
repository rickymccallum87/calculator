const numericButtons = document.querySelectorAll('button.numeric');

numericButtons.forEach( (e) => {
    e.addEventListener('click', () => {
        display.textContent += e.textContent;
    });
});

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

btnEqual.addEventListener('click', () => {
    // Operate
    updateDisplay();
});