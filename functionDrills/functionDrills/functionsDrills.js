/*
 * Before you start, add this javascript file in a script tag in index.html.
  
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */
// solution
///  \/ check index.html\/
//  /\                  /\

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
// solution
    // function sayHello () { console.log('hello world');}
/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
// solution
    //const print = (message) => console.log(message);

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
    //solution
    //const printMessage = (message) =>
    //console.log(`Today's message is: ${message}`);

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
// solution
  //const r = (a) => a ** 2;
  
  /*
   * Prompt 5:
   *
   * Create a function called reverseMessage. This function should take
   * a parameter called message. When invoked and passed a string, print the
   * string in reverse. (hint: look up some ways of doing this.)
   */ 
  
  //solution
    // const reverseMessage = (message) => 
    // {
    //   let mod = '';
    //   var ed = 0;
    //   for (let index = String(message).length; index > ed; index--) {
    //     mod += String(message).charAt(index);
    //   }
    //   console.log(String(mod));
    // };
  /*
   * Prompt 6:
   *
   * Create a function called multiply that takes two parameters: a and b. When
   * invoked, multiply a times b. If b an argument is not passed in for b, then
   * double a (i.e. multiply it by two).
   *
   * Hint: use a default parameter.
   */
  //solution
    //const multiply = (a, b) => (b == null)? a*2 : a*b;
  /*
   * Prompt 7:
   *
   * Fix the following code. HINT: Think Objects :)
   */
  
  /** Starter Code */
  //solution 
  // function makePerson(firstname, lastname) {
  //   firstname: '';
  //     lastname: '';
  // }
  
  // const zakk = makePerson('Zakk', 'F');
  // const jimmy = makePerson('Jimmy', 'B');
  
  
  /*
   * Prompt 8:
   *
   * Write a function that returns an object. The object can be anything.
   */
  //solution
    // const yuuz = () => zakk;
  
  /*
   * Prompt 9:
   *
   * Write a function that returns an array. The array can be of anything.
   */

  //solution
    // var mreght = ['ef', 'ref', 'jeff'];
    
    // const arrRet = () => mreght;
  
  /*
   * Prompt 10:
   *
   * Write a function that, when called, adds a number passed in as a parameter to
   * the sum variable below. Invoke your method a few times and then print the sum
   */
  
  /** Starter Code **/

  //solution
  // let sum = 0;
  // function incSum(e) 
  // {
  //   ++e;
  //   return e;
  // }

  // incSum(sum);
  // incSum(sum);
  // incSum(sum);
  
  /*
   * Prompt 11:
   *
   * Write a function that takes an array of number values and returns the sum.
   * Test it out to make sure it works.
   */
  //solution
    // function arrSumV(n = []) 
    // {
    //   let e = [];
    //   for (i = 0, i < n; i++;)
    //   {
    //     e += n[i];
    //   }
    //   return e;
    // };

    // arrSumV([1,4,5,6,8]);
  
  /*
   * Prompt 12:
   *
   * Write a function that takes a string and returns an array of every word in
   * the string.
   */
  //solution
    // const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // function stringArrWords(ar ='')
    // {
    //   let arn = [];
    //   for (i = 0; ar < String(ar).length; i++)
    //   {
    //     if (String(ar).includes(' ')) 
    //     {
    //       if (letters.some(String.indexOf(ar.charAt(i + 1)))) {
    //         arn.push(String(ar).substring(0, i));
    //         ar.replace(String(ar).substring(0, i),'');
    //         stringArrWords(arn);
    //       }
    //     }
    //     else if (String().lastIndexOf(ar) == String.lastIndexOf(element)) {
    //       arn.push(String(element));
    //     }
    //   };
    //   return arn.toString();
    // };
  
  /*
   * Prompt 13:
   *
   * How can you write a function so that this expression works? It should print
   * the string "this works!"
   */
  
  /** Starter Code */
  //solution
  //testFunc = () => console.log('this works!');
  /*
   * Prompt 14:
   *
   * Write a function that takes the add function below as a parameter and invokes
   * it, passing in 2 and 4.
   */
  
  /** Starter Code */
  // solution
  // function add(a, b) 
  // {
  //   return a + b;
  // }

  //padd = (add) => add(2, 4);
  
  
  /*
   * Prompt 15:
   *
   * Write a function that returns another function. Have the inner function print
   * the string "hello world"
   */
  //solution
  // const hello = () => console.log("hello world");

  // greet = () => hello();

  // greet();