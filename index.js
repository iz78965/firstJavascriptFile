
//exercise for functions practice
// This is a simple function
// I built it for simple Greetings
function greetings () {
    console.log("hello everyone nice to meet you. lets have fun")
}

greetings()

// Simple function but have two arguments
// It is a simple function for addition
// use to add two digits 

function add (a, b) {

    return a + b
}

console.log (add(5 ,8))

// This is a arrow function for addition have two arguments to add two values given by user
const additionFunction = (a, b) => {
    return a + b
}

console.log(additionFunction(25,5))

// This a arrow function used for the subtractio of two values given by the user

const subtractionFunction = (a, b) => {
    return a - b
}

console.log(subtractionFunction(25,5))

// simple arrow function for multiplication
// Takes twon arguments from user and multiply them
// finally console log the value in console
const multiplicationFunction = (a, b) => {

    return a * b

}

console.log (multiplicationFunction(3, 3))

// simple arrow function for division
// Takes two values from the user
// finally console log the value in console

const divisionFunction = (a, b) => {

    return a / b

}

console.log(divisionFunction(3, 3))

const modulusFunction = (a, b) => {
    console.log('hello')
    return a % b
}

console.log(modulusFunction(6, 3))


const showAll = () => {
    console.log("this function will show the outcome of all the functions once again but i reverse order")
    console.log(modulusFunction(6, 3))
    console.log(divisionFunction(3, 3))
    console.log(multiplicationFunction(3, 3))
    console.log(subtractionFunction(25,5))
    console.log(additionFunction(25,5))
    console.log (add(5 ,8))
    // return a;


    return modulusFunction(6,3)
}
console.log(showAll())