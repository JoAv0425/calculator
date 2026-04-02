function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
     return (Math.round((a * b) * 1000) / 1000);
};

function divide(a,b) {
    return (Math.round((a / b) * 1000) / 1000);
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
const allBtns = document.querySelector(".buttons");
const resultText = document.createElement("div");
resultText.className = "result-text";
const backSp = document.querySelector("button.back-space")
function updateVariables(e) {
    if (resultText.textContent && (!isNaN(e.target.value))) {
        secondNum = '';
        operator = '';
        firstNum = e.target.value;
        display.textContent = `${firstNum}`;
        resultText.textContent = '';
      
    } else if (operator && firstNum && (!isNaN(e.target.value) 
        || e.target.value == ".")) {
        secondNum += e.target.value;
        display.textContent = `${firstNum} ${operator} ${secondNum}`;
    } else if (!isNaN(e.target.value) 
        || e.target.value == ".") {
        firstNum += e.target.value;
        display.textContent = `${firstNum}`
    } else if (!operator && firstNum && (e.target.value == '+'
        || e.target.value == '-'
        || e.target.value == "×"
        || e.target.value == "÷"
    )) {
        operator = e.target.value;
        display.textContent = `${firstNum} ${operator}`;
    } else if (operator && (e.target.value == '+'
        || e.target.value == '-'
        || e.target.value == "×"
        || e.target.value == "÷")) {
        firstNum = operate(operator,firstNum,secondNum);
        operator = e.target.value;
        secondNum = '';
        display.textContent = `${firstNum} ${operator}`;
    } else if (secondNum == '0' && e.target.value == '=') {
        resultText.textContent = 'ZeRo ErRoR';
        display.appendChild(resultText);
    } else if (display.textContent != '' && e.target.value == "=") {       
        resultText.textContent = `${operate(operator,firstNum,secondNum)}`;
        display.appendChild(resultText);

    } else if (e.target.value == 'clear') {
        firstNum = '';
        secondNum = '';
        operator = '';
        display.textContent = '';
        resultText.textContent = '';
    
    }

}
allBtns.addEventListener('click', updateVariables);

function backSpace(e) {
    if (secondNum) {
        secondNum = secondNum.slice(0,-1);
    } else if (operator && !secondNum) {
        operator = '';
    } else if (firstNum && !operator && !secondNum) {
        firstNum = firstNum.slice(0,-1);
    }
}

backSp.addEventListener("click", backSpace);