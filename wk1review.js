////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers
var i = 0;
var r = 0;
if (i < r)
{
  console.log(r);
}
else
{
  console.log(i);
}
/* 2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */
var student = 84;

if (student >= 90) 
{
    console.log('A');
}
else if (student >= 80) 
{
    console.log('B');
}
else if (student >= 70) 
{
    console.log('C');
}
else if (student >= 55) 
{
    console.log('D');
}
else if (student < 55) 
{
    console.log('F');
}

//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"
var time = "10:00";

if (time <= "11:59") 
{
    console.log('Good Morning');
}
else if (time <= "16:00") 
{
    console.log('Good Morning');
}
else
{
    console.log('Hey there');
}
////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////
// Look up the following string methods!

// Using charAt(), print the letter i in THE WORD Sabrina 

console.log('Sabrina'.charAt(4));

// Define Unicode in a comment, 
// and get the Unicode using charCodeAt()
// of the third character in Teddy
console.log('Teddy'.charCodeAt(2));

// Using fromCharCode() - make it readable for us :). You'll see!
String.fromCharCode('Teddy');
// Take your first and last name and concat()
console.log('Solomon '.concat('Pattee'));

// Create a string and make it return true using startsWith()
console.log('sfef'.startsWith('s',0));

// Now use any variable with endsWith() and return false
console.log('uub'.endsWith());

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon,'.includes();

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone.".indexOf(28);

////////////////////////////////////////////////////////////////
// Boolean:
///////////////////////////////////////////////////////////////

// I just want my dreams to come true. 
// With the powers of logical and 
// comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke";

console.log(a < b);
console.log(c > b);
console.log(d == d);
console.log(d < a);
console.log(a < 15);
console.log(a < b < c);
console.log(c > b > a > d);


////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////
// Ken has a headache today and he said the room has been spinning like crazy.
// Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
const Ken = ['My','head','is','spinning','AAAAH'];
for (let a = 0; a < 10; a++) 
{
  console.log(Ken[a]);
}

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
const Teo = ['AHH', 'glasses suck', 'NGGGGNUUHHH', 'UUUUGGGHHHHH', 'Contacts hurt'];
for (let b = 0; b < 20; b++) 
{
  console.log(Teo[b]);
}

// But wait! Lisa said, while Teo is spinning 20 times. 
// Let's make him say "I'm sorry". 
// Print I'm sorry 20 times using a WHILE loop.
Teo[0] = "I'm sorry"; 
while (vbr < 20)
{
  console.log(Teo[0]);
  ++vbr;
}

// For the next three, look for the syntax of FOR IN and 
// FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. 
// Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
    thing1: 'shoes',
    thing2: 'clothes',
    thing3: 'gaming console'
  };
  for (const key in whateverQueenBeySaid)
  {
    if (Object.hasOwnProperty.call(whateverQueenBeySaid, key)) 
    {
      console.log(whateverQueenBeySaid[key.padStart(3," ")]);
    }
  }
  
  // Using (FOR IN LOOP), print the indexes of the array.
  
  const lana = ['l', 'a', 'n', 'a'];
  
  // USE (FOR OF LOOP)!
  const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner'];
  for (const key in lana) 
  {
    if (Object.hasOwnProperty.call(lana, key)) 
    {
      console.log(key.indexOf(lana));
    }
  }
  // Look into forEach() loop, it accepts a callback aka a function inside a function. 
  // Swathi said don't forget each person.
  // No person left behind! Use forEach() to iterate over the array perscholas. 
  // Inside the function, create a variable with the string "PS".
  // Print their name in the console concatenated with the variable. 
  const perscholas = ['Amira', 'Arely', 'Jonathan'];
  perscholas.forEach(element => {
    var ps = 'PS';
    console.log(perscholas + ' ' + PS);
  });
////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push()
// pop()
// unshift()
// shift()
// concat()
// splice()
// slice()
// sort()
// includes()
// indexOf()
// length

/* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
var shoppingList = [

  "cool ranch doritos",

  "kings hawaiian sweet bread",

  "peanut butter oreos",

  "fruit loops cereal"

];

shoppingList.push("Hendricks gin");

console.log(shoppingList[4]);

//3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"].reverse();

//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/
var nwSv = 'nowServing';
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
for (let i = 0; i < 4; i++) 
{
  console.log(`nowServing ${waitList[i]}`);
}

//5. Help Nike sell more overpriced sneakers
// by changing their slogan from an array into a string. 
// Convert the shoe array and assign it to a 
// variable named `shoeString`.
// Console.log this new variable.

var shoe = ["just", "do", "it"];
var sq = shoe.toString();
console.log();

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator

var s = [...sq];

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

var ercx = ['thie', 'ef', 'yhrh', 'uky', 'rhv', 'poij'];
var erct = ['db', 'ntn', 'yd', 'utoby', 'b', 'ptrb'];

ercx = [...erct];
erct = [...ercx];

var iota = [...erct,...erct];

////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

function maxOfTwoNumbers( x,  r)
{
    if (x > r) 
    {
      return x;
    }
    else
    {
      return r;
    }
}

//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(x,y,z)
{
  if (x > y > z) 
  {
    return x;
  }
  else if (y > x > z)
  { 
    return y;
  }
  else
  {
    return z;
  }
}

//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise

function isCharacterAVowel (c) 
{
  let fwewe= ['a','e','i','o','u'];

  if (fwewe.includes(c)) 
  {
    return true;
  }
  else
  {
    return false;
  }
}

//4. Write a function charCount that takes a string and returns the length of the string.

function charCount (c) 
{
  let ce;
  
  if (let(c) === ce) {
    ce = c;
  }
  else
  {
    ce = null;
  }
  return String.length(ce);
}

//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.

function vowelCount(s)
{
  let chek;
  let retv;
  for (let i = 0; i < String(s).length; i++) {
    if(isCharacterAVowel(String(s).charAt(i)) == true)
    {
      retv = l
    }
    else{

    }
  }
  
  return String.length;
}