const add = (a, b) => { return a + b; };
const subtract = (a, b) => { return a - b; };
const multiply = (a, b) => { return a * b; };
const divide = (a, b) => { return a / b; };

function operate(num1, operator, num2) {
    num1 = +num1;
    num2 = +num2;
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

const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const numbers = document.querySelectorAll('button.number');
const operators = document.querySelectorAll('button.operator');
const equals = document.querySelector('#equals');
let inputs = [''];

function updateDisplay() {
    display.textContent = inputs[inputs.length - 1];
}

function solve() {
    inputs[0] = operate(...inputs);
    inputs.splice(1);
    updateDisplay();
}

numbers.forEach( (node) => {
    node.addEventListener('click', () => {
        if (inputs.length < 2) {
            inputs[0] += node.textContent;
        } else {
            inputs[inputs.length - 1] += node.textContent;
        }
        // console.log(inputs);
        updateDisplay();
    });
});

operators.forEach( (node) => {
    node.addEventListener('click', () => {
        if (inputs.length > 2) {
            solve();
        }
        inputs.push(node.textContent);
        inputs.push('');
        // console.log(inputs);
    });
});

equals.addEventListener('click', () => {
    solve();
});

clear.addEventListener('click', () => {
    inputs = [''];
    updateDisplay();
    // console.log(inputs);
});