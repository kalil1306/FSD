/*
Java script is means as ECMA script

difference between ES5 and ES6 :

ES5 - var, function
ES6 - let, const, arrow function, anonomous function, object and array destructure
    template literals, spread and rest operator, Map, Reduce and filter function,
    Import and export function


diff between var, let and const :
when you hoist the different kind of declaration, you can see the difference

Not possible :
const a = 20;
const a = 20;

const a = 20;
a = 20;

possible :
var a = 23;
var a = 67;

not possible:
let a = 45;
let a = 45;

possible:
let a = 45;
a = 89;

Hoisting :
It is hoisted, but its undefined

console.log(a)
var a = 78;

let and const : It is also hoisted inside the lexical hoisting

console.log(a)
let a = 78;

example : 
window : {
    a : "undefined",
    lexicalScope : {
        a : "undefined"
    }
}

Note : Window is global scope

var a = 78;
console.log(window.a) --> here the window is global scope, whereas the let and const are the
lexical scope meaning nested object(object inside the object)
---------------------------------------
This - keyword : this will refer to its immediate parent 

console.log(window) --> its refer to window object
console.log(this) --> this means it parent object which means window

const studentObj = {
    name : 'Kalil',
    batch : 'B43',
    getName(){
        console.log(this.name)
    },
    getBatch(){
        console.log(this.batch)
    }
}

console.log(studentObj.batch) --> B43 , by dot walking
studentObj.getBatch() --> B43 , by this keyword 

Example 2 :

const personObj = {
    name : 'Kalilur Rahman',
    age  : 24,
    profession : 'Software Engineer',
    getDetails() {
        console.log(`Iam ${this.name}, and my age is ${this.age}
        I will be working as a ${this.profession}`) --> this is template literals
    }
}

personObj.getDetails()
o/p :
Iam Kalilur Rahman, and my age is 24
I will be working as a Software Engineer

-----------------------------------------------
function normalFunction(){
    console.log('This is Normal function')
}
normalFunction();


arrowFunc() --> caught ReferenceError: Cannot access 'arrowFunc' before initialization
Note : arrow function : it acts as a variable
const arrowFunc = () => console.log("This is arrow function")
arrowFunc()

....................

function normalFunction(num){
    //console.log('This is Normal function')
    return num * num;
}
const sqr = normalFunction(34);
console.log('Normal function sq number : ', sqr)


const arrowFunc = (num) => num * num  --> dont need to return it explicitly
const arrowSqr = arrowFunc(56);
console.log('The sqr from arrow function :', arrowSqr)

......................................................

Normal function differences in argurements :
Note : with the help of arguements in the normal function, you can pass n number of arguements
and then call it like arguements[i], like an array you can call the arguements

function funcWithArguement(){
    console.log(arguments[4] * arguments[5]);
}

funcWithArguement(1,2,3,4,5,6,7,8)
o/p : 30

-----------------------------------------------------
Spread and rest operators:

spread : spreading the value in one container.

let fruits = ['apple', 'orange', 'banana'];
let veges = ['tomato', 'brinjal', 'onion']

let fridgeTray = ['Ice watter bottel', ...fruits, ...veges] --> this is spread operator

console.log(fridgeTray)
o/p : ['Ice watter bottel', 'apple', 'orange', 'banana', 'tomato', 'brinjal', 'onion']
................................

Spread in Obj : 

const age = {
    age : 25
}

const name = {
    name : 'Kalil'
}

const details = {name, ...age}
console.log(details)

o/p : 
{name: {…}, age: 25}
..............................

Rest opertor : 
let fruits = ['apple', 'orange', 'banana'];
let veges = ['tomato', 'brinjal', 'onion']

let fridgeTray = ['Ice watter bottel', ...fruits, ...veges]

let[first, second, ...rest] = fridgeTray
console.log(first) o/p : Ice watter bottel
console.log(second) o/p : apple
console.log(rest) o/p : ['orange', 'banana', 'tomato', 'brinjal', 'onion']
---------------------------------------------

Destructuring :
Object :

const guviBootCamp = {
    frontend : 'React',
    database : 'mongodb',
    backend : 'nodejs',
    server : 'express'
}

console.log(guviBootCamp.frontend)
o/p : React

//destructure

const {frontend, database, backend, server} = guviBootCamp

console.log('Frontend :', frontend)  o/p : Frontend : React
console.log('database :', database)  o/p : database : mongodb
console.log('backend :', backend)  o/p : backend : nodejs
console.log('server :', server)  o/p : server : express

//giving alias name :
const {backend : course} = guviBootCamp;
console.log(course) o/p : nodejs

//you dont need to destructure every time once it is destructured

function getFrontendDetails(course){
    console.log(course)
}

getFrontendDetails(frontend) // this is because i already did destructure
o/p : React
.................................................

Array destructure : 

const peopleArr = ['kalil', 'Sanjay', 'Kasheef']

const [stu1, stu2, stu3] = peopleArr;

//before destructing
console.log(peopleArr[0])  o/p : kalil
console.log(peopleArr[1])  o/p : Sanjay

//After destructing :
console.log(stu1)  o/p : kalil
console.log(stu2)  o/p : Sanjay
------------------------------------------------

property shorthand : If the key and value naming declaration is same then you can
give as like below

const name = 'kalil';
const age = 45;

const stuDetails = {
    name,
    age
}

console.log(stuDetails)
o/p : {name: 'kalil', age: 45}

-----------------------------------------------
const name = 'kalil';
const age = 45;

const stuDetails = {
    name,
    age
}

console.log(stuDetails)


await resolveAfter2Seconds(x) { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
   
  async function f1() {
    var x =  await resolveAfter2Seconds(10);
    console.log(x);
  }
   
  f1();

*/

var data = {
    "stla_parameters":{
        "application_id":"7261",
        "application_name":"8",
        "environment":"dev",
        "stla_region":"EE"
    },
    "account_access":{
        "view":"8.ro",
        "standard":"8.rw",
        "manager":"8.manager"
    },
        "aws_parameters":{
            "aws_region":"eu-west-1",
            "aws_azs":2,
            "network_model":"standalone"
        },
        "drive_it_parameters":{
            "ticket_identifier":"TASK6299410",
            "requester":{
                "tid":"T6704RK",
                "first_name":"KALILUR",
                "last_name":"RAHMAN A R"
            }
        },
        "request_type":"general"
    };

console.log("The data is :", data);

console.log("The data is :", data.stla_parameters.application_name);

var stringify_result = JSON.stringify(data); // takes js object and transform it into a JSON string
console.log("Converts as a JSON String(stringify) :",stringify_result); //

let escaped_string = escape()

let encoded = encodeURIComponent(stringify_result);
console.log('encoded : ', encoded); // instead of use escaped string

var parse_result = JSON.parse(stringify_result); // takes json string and transform it to an javascript object
console.log("Converts as a Javascript object :",parse_result)

for (obj in parse_result){
    var values = parse_result[obj];
    for(obj2 in values){
        console.log(obj2 + ' : ' + values[obj2])
       // console.log('----------------------------------')
    }
    // console.log(obj + ' : ' + parse_result[obj])
}

//now try to do the loop in this after your breakfast



