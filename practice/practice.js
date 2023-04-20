/*
logical operators
> - greater
< - lesser

*/

const log = (param)=>console.log(param);

var a = 40;
var b = 20;
var c = 60;

//general if and else if statement
if(a > b && a > c){ // a = 40 , b = 20
    console.log('Inside the IF statment'); //skip
} else if(a > b || a > c){
    console.log("inside the ELSE IF statment") //stay
} else if((a != 40) == false){
    console.log("Inside the NOT statment") 
}else{
    console.log("Outside the statment")
}

log("--------------------------------------------")

//Nested IF statement :

if(a > b || a > c){
    console.log("Inside the Nested IF statement");
    if(a != 40){
        console.log("A is not 40");
    } else {
        console.log("A is 40");
    }
} else{
    console.log("Outside the Nested IF statemet");
}

log("--------------------------------------------")

var fruit_1 = 'apple';
var fruit_2 = 'mango';

console.log("fruit is :", fruit_1)
log("--------------------------------------------")

if(fruit_1 == 'mango')

{
    log("---- Fruit is apple ----");
    if(fruit_2 == 'apple'){
        log("Fruit is Mango");
    } else {
        log("Fruit is not mango");
    }
} 

else {
    log('Fruit is not apple')
}

// if(condition){

// }
// else {

// }

log("--------------------------------------------")

var game = 'cricket';
console.log(game)
game = 'volleyball'
console.log(game)

// let game_1 = 'cricket';
// console.log(game)

log("--------------------------------------------")

let jobs = 'IT'
console.log(jobs)
jobs = 'NON IT'
console.log(jobs)
log("--------------------------------------------")

// const place = 'Chennai'
// console.log(place)
// place = 'Tiruvallur'
// console.log(place)

log("--------------------------------------------");




function addition(){
    var a = 20;
    var b = 30;
    var total = a + b;
    console.log("Total is :" + total + ', Value of A is :' +a );
}

addition();

var str1 = 'kalil'
var str2 = 'ur'

console.log(str1 + "     " + str2)
console.log(str1.concat(str2))

log("--------------------------------------------");

let arr = ['apple', 'orange', 'mango']
for(let i = 0; i < arr.length; i++){
    console.log("This is from for loop : " +i)
}

var descArr = [];
let arr1 = ['apple,kalil', 'orange', 'mango', 'fruit']

for(var i = 0; i < arr1.length; i++){
    descArr = arr1[i].split(',');
    console.log(descArr)
}

