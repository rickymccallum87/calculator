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
