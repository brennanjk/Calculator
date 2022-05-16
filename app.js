
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

function operate (num1, oper, num2) {
    if (oper === '+') {
        add(num1, num2);
    }
    if (oper === '-') {
        subtract(num1, num2);
    }
    if (oper === '*') {
        multiply(num1, num2);
    }
    if (oper === '/') {
        divide(num1, num2);
    }
}