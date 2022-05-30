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

// Use this when you uncommit line 32,50,70,88  to push array instead of abject

// let logHistory= function logs(x,y,z) {
// 	logEnteries.push([x,y,z])
// 	console.log('logs: ', logEnteries);
// 	console.log(typeof(logEnteries));	
// }
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
	// logHistory(initResult,enteredNumberFromUser,currentResult)
	const logsObject= {
		operation: "ADD",
		prevResult: initResult,
		operandNumber: enteredNumberFromUser,
		afterResult:currentResult
	}
	logEnteries.push(logsObject)
	console.log('logs: ', logEnteries);
	console.log(typeof(logEnteries));	

}

function substra() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult -= enteredNumberFromUser
    logic('-', initResult, enteredNumberFromUser)
	// logHistory(initResult,enteredNumberFromUser,currentResult)
	const logsObject= {
		operation: "Subtract",
		prevResult: initResult,
		operandNumber: enteredNumberFromUser,
		afterResult:currentResult
	}
	logEnteries.push(logsObject)
	console.log('logs: ', logEnteries);
	console.log(typeof(logEnteries));	

}
	


function multi() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult *= enteredNumberFromUser
    logic('*', initResult, enteredNumberFromUser)
	// logHistory(initResult,enteredNumberFromUser,currentResult)
	const logsObject= {
		operation: "Multi",
		prevResult: initResult,
		operandNumber: enteredNumberFromUser,
		afterResult:currentResult
	}
	logEnteries.push(logsObject)
	console.log('logs: ', logEnteries);
	console.log(typeof(logEnteries));	
	
}

function divide() {
    const enteredNumberFromUser = getUserNumberInput()
    const initResult = currentResult
    currentResult /= enteredNumberFromUser
    logic('/', initResult, enteredNumberFromUser)
	// logHistory(initResult,enteredNumberFromUser,currentResult)
	const logsObject= {
		operation: "Division",
		prevResult: initResult,
		operandNumber: enteredNumberFromUser,
		afterResult:currentResult
	}
	logEnteries.push(logsObject)
	console.log('logs: ', logEnteries);
	console.log(typeof(logEnteries));	
	

}



// Events 
addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", substra)
multiplyBtn.addEventListener("click", multi)
divideBtn.addEventListener("click", divide)