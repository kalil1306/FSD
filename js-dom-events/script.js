const log = (param) => console.log(param);

/*  
WOD : Window object document, window is global object bcoz if you see the window obj
the function "a" is inside the window object, because the window is the globally
not only the function all the var declaration and everything is present inside the 
window the object.

log(window);


function a(){
    log("kalil is here")
}
a();

o/p : 
kalil is here

to get the particular html tags:

log(window.document.querySelector("h1").textContent);
o/p :  JS Dom Events


alert function --> just gives a message it doesnt return anything

function alertFunc(message){
    alert(message);
}
alertFunc("Hello there!!!, Welcome to JS-DOM Events:::This is Alert Function");

prompt function --> this will return something or else you can give the default
value by inside the prompt can give as the second paramters.

const name = prompt("Hey Tell me your name ?", "Kalil");
log(name);
alertFunc(`Hi ${name}... Hurray!!!!`);

Confirm () --> returns only the boolean value

let response = confirm("Are you interested ?");
log(response)
o/p : True / False


*/

let promptElement = document.querySelector('#prompt-element');

function alertFunc(message){
    alert(message);
}
//alertFunc("Hello there!!!, Welcome to JS-DOM Events:::This is Alert Function");


function promptFunc(){
    const names = prompt("Hey Tell me your name ?", "Default");
    promptElement.textContent = `Your name is ${names}`
}





function confirmFunc(){
    let response = confirm("Are you intrested?") // returns a true or false
    log(response)
    promptElement.textContent = ` Your response is ${response}`
}




//accessing the time element for html tags

let responseEle = document.querySelector("#time-element");

//set timeout --> setTimeout(function, millisec) ::: first it will run all the var
//declarations then only setTimeout() will starts work, because setTimeOut() will have
//the seperate stack, because it will works on event loop
log(1);
function sayMyName(){
    log('kalil');
}
//sayMyName();

//setTimeout(sayMyName, 5000);

setTimeout(()=>log(2), 5000);
log(3);
log('-----------------------------------------------------')

let count = 0;
function countDown(){
    responseEle.textContent = count; // 0
    count++;
    const id = setTimeout(countDown, 1000);
    if(count == 11){
        clearTimeout(id);
        responseEle.textContent = "Hey You are a fool !!!!" // this statement will work
    }

}

// countDown();

log('-----------------------------------')

//setInterval --> each series of count do with some interval set of time for example.
// to print the each second 

let responseIntervalEle = document.querySelector("#interval-element");

let timeStart = 10;
function intervalFunc(){
    let intervalid = setInterval(()=>{
        responseIntervalEle.textContent = timeStart;
        timeStart --;
        if(timeStart == 0){
            clearInterval(intervalid);
            responseIntervalEle.textContent = "Hey you Fool are again..!!!!"
        }
    }, 1500)
}

// intervalFunc();

//Events

let clickCounter = 0;

function clickEvent(){
    clickCounter++;
    log(`You have clicked the ${clickCounter} times.`)
}
clickEvent();