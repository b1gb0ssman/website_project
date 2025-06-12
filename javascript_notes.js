const myInt = 5;
const myFloat = 6.667;


// toFixed rounds a decimal number to the defined figure 

const lotsOfDecimal = 5.46626;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);


// this would result in 743, as it would be calculated as a string due to precendece and concatenated
// typeof can be used to display what is being calculated (this example will result in string)

let myNumber = "74";
myNumber += 3;


// the Number() constructor can be used to define when a string should be calculated as a number
// the below will result in 77 as we declared the string variable as a number

let myNumber2 = "74";
myNumber2 = Number(myNumber2) + 3;


// increments and decrements can be applied before or after runtime e.g. the below will run myVar first, then store the increment after. 
// this means that it will store 4 first, and then 5 the next time the variable is called

let myVar = 4;
myVar++;


// the below will apply the increment as part of the same runtime, meaning the first runtime result will be 5

let myLet = 4 
++myLet;


// It's possible to combine expressions inside a string using the ` (backtick) 

const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); 


// you can use the replace() function to replace values
// in the below, a variable is defined, and a 2nd variable uses replace() to replace the value with another definition (i.e. sausage)
// this console.log will output I am a sausage

const myText = "I am a string!"
const newText = myText.replace("string", "sausage")

console.log(newText)



// functions are called by inputting function() into the console (or calling it), providing a value inside the parantheses
// the function below should be called by "add7()" - insert a value in between the parantheses. 

function add7(number) {
    return number + 7;
}


// the below function can be called with multiply() and providing a value in the parantheses
// the output will be whatever two values are provided multiplied when the function is called

function multiply (number, number) {
    return number * number;
}



// the below function first looks for the first character (chatAt - index 0) and converts it to uppercase
// then it is concatenated with the input but starting from the 2nd character (index 1)
// the result of the function is any string that is put as a value into the function has its first character capitalised

function capitalise(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}


