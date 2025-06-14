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

function multiply(number, number) {
    return number * number;
}



// the below function first looks for the first character (chatAt - index 0) and converts it to uppercase
// then it is concatenated with the input but starting from the 2nd character (index 1)
// the result of the function is any string that is put as a value into the function has its first character capitalised

function capitalise(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}


// below is a less tidy version, but is clearer
// firstLetter variable is taking a slice of the value from indexes 0 - 1 (start, end)
// IMPORTANT! - the 2nd value is NOT inclusive, meaning that the slice search will STOP at the 1st index (meaning just one character will be sliced)
// No end input is needed for restOfName, it will just slice FROM the 1st index until the end of the value

function capitalise(text) {
  let firstLetter = text.slice(0, 1).toUpperCase();
  let restOfName = text.slice(1);
  return firstLetter + restOfName;
}


// using negative indexes, we can slice the very last (or other) characters from strings
// the below will always take the last character of the string and return that

function lastLetter(text) {
    return text.slice(-1);
}




// FIZZ BUZZ //

// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number


// the answer variable takes the input from the user via a prompt, and uses the parseInt() function to ensure it's an integer


let answer = parseInt(prompt("What number would you like to fizzbuzz upto?"));


// this for loop declares i as 1, and if i is LESS THAN OR EQUAL to the ANSWER, then increment the integer (i i.e. 1) by 1 (++)


    for (let i = 1; 1 <= answer; i++) {
        console.log(i)
    }


// then we iterate on it further, adding the if conditional. If 3 divided by itself (modulo) has a remainder of 0, then print Fizz
// else print i


    for (let i = 1; i <= answer; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i)
        }
    }


// we then iterate on it further - if 5 modulo is 0, return buzz. If not, return the value of i


    for (let i = 1; i <= answer; i++) {
        if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0 ) {
            console.log("Buzz") 
        } else {
            console.log(i)
        }
    }


// lastly, we can add the && conditional operator to check whether i is a number that is divisible by 3 AND 5, and if it is, return fizzbuzz
// nest all of this together using else if and ending in else
// IMPORTANT! - it's important to move the initial IF statement to the top, to ensure it checks this condition first
// if not, it would return fizz or buzz before it would return fizzbuzz (as they would be higher in the order/specificity)


    for (let i = 1; i <= answer; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }

    
// first iteration -> if 1, 3 is specified as the  min / max of the function then it will randomly output 1, 2 or 3

function getComputerChoice(min, max) {

    let randomNumber = Math.floor(Math.random() * max);
    if (randomNumber <= 0); randomNumber++;

}

// added this as 2nd iteration - does not work. Always returns paper

    if (randomNumber === 1) {
        console.log("Rock");
    } else if (randomNumber === 2) {
        console.log("Scissors")
    } else {
        console.log("Paper")
    }
    return randomNumber;


// this works - first it generates a random number, multiplies it by the amount of choices we need and adds 1 to make sure it's a whole number
// then the choice variable is determined by the random number as a condition and returning whichever string has been assigned to the integer

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choice;

    if (randomNumber === 1) {
        choice = "Rock"; 
    } else if (randomNumber === 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    
    return choice
}


// this THEORETICALLY works - i.e. this is the overall core functional logic written into code form
// HOWEVER - it is actually non-functional/incorrect, because each if conditional will run individually
// the key mistake here is thinking that because it was inside one function, it counted as ONE condition
// instead, each if condition runs one after the other, giving 3 outputs into console.log()


    function playGame() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log("You chose: " + humanChoice);
        console.log("The computer chose: " + computerChoice);

        if (humanChoice === "Rock" && computerChoice === "Paper") {
            console.log("The computer wins!")
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            console.log("You win!")
        } else {
            console.log("It's a draw.")
        }

        if (humanChoice === "Paper" && computerChoice === "Scissors") {
            console.log("The computer wins!") 
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            console.log("You win!")
        } else {
          console.log("It's a draw.")
        }  
        
        if (humanChoice === "Scissors" && computerChoice === "Rock") {
            console.log("The computer wins!")
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log("You win!")
        } else {
          console.log("It's a draw.")
        }
    }
    


// THIS is the correct version! 
// it boils down the logic into ONE if statement, providing one output depending on what is true or false
// first, we take the easy out in the logic with the draw (if x equates exactly to y, its a draw)
// unless the computer win conditions are true, then the computer wins
// and if neither of those are true, the user must be the winner

                                 
    function gameDecision() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log("You chose: " + humanChoice);                                   
        console.log("The computer chose: " + computerChoice);

        if (humanChoice === computerChoice) {
            console.log("It's a draw")
        } else if (
            (humanChoice === "Rock" && computerChoice === "Paper") ||
            (humanChoice === "Paper" && computerChoice === "Scissors") ||
            (humanChoice === "Scissors" && computerChoice === "Rock") 
        ) {
            console.log("The computer wins!")
        } else {
            console.log("You win!")
        }
    }

// IMPORTANT!
// this function DOES NOT currently need a return, because we do not need to use the output of this function as a variable anywhere else
// to iterate on the result of this function, I would need to add a new variable and replace the console.log() with it
// then, I can return the output of that function to be used elsewhere in a different function


// First, the humanScore needs to be stored OUTSIDE of the function, because otherwise it will reset to 0 every time the function is called
// Declaring it in the global stack allows it to be amended via the function, but not reset to 0 
// Further, for the output of gameDecision to be used it must be declared as a variable FIRST
// Lastly, the console.log() uses the `` so that we can concatenate a variable (human & computer score) inside it

    let humanScore = 0;
    let computerScore = 0;


    function overallScore() {

        let result = gameDecision();

        if (result === "The computer wins!") {
            computerScore++;
        } else if (result === "You win!") {
            humanScore++;
        } else {
            console.log("Tie - play again!")
        }
        
        console.log(`Score -> Human: ${humanScore} | Computer: ${computerScore}`);
    }



// So firstly, DO NOT forget to add empty parantheses if a function/method is being called (i.e. toUpperCase())
// Secondly, in the while loop, each individual condition must be EXPLICITLY DEFINED. Originally it was while (humanAnswer !== Rock || Paper || Scissors).. 
// Although that makes sense in English, it is interpreted differently in JS syntax
// then, the prompt and text formatting are redeclared, and if the response is still not true (i.e. NOT a valid answer), it will go to the beginning of the loop again
// if the new answer is true, it goes back to the beginning of the loop and tests the condition again. If it's a valid answer, the loop is closed



    function getHumanChoice() {
    let humanText = prompt("Choose: Rock, Paper or Scissors?");
    let humanAnswer = humanText.charAt(0).toUpperCase() + humanText.slice(1).toLowerCase();

    while (humanAnswer !== "Rock" && humanAnswer !== "Paper" && humanAnswer !== "Scissors") {
        humanText = prompt("That is not a valid argument! Choose: Rock, Paper or Scissors?");
        humanAnswer = humanText.charAt(0).toUpperCase() + humanText.slice(1).toLowerCase();
    } 

    return humanAnswer;
    }