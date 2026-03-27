function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
};


let firstNum;
let secondNum;
let operator;

function operate(operator,firstNum,secondNum) {
    if (operator == "plus") {
        add(firstNum,secondNum);
    } else if (operator == "minus") {
        subtract(firstNum,secondNum);
    } else if (operator == "multiply") {
        multiply(firstNum,secondNum);
    } else if (operator == "divide") {
        divide(firstNum,secondNum);
    }
};
