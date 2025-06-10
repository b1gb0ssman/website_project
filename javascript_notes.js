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

const string = "The revolution will not be televised.";
console.log(string);

