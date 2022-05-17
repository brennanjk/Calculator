
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

//function to accept input and run one of the operator functions above
function operate (num1, oper, num2) {
    if (oper === '+') {
        return add(num1, num2);
    }
    if (oper === '-') {
        return subtract(num1, num2);
    }
    if (oper === '*') {
        return multiply(num1, num2);
    }
    if (oper === '/') {
        return divide(num1, num2);
    }
}

let display = document.querySelector('#display');
display.textContent = '0';

let buttons = document.querySelectorAll('button')

function zero_check() {
    while (display.textContent[0] === '0' && display.textContent.length > 1) {
        display.textContent = display.textContent.substring(1);
    }
}

function change_display(input) {
    display.textContent += input;
    zero_check();
}