const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries=[]

// another method for initializing a variable for 1st status 
// let currentResult = 0;

// Functions

function getUserNumberInput() {
    return parseInt(userInput.value)
}
// log function that save all the history of trans
let logHistory= function logs(x,y,z) {
	logEnteries.push([x,y,z])
	console.log('logs: ', logEnteries);
	console.log(typeof(logEnteries));	
}
// function to get and write the logic of calculations => operators 
function logic(operator, first, reuslt) {
    const calcDesc = `${first} ${operator} ${reuslt}`
    outputResult(currentResult, calcDesc)

}
// Main Functions 
function add() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult += enteredNumberFromUser
    logic('+', initResult, enteredNumberFromUser)
	logHistory(initResult,enteredNumberFromUser,currentResult)

}

function substra() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult -= enteredNumberFromUser
    logic('-', initResult, enteredNumberFromUser)
	logHistory(initResult,enteredNumberFromUser,currentResult)
	
}

function multi() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult *= enteredNumberFromUser
    logic('*', initResult, enteredNumberFromUser)
	logHistory(initResult,enteredNumberFromUser,currentResult)
	
}

function divide() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult /= enteredNumberFromUser
    logic('/', initResult, enteredNumberFromUser)
	logHistory(initResult,enteredNumberFromUser,currentResult)
	

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