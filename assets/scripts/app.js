const defaultResult = 0;
let currentResult = defaultResult;

// another method for initializing a variable for 1st status 
// let currentResult = 0;

// Functions
function getUserNumberInput() {
    return parseInt(userInput.value)
}

function logic(operator, first, reuslt) {
    const calcDesc = `${first} ${operator} ${reuslt}`
    outputResult(currentResult, calcDesc)

}

function add() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult = currentResult + enteredNumberFromUser
    logic('+', initResult, enteredNumberFromUser)
}

function substra() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult = currentResult - enteredNumberFromUser
    logic('-', initResult, enteredNumberFromUser)
}

function multi() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult = currentResult * enteredNumberFromUser
    logic('*', initResult, enteredNumberFromUser)
}

function divide() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult = currentResult / enteredNumberFromUser
    logic('/', initResult, enteredNumberFromUser)

}
// Calc Functions

// function add() {
//     const enteredNumberFromUser = getUserNumberInput()
//     const calcDesc = `${currentResult}+${enteredNumberFromUser}`
//     currentResult = currentResult + enteredNumberFromUser
//     outputResult(currentResult, calcDesc)
// }

// function substra() {
//     const enteredNumberFromUser = getUserNumberInput()
//     const calcDesc = `${currentResult}- ${enteredNumberFromUser}`
//     currentResult = currentResult - enteredNumberFromUser
//     outputResult(currentResult, calcDesc)
// }

// function multi() {
//     const enteredNumberFromUser = getUserNumberInput()
//     const calcDesc = `${currentResult} * ${enteredNumberFromUser}`
//     currentResult = currentResult * enteredNumberFromUser
//     outputResult(currentResult, calcDesc)
// }

// function divide() {
//     const enteredNumberFromUser = getUserNumberInput()
//     const calcDesc = `${currentResult} / ${enteredNumberFromUser}`
//     currentResult = currentResult / enteredNumberFromUser
//     outputResult(currentResult, calcDesc)
// }









// Events 
addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", substra)
multiplyBtn.addEventListener("click", multi)
divideBtn.addEventListener("click", divide)