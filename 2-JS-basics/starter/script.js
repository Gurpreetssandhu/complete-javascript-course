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
/*
 var avgScoreTeamJohn = (89 + 120 + 103) / 3; //104
 var avgScoreTeamMike = (116 + 94 + 123) / 3; //111

 avgScoreTeamJohn = 111; */
/*
 if(avgScoreTeamJohn > avgScoreTeamMike){
     console.log('John\'s Team is a winner with Average score of: ' + avgScoreTeamJohn);
 } else if(avgScoreTeamJohn < avgScoreTeamMike){
    console.log('Mike\'s Team is a winner with Average score of: ' + avgScoreTeamMike);
 } else {
     console.log('Both Teams have equal average scores.');
 } */

 /*
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
*/


//****************************************************************************
/****************************************************************************/

/**********************************************************************
 * **************           Functions     ******************************
 **********************************************************************/
/*
 function calculateAge (birthYear){
    return 2018 - birthYear;

 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log('John is ' + ageJohn + ' old.')
 console.log('Mike is ' + ageMike + ' old.')
 console.log('Jane is ' + ageJane + ' old.')


function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

//calling the functions. Functions always do not necessarily return something
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/
/**************************************************************************
 *    Write function with the Function name
 */

 /*
var whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher': return firstName + ' teaches kids how to code';
            case 'driver':
                return firstName + ' drives a cab in Brea';
                case 'designer' : return firstName + ' design beautiful websites.';
                    default: return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/
/**************************************************************************
 *    ARRAYS
 ************************************************************************/
/*
 //Initialize new Array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

//Mutate Array Data
names[1] = 'Ben';
names[names.length] = 'Mary';

console.log(names);

// Different Data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); //to add the value to the array at the last
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);
*/
/******************************************************************
 * **********     CODING CHALLENGE III      ***********************
 *******************************************************************/

/*
var tipAmount = function (bill) {
    if (bill < 50) {
        return (0.2 * bill);
    } else if(bill >= 50 && bill < 200) {
        return (0.15 * bill);
    } else if(bill >= 200){
        return (0.10 * bill);
    } else {
        return 'Invalid Amount'; 
    }
}

var bills = [124, 48, 268];
var tips = [tipAmount(bills[0]), tipAmount(bills[1]), tipAmount(bills[2])];

var totalBill = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(tips, totalBill);
*/
/******************************************************************
 * **********     Object & Properties      ***********************
 *******************************************************************/
/*
 //Object literal--> Method 1 to define Objects
 var john = {
     firstName: 'John',
     lastName: 'Smith',
     birthYear: 1990,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried: false
 };
 console.log(john.family); //access the properties of object John: Method 1
 console.log(john['lastName']);//access the properties of object John: Method 2: use property name in single quotes

 var x = 'birthYear'; //Assign the property of Object to a variable
 console.log(john[x]);

 //Mutation of Data
 john.job = 'designer';
 john['isMarried'] = true;
 console.log(john);

  //Objects --> Method 2 to define Objects
 var jane = new Object();
 jane.name = 'Jane';
 jane.birthYear = 1969;
 jane['lastName'] = 'Smith';

 console.log(jane);

 */
/******************************************************************
 * **********     Methods     ***********************
 *******************************************************************/ 
/*
 //Define Object name John
 var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear; /this.age is to set the value of propety age
    }
};

john.calcAge();
console.log(john);

*/

/******************************************************************
 * **********     CODING CHALLENGE III      ***********************
 *******************************************************************/
/*
 var john = {
     name: 'John Smith',
     mass: 110,
     height: 1.95,
     calcBMI: function(){
         this.BMI = this.mass / (this.height * this.height);
         return this.BMI;
     }
 };

 var mark = {
     name: 'Mark Drew',
     mass: 93,
     height: 1.69,
     calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
 };

if(john.calcBMI() > mark.calcBMI()){
    console.log(john.name + '\'s BMI is more than Mark\'s. John\'s. ' +john.name+'\'s BMI is: ' + john.BMI);
} else if(john.BMI < mark.BMI) {
    console.log(mark.name + '\'s BMI is more than John\'s. Mark\'s. ' + mark.name+ '\'s BMI is: ' + mark.BMI);
} else {
    console.log('Mark & John have the same BMI');
}
*/
/******************************************************************
 * **********     Loops & Iteration      ***********************
 *******************************************************************/
/*
var k = 300
 for(var i = 0; i < k; i += ){
     console.log(i);
 }
*/
/*

 var john = ['John', 'Smith', 1990, 'designer', false];

for(var i = 0; i < john.length; i++){
    console.log(john[i]);
}
*/
/*
var john = ['John', 'Smith', 1990, 'designer', false];

var i =0;
while(i < john.length) {
    console.log(john[i]);
    i++
}
*/
// Continue & Break Statements

/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for(var i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for(var i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
} */

/*
//Looping Backward
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for(var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}
*/

/******************************************************************
 * **********     CODING CHALLENGE IV      ***********************
 *******************************************************************/

 var johnTips = [];
 var johnTotalBill = [];
 var john = {
     fullName: 'John Smith',
     bills: [124, 48, 268, 180, 42],
     calcTip: function(){
        this.tips = [];
        this.finalValues = [];


        for(var i =0; i < this.bills.length; i++){
           var bill = this.bills[i];
           var percentage;

           if (bill < 100) {
               percentage = .2;
           } else if(bill >= 100 && bill < 300) {
               percentage = .1;
           } else if(this.bill >= 300){
               percentage = .25;
           } 
               this.tips [i] = bill * percentage;
               this.finalValues[i] = bill + bill * percentage;
           
        }       
   }
 } ;

john.calcTip();
console.log(john);


 var mark = {
     fullname: 'Mark Smith',
     bills: [77, 375, 110, 45],
     calcTip: function(){
        this.tips = [];
        this.finalValues = [];

        for(var i =0; i < this.bills.length; i++){
           var bill = this.bills[i];
           var percentage;

           if (bill < 100) {
               percentage = .2;
           } else if(bill >= 100 && bill < 300) {
               percentage = .1;
           } else if(this.bill >= 300){
               percentage = .25;
           } 
               this.tips [i] = bill * percentage;
               this.finalValues[i] = bill + bill * percentage;
           
        }       
   }
 } ;

 mark.calcTip();
 console.log(mark);

 function calcAverage(tips){
     var sum = 0;
     for (var i = 0; i < tips.length; i++) {
         sum += tips[i];
     }
     return sum / tips.length;
 }

 john.average = calcAverage(john.tips)
 mark.average = calcAverage(mark.tips)

 console.log(john, mark);










