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


let firstNum = '';
let secondNum = '';
let operator = '';

function operate(operator,firstNum,secondNum) {
    if (operator == "+") {
        +firstNum;
        +secondNum;
        add(firstNum,secondNum);
    } else if (operator == "-") {
        +firstNum;
        +secondNum;
        subtract(firstNum,secondNum);
    } else if (operator == "×") {
        +firstNum;
        +secondNum;
        multiply(firstNum,secondNum);
    } else if (operator == "÷") {
        +firstNum;
        +secondNum;
        divide(firstNum,secondNum);
    }
};

const display = document.querySelector("div.display");
const allBtns = document.querySelector(".buttons")
function updateVariables(e) {
    if (operator & firstNum & !isNaN(e.target.value)) {
        secondNum += e.target.value;
        display.textContent = `${firstNum} ${operator} ${secondNum}`;
    } else if (!isNaN(e.target.value)) {
        firstNum += e.target.value;
        display.textContent = `${firstNum}`
    } else if (e.target.value = '-'
        || e.target.value == '+'
        || e.target.value == "×"
        || e.target.value == "÷"
    ) {
        operator = e.target.value;
        display.textContent = `${firstNum} ${operator}`;
    }

}
allBtns.addEventListener('click', updateVariables);