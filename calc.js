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
        let first = +firstNum;
        let second = +secondNum;
        return add(first,second);
    } else if (operator == "-") {
        let first = +firstNum;
        let second = +secondNum;
        return subtract(first,second);
    } else if (operator == "×") {
        let first = +firstNum;
        let second = +secondNum;
        return multiply(first,second);
    } else if (operator == "÷") {
        let first = +firstNum;
        let second = +secondNum;
        return divide(first,second);
    }
};

const display = document.querySelector("div.display");
const allBtns = document.querySelector(".buttons")
function updateVariables(e) {
    if (operator && firstNum && (!isNaN(e.target.value) 
        || e.target.value == ".")) {
        secondNum += e.target.value;
        display.textContent = `${firstNum} ${operator} ${secondNum}`;
    } else if (!isNaN(e.target.value) 
        || e.target.value == ".") {
        firstNum += e.target.value;
        display.textContent = `${firstNum}`
    } else if (e.target.value == '+'
        || e.target.value == '-'
        || e.target.value == "×"
        || e.target.value == "÷"
    ) {
        operator = e.target.value;
        display.textContent = `${firstNum} ${operator}`;
    } else if (e.target.value == "=") {       
        const resultText = document.createElement("div");
        resultText.className = "result-text";
        resultText.textContent = `${operate(operator,firstNum,secondNum)}`;
        display.appendChild(resultText);
    }

}
allBtns.addEventListener('click', updateVariables);