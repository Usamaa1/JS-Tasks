//*********************
//variable dataType
/*
var firstName = 'usama';
console.log(firstName);

var lastName = 'riaz';
var age = 22;
console.log(lastName, age);

var cnic = false;
console.log('cnic')

var job;
console.log(job);
*/

/************
 *Mutation & Type Coercion
 */
/* var firstName= 'Usama';
var age= 28; */
 
//type coercion
/* console.log(firstName+' ' +age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName +' is years '+ age+' old'+ ' works as a '+ job +' and is married '+ isMarried);

//mutation

job = 'gardener';
age = 40;

console.log(firstName +' is years '+ age+' old'+ ' works as a '+ job +' and is married '+ isMarried);

var flower= prompt('yours favourite flower')
alert(firstName +' is years '+ age+' old'+ ' works as a '+ job +' and is married '+ isMarried +' and also favourite flower is: ' +flower); */

/***********************************JS Task 1*********************
 * Create A program that takes a name from the user and append "Mr." at the start of the name.
*/

var firstName = prompt("Enter Your First Name:");
alert("Mr. "+ firstName);

/***********************************JS Task 2********************************
 * Create a program that takes an input from the user as a string, count the number of characters and show it in alert
HINT =====> String is an array of characters in javascript's core
*/

var word = prompt("Enter a word which you want to count");
alert("Your enter "+ word.length + " words in a string")

/***********************************JS Task 3******************************
 * Create a program that takes an input from user as a string and remove any whitespaces in the input given.
HINT ====> search for "trim" in javascript
*/

var text = prompt("Enter your Text we removes whitespace from it:");
alert(text.trim());
// alert(text.replace(/\s/g, ''));


/***********************************JS Task 4***********************
 * Which of the following variable names are incorrect? 
1. _name
2. $name_1
3. 1_#name
4. #name
*/


_name   (Correct) 
$name_1 (Correct)    
1_#name (Incorrect)
#name   (Incorrect) 


/***********************************JS Task 5********************
 * Solve the equation below and the answer should not be in float point value

2 + 6 * 8 - 9 + (2/3) + 9

*/

var expresion = 2 + 6 * 8 - 9 + (2/3) + 9;
expresion = Math.round(expresion);
console.log(expresion);

/***********************************JS Task 6**********************
 * What will be the output of the following program? 

var product1 = 200 * 3;
var product2 = 300; 
var discount = 20; 
var total = (product1 + product2) / discount

*/

var product1 = 200 * 3;
var product2 = 300; 
var discount = 20; 
var total = (product1 + product2) / discount

console.log(total);

/***********************************JS Task 7***********************
 * write a program that performs the following operations


1. data type of phone number should be a number 
2. data type of NIC should be string 
3. add a greeting before the name e.g hello mr.{name}

var phoneNumber = 03205757562 
var NIC = 4250187968352
var name = "umair"
*/

var phoneNumber = "03205757562"; 
var NIC = 4250187968352;
var name = "Usama";

phoneNumber = Number(phoneNumber);
NIC = NIC.toString();

console.log("Hello Mr. "+ name);
console.log(phoneNumber);
console.log("NIC:", NIC);

/***********************************JS Task 8************************
 * var age = 21

write the following condition in a single line 

if (age >= 20) {
    console.log("Eligible")
}

HINT ====> search for single line statements in javascript
*/
var age = 21;

if (age >= 20) { console.log("Eligible")}

/***********************************JS Task 9*************************
 * What will be the output of the following program? 

var product1 = 500 * 3;
var product2 = 600;
var discount = 20;
var total = (product1 + product2) / discount
var budget = 100

if (total < budget) {
    console.log("You did not exceed the budget")
} else {
    console.log("You are not allowed to spend this much money")
}

*/

var product1 = 500 * 3;
var product2 = 600;
var discount = 20;
var total = (product1 + product2) / discount
var budget = 100

if (total < budget) {
    console.log("You did not exceed the budget")
} else {
    console.log("You are not allowed to spend this much money")
}

/***********************************JS Task 10**************************
 * What is the output of the following program 

var SAT = 200;
var avg = 150;
var GPA = 3;
var sport = "snooker"

if (SAT > avg || GPA > 2.5 || sport === "football") {
    console.log("You're an awesome student");
}
else {
    console.log("You are not eligible");
}*/

 var SAT = 200;
var avg = 150;
var GPA = 3;
var sport = "snooker"

if (SAT > avg || GPA > 2.5 || sport === "football") {
    console.log("You're an awesome student");
}
else {
    console.log("You are not eligible");
}

/***********************************JS Task 11************************
 * var myMarks = [30,45,68,32,45];
var criteria = 30; 
var bonusPoints = 5;

Solve the following scenario using the code above

You are given marks of a single student in an array, generate a loop that will "add" bonus points in each of the grade
in the array, then compare the new marks with the criteria given if any mark is less than criteria the student will be 
marked failed otherwise passed 


*/

var myMarks = [30,45,68,32,45];
var criteria = 30; 
var bonusPoints = 5;

for (var i=0; i<=4; i++) {

    myMarks[i] = myMarks[i] + bonusPoints;
     if (myMarks[i] > criteria) {   
        console.log("Passed");
   
     }else {
       console.log("Failed");
     } 
   }
   console.log(myMarks);


   /***********************************JS Task 12************************
    * What will the output at each of the console statements? 

var array=[1,2,3,4,5];
console.log(array.splice(2));
 
console.log(array);
 
var array2=[6,7,8,9,0];
console.log(array2.splice(2,1));
 
console.log(array2.splice(2,0));
 
console.log(array2);
   */

   var array=[1,2,3,4,5];
   console.log(array.splice(2));
    
   console.log(array);
    
   var array2=[6,7,8,9,0];
   console.log(array2.splice(2,1));
    
   console.log(array2.splice(2,0));
    
   console.log(array2);