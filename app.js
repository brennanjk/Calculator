//create place holders for our functions to reference and use

let operand1 = null
let operand2 = null
let operator = null
let oper2Switch = false

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
                if (operand1 === null || operand1 == '0') {
                    changeDisplay(button.value);
                }
                else if (operand1 != null) {
                    if (oper2Switch == false) {
                        display.textContent = 0;
                        changeDisplay(button.value);
                        oper2Switch = true;
                    }
                    else {
                        changeDisplay(button.value);
                    }
                }
            }
            if (button.classList.contains('operators')) {
                if (operand1 === null) {    
                    operand1 = display.textContent;
                    operator = button.value;
                }
                else {
                    operand2 = display.textContent;
                    display.textContent = operate(operand1,operator,operand2)
                    operand1 = display.textContent;
                    operand2 = null;
                    operator = button.value;
                    oper2Switch = false;
                }
            }
            if (button.classList.contains('equals')) {
                if (operator === null) {
                    
                }
                else {
                    operand2 = display.textContent;
                    display.textContent = operate(operand1, operator, operand2);
                    operand1 = null;
                    operand2 = null;
                    operator = null;
                    oper2Switch = false;
                }
            }
        })
    })
}

buttonClick();

function add(a,b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return Number(a) - Number(b);
}

function multiply(a,b) {
    return Number(a) * Number(b);
}

function divide(a,b) {
    return Number(a) / Number(b);
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