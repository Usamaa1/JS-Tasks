/* Task 2 */

/* var d = new Date();
console.log(d.toDateString()); */


/* Task 2 */

/* var date_1 = new Date();
console.log(date_1);

/* Task 3 */

/* const date = new Date();
console.log("HOUR =======>", date.getHours());
console.log("DAY =======>", date.getDay());
console.log("MONTH =======>", date.getMonth());
console.log("YEAR =======>", date.getFullYear()); */ 


/* Task 4 */

/* const date_2 = new Date();
console.log(new Date(date_2.setFullYear(2006)).toDateString()); */


/* Task 5 */

/* function name(){
    var name = prompt("Enter your name: ");
    console.log("Mr: " + name);
}
name(); */


/* Task 6 */

/* function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    console.log("Current time: " + theHr + ":" + theMin)
}
tellTime(); */

/* Task 7 */

/* 
1. myfunction() { }             (Incorrect)
2. function myfunction() { }    (Correct)
3. func myfunction() { }        (Incorrect)
4. myfunction = () => { }       (Incorrect)
*/


/* Task 8 */

/* function array(){
    var array = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    array.pop();
    console.log(array);
}
array(); */

/* Task 9 */

function type(){
     var txt = prompt("Enter your text: ");
     parseInt(txt);
     if(typeof txt === 'number'){
         console.log('It is Number');
     }else{
         console.log('It is a string');
     }
    
}
type();

/* Task 10 */

function multiply(){
    var numArray = [32, 23,54, 43, 54];

    for(i=0; i<numArray.length; i++){
        numArray[i] = numArray[i] * 7;
    }
    console.log(numArray);
}
multiply();

/* Task 11 */

function randomNumber(){
    var x = Math.floor((Math.random() * 1000) + 1);
  document.getElementById("ranNum").innerHTML = x;
}

/* Task 12 */

function stringLength(){
    var text = prompt("Enter your string: ");
    console.log("Length of your eneterd string is: " + text.length);
}
stringLength();


/* Task 13 */


var text_1 = () =>{
    var text_1 = prompt("Enter your text: ");
    console.log(text_1.toUpperCase());

}
text_1();

/* Task 14 */

function arraySortAsc(){
    var num = [1,2,4,5,3,6,9,8,7];
    num.sort();
    console.log(num);
}
function arraySortDes(){
    var num = [1,2,4,5,3,6,9,8,7];
    num.sort(function(a,b){return(b-a)});
    console.log(num);
}
arraySortAsc();
arraySortDes();


/* Task 16 */

// var date_1 = new Date();
// console.log(date_1);

/* Task 17 */

// var date_1 = new Date();
// console.log(date_1);

/* Task 18 */

// var d = new Date();
// console.log(d.toDateString());


/* Task 19 */

// var date_1 = new Date();
// console.log(date_1);