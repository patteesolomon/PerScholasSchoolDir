
// /* 1. How do we assign a value to a variable? A. With the assignment operator 2. How do we change the value of a... ... */
// A. Q + A
// How do we assign a value to a variable?
    var m = 0;
// How do we change the value of a variable?
    m = 8;
// How do we assign an existing variable to a new variable?
    var i = m;
// Remind me, what are declare, assign, and define?
    var u; // declare 
    u = 3; // assign
    yu = (a) => a*3; // define
// What is pseudocoding and why should you do it?
    // pseudocode is a scaffold of instructions
    // needed to lay out what to do so the programmer
    // has an outline of how the program will work.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//skip

// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.
// Create a variable called firstVariable
var firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// Change the value of this variable to some number
firstVariable = 0;
// Store the value of firstVariable in a new variable called secondVariable
var secondVariable = firstVariable;
// Change the value of secondVariable to any string.
secondVariable = 'VXD';
// What is the value of firstVariable?
//firstVariable = 0;

// Create a variable called yourName and set it equal to your name as a string.
var yourName = 'Solomon Pattee';
// Then, write an expression that takes the string "Hello, my name is " and the variable
// yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
greetExp = (yN) => {return 'Hello, my name is ' + yN;};

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console.

// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
// **** Picture HERE
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c != d);
console.log('Name' === 'Name');
// && , ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false && false);

// D. The farm
// Declare a variable animal.
// Set it to be either "cow" or something else
// Write code that will print out "mooooo" if it is equal to cow
var animal = 'cow';

// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."


// Commit

fAnimal = (a) => (a === 'cow')? console.log('mooooo') : console.log("Hey! You're not a cow.");


// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!",
// if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
    var age = 0;
    ageChk = (age) => (age >= 16)? console.log('Here are the keys!') :
    console.log("Sorry, you're too young");

// II. Loops
// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)
    
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive

let id=0;
while (id < 10) {
    console.log(id);
    ++id;
}

// Write a loop that will print out all the numbers from 10 up to and including 400

for(let i = 10; i < 400; i++)
{
    console.log(i);
}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000

let ief = 12;
while (ief < 4000) 
{
    if(ief % 3 == 0)
    {
        console.log(ief);
    }
    ++ief;
}

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let index = 1; index < 100; index++) {
    
    if (index % 2 == 0) {
        console.log(index + "<-- is an even number");
    }
    else{
        console.log(index);
    }
}

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

// Example Output:
// I found a 5. High five!
// I found a 10. High five!

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

// Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// For numbers divisible by both three and five, be sure your code prints both messages

for (let index = 0; index < 100; index++) {
    if(index % 3 == 0 && index % 5 == 0)
    {
        console.log("I found a" + index + " Three is a crowd"+" High five!");
    }  
    if(index % 3 == 0)
    {
        console.log("I found a" + index + " Three is a crowd");
    }
    if(index % 5 == 0)
    {
        console.log("I found a" + index +" High five!");
    }
}