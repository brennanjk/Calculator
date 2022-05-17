//create place holders for our functions to reference and use

let operand1 = null
let operand2 = null
let operator = null

let display = document.querySelector('#display');
display.textContent = '0';

const buttons = document.querySelectorAll('button')

function changeDisplay(input) {
    if (display.textContent === '0' || display.textContent === 0) {
        display.textContent = input;
    }
    else {
        display.textContent += input;
    }
}

//Might need a window event listener - saving here for later reference
// window.addEventListener('keydown',function(e) {
//     const key = document.querySelector(`button[data-key='${e.code}']`);
//     key.click();
// })

function buttonClick() {
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (button.classList.contains('numbers')) {
                changeDisplay(button.value);
            }
        })
    })
}

buttonClick();

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
function operate (operand1, operator, operand2) {
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