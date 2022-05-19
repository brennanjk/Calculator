//create place holders for our functions to reference and use

let operand1 = null
let operand2 = null
let operator = null
//we need the display to reset after operand1 is declared and we click a number, but we only want it to reset once until operand2 is declared. Switch below is used for that purpose
let oper2Switch = false
//we need to allow operator buttons to call the operator functions when entering consecutive equations (ex. 5 + 5 - 6 * 4, etc.) BUT not if they'e pressed over and over (5 + 5 + + +)
let changeOperatorOnly = false

let display = document.querySelector('#display');
display.textContent = '0';

const buttons = document.querySelectorAll('button')

function changeDisplay(input) {
    if (display.textContent === '0' || display.textContent === 0) {
        display.textContent = input;
    }
    else {
        display.textContent += input;
        displayLengthCheck()
    }
}
//function to shorten long numbers
function displayLengthCheck() {
    if (display.textContent.length > 9) {
        display.textContent = display.textContent.substring(0,9);
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
                changeOperatorOnly = false;
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
                    changeOperatorOnly = true;
                }
                else if (changeOperatorOnly === true) {
                    operator = button.value;
                }
                else {
                    operand2 = display.textContent;
                    display.textContent = operate(operand1,operator,operand2)
                    displayLengthCheck();
                    operand1 = display.textContent;
                    operand2 = null;
                    operator = button.value;
                    oper2Switch = false;
                    changeOperatorOnly = true;
                }
            }
            if (button.classList.contains('equals')) {
                if (operator === null) {
                    
                }
                else {
                    operand2 = display.textContent;
                    display.textContent = operate(operand1, operator, operand2);
                    displayLengthCheck();
                    operand1 = null;
                    operand2 = null;
                    operator = null;
                    oper2Switch = false;
                }
            }
            if (button.classList.contains('decimal')) {
                // make decimal behave properly when used immediately after an operator symbol is pressed
                if (changeOperatorOnly) {
                    display.textContent = '0.';
                    changeOperatorOnly = false;
                    oper2Switch = true;
                }
                else if (!decimalCheck()) {
                    display.textContent += button.value;
                }
            }
            if (button.classList.contains('sign')) {
                positiveNegative();
            }
            if (button.classList.contains('back-space')) {
                if (!changeOperatorOnly) {
                    if (display.textContent.length == 1) {
                        display.textContent = 0;
                    }
                    else {
                        display.textContent = display.textContent.slice(0,-1);
                        if (display.textContent == '-') {
                            display.textContent = 0;
                        }
                    }
                }
            }
            if (button.classList.contains('ac')) {
                acReset();
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

function acReset() {
    display.textContent = 0;
    operand1 = null
    operand2 = null
    operator = null
    oper2Switch = false
}

function decimalCheck() {
    return display.textContent.includes('.')
}

function positiveNegative () {
    if (display.textContent.startsWith('-')) {
        display.textContent = display.textContent.substring(1);
    }
    else if (display.textContent != '0') {
        display.textContent = '-' + display.textContent;
    }
}