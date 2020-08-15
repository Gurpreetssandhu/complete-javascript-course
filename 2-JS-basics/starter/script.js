/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var _3years = 3;
var johnMark = 'John and Mark'; */

/* Variable mutation and type coercion */
/*
var firstName = 'John';
var age = 28;
var str = firstName + ' ' + age;

 //Type coercion
//console.log(firstName + ' ' + age); //this is Type Coercion
console.log(str); //this is Type coercion

var job, isMarried;
job = 'teacher';
isMarried = false; 

console.log(firstName + ' is a ' + age + 'years old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight'; 
job = 'driver'; */

//alert(firstName + ' is a ' + age + 'years old ' + job + '. Is he married? ' + isMarried);

//var lastName = prompt('what is his last Name?');
//console.log(firstName + ' ' + lastName);

/*
 * Basic Operators
 */
//Math Operators

/*
var currentTime, currentYear, yearJohn, yearMark;
 currentTime = new Date()
currentYear = currentTime.getFullYear();
ageJohn = 28;
ageMark = 33;
console.log(currentYear);

yearJohn = currentYear - ageJohn;
yearMark = currentYear - ageMark;

 console.log(yearJohn);
 console.log(currentYear + 2);
 console.log(currentYear * 2);
 console.log(currentYear / 2);



 // Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof Opertor
console.log(typeof johnOlder);
console.log(typeof currentYear);


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x,y);

//More Operators
x *= 2; //this is equal to x = x * 2;
console.log(x);
x+=10;
console.log(x); 

/******************************************************************
 * **********     CODING CHALLENGE I        ************************
 *******************************************************************/
/*
var heightJohn = 3;
var massJohn = 70; 
var BmiJohn = massJohn / heightJohn ^ 2;
//console.log(BmiJohn);

var heightMark = 4;
var massMark = 100; 
var BmiMark = massMark / heightMark ^ 2;
console.log('John\'s BMI is: ' +BmiJohn + ' & Mark\'s BMI is: ' +BmiMark);

if (massMark < BmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}
//var markBmiHigher =  massMark > BmiJohn;
//console.log('Is Mark\'s BMI higher than John\'s? ' + markBmiHigher); */
//****************************************************************************
/****************************************************************************/


/*
 * If / Else Statements 
 */

 /*
 var firstName = 'John';
 var civilStatus ='Single';

 if (civilStatus === 'married'){
     console.log(firstName + 'is maried!');
 } else {
     console.log(firstName + ' is ' + civilStatus + ' :)');
 }

 var isMarried = false;
 if (isMarried) {
     console.log(firstName + ' is Married!');
 } else {
     console.log(firstName + ' will be married soon'); 
 }*/

 /******************************************************************************
  *  The Ternary Operatory & switch statements
  */

  /**************************************** 
  var firstName = 'John';
  var age = 56; 
  age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

  var drink = age >= 18 ? 'beer' : 'juice';
  console.log(drink);

  //Switch Statements
  var job = 'driver';
switch (job) {
    case 'teacher' : console.log(firstName + ' teaches how to code.');
    break;
    case 'driver' : console.log(firstName + ' drives an uber in Brea.');
    break;
    case 'designer' : console.log(firstName + ' designs beautiful websites.');
    break;
    default : console.log(firstName + ' does something else.');
}

switch(true) {
    case age < 13 : console.log(firstName + ' is a boy.');
    break;
    case age >= 13 && age < 20 : console.log(firstName + ' is a teenager.');
    break;
    case age >=20 && age < 30 : console.log(firstName + ' is a young man.');
    break;
    default :  console.log(firstName + ' is a man.');
}
***************************************/

/************************************************************
 * Truthy & Falsy values and equality operators
 */
//Falsy Values: undefined, null, 0, '', NaN
//Truthy Values: NOT falsy values;
/*
var height;
height = 23;

if(height || height ===0) {
    console.log('Variable is defined.');
} else { 
    console.log('Variable has not been defined');
} 

/*******
 * Equality Opeators
 */
/*
if(height == '23') {
    console.log('This code');
} else {
    console.log('print nothing')
}
*/
/******************************************************************
 * **********     CODING CHALLENGE II       ***********************
 *******************************************************************/

 var avgScoreTeamJohn = (89 + 120 + 103) / 3; //104
 var avgScoreTeamMike = (116 + 94 + 123) / 3; //111

 avgScoreTeamJohn = 111;
/*
 if(avgScoreTeamJohn > avgScoreTeamMike){
     console.log('John\'s Team is a winner with Average score of: ' + avgScoreTeamJohn);
 } else if(avgScoreTeamJohn < avgScoreTeamMike){
    console.log('Mike\'s Team is a winner with Average score of: ' + avgScoreTeamMike);
 } else {
     console.log('Both Teams have equal average scores.');
 } */

 var avgScoreTeamMary = (91 + 134 + 105) / 3; //110
 
 avgScoreTeamMary = 111;

 if(avgScoreTeamJohn > (avgScoreTeamMike && avgScoreTeamMary)){
     console.log('John\'s Team is a winner with Average score of: ' + avgScoreTeamJohn);
 } else if(avgScoreTeamMike > (avgScoreTeamJohn && avgScoreTeamMary)){
    console.log('Mike\'s Team is a winner with Average score of: ' + avgScoreTeamMike);
 } else if(avgScoreTeamMary > (avgScoreTeamJohn && avgScoreTeamMike)) {
    console.log('Mary\'s Team is a winner with Average score of: ' + avgScoreTeamMike);
 }else {
     console.log('All Teams have equal average scores.');
 }



//****************************************************************************
/****************************************************************************/














