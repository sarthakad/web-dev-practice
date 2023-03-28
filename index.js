/** Printing Hello World in Javascript console */
console.log("hello world");
console.log(1+1);
console.log(`hello from back tick`)
console.log(`unik ko kando ${1+1}`)
console.log(true);
console.log(false);
console.log(typeof 'nepal le jitcha aja')
/** variables */
let name = "steve smith"
let over =10
let win = true
console.log(name)
console.log(name)
console.log(name)
win = false
console.log(win)
const birth_year = 2001

console.log(birth_year)
let israinning =true
if (israinning){
  console.log("take your umbrella with you")
}else if(isgoingtorain = true){
  console.log("take your umbrella with you")  
  
} else{
    console.log("dont take your umbrella with you")
}
const num = 10
if(num<0){
  console.log("negative")
}else if(num>0){
    console.log("positive")  
}else if(num === 0){
  console.log("zero")
}
/* ================== Data Types ========================
 There are eight basic data types in javascript.
  1. String
  2. Number
  3. Boolean
  4. Object
  5. Null
  6. Undefined
  7. Symbol
  8. BigInt
*/

/* ============ String ======================
Anything inside the quotation marks is a string.
There are three diffrent types of quotation marks:
1. Double Quotation ("")
2. Single Quotation ('')
3. Backtick Quotation (``);

There is no diffrence between 1 and 2. But with backtick quotation we can write javascript quote inside using ${} symbol.
*/


/* ================== Numbers ======================
  There is no separate integer or floating point number in javascript.      Every mathematical number is of Number data type in js.
*/

/* ============== Boolean =========================
  Takes one of the two values: true or false
*/

/* ============== How to check data type ===========
 typeof operator is used to check the data type of a data
 */

/* =============== If Statement =====================
*/

/* ================ Comparision Operators ====================
  1. is greater than (>)
  2. is less than (<)
  3. is equal to (==)
  4. is strictly equal to (===)
  5. is greater than or equal to (>=)
  6. is less than or equal to (<=)

*/

/* Create a grade calculator that prints "Distinction" if grade is greater than or equal to 80, "First Division" if grade is greater than or equal to 60 and less than 80, "Second Division" if grade is greater than 50 and less than 60, otherwise "Fail" 

*/
const grade= 77
if(grade>=80){
  console.log("distinction")
}else if(grade>=60 & grade<=80){
  console.log("first division")
}else if(grade>=50 & grade<=60){
  console.log("second division")
}else{
  console.log(fail)
}

/* ================= Logical Operators ====================== 
1. AND Operator (&&) returns true if all conditions are true
2. OR Operaor (||) returns true if one of the conditions is true
3. NOT Operator (!) returns opposite of the given value
*/

/* ============== For Loops ==============================
Used when same task is being done multiple times.  Like printing a name 100 times.
for (starting_statement; stopping_condition; action) {
  // some task
}
*/
 let i=10
  for(i;i>0;i=i-1){
    console.log(i)
  }
/* ========================= While Loops ====================== 
  Same use cases as for loops.
  // starting condition
  while(stopping_condition) {
    // some task
    // action
  }
*/

/* ====================== Functions ============================
  Functions are like machines that takes some input, process them and produce some output.
  
  function name_of_function(input) {
    return output;
  }

*/
function printer(name){
  console.log("your name is ${name}")
}
printer("kushal bhurtel")

const substract =(num1,num2)=>{
  
}
/* ==================== Object =====================================
Object are like collection of diffrent data. Like in real world, everything is an object and every object has some properties. Like car is a object and has properties like color, brandName, Model etc.
Similarly, Object is Javascript is just like real world objects that has some properties and values.
*/
  const student={
    name: "sarthak adhikari",
    roll: 32,
    greet: function(){
      console.log("good morning")
    }
  }
console.log(student.name)
    const car={
      model: "BMW",
      color: "red", 
    }

/* ============================= Array ============================
Arrays are also the collection of diffrent data, but unlike objects they don't need properties to store data.
let favorite_animes = ["Death Note", "Steins Gate", "Classroom of Elite"];
*/
      const fruits=["banana","apple,6969"]
        const top_10_movies={
          id:1,
          name:"john wick"
        },
          {
            id:2,
            name: "god of the war of the thunder "
          }


/**  Problem 1
Write a function named "fullName" that takes input "firstName" and "lastName" and returns the fullName;
*/

/** Problem 2 
Write a function named "reverseMachine" that takes some string as input and return the reverse of that string.
Like: input = "dog" output = "god"

*/