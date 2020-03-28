
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];



function getUserInput(){
   return +userInput.value
}

function writeToLog(operationIdentifier, prevNumber){
    const logEntry = {
        operation: operationIdentifier,
        previousNumber: prevNumber 
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

//This is Add function
function add(){
    const enteredNumber = getUserInput();
    let calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
    writeToLog('Add', enteredNumber);
}

//This is Subtract function
function subtract(){
    const enteredNumber = getUserInput();
    let calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult -= enteredNumber;
    outputResult(currentResult, calcDescription);
    writeToLog('Subtract', enteredNumber);
}

//This is Multiply function
function multiply(){
    const enteredNumber = getUserInput();
    let calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calcDescription);
    writeToLog('Multiply', enteredNumber);

}

//This is Divide function
function divide(){
    const enteredNumber = getUserInput();
    let calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calcDescription);
    writeToLog('Divide', enteredNumber);

}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

