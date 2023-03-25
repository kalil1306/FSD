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

// let clickCounter = 0;

// function clickEvent(){
//     clickCounter++;
//     log(`You have clicked the ${clickCounter} times.`)
// }
// clickEvent();



let clk_btn = document.querySelector("#event-click");

function clickedBtn(){ //--> function name should be verbal action
    console.log("Clicked the button!!");
    //o/p : 6 Clicked the button!!
}

//add event setup syntax......
// Object.addEventListener("click", ()=>{


// })


// Add event listener --> is JS method you can use it to call from html and use this 
//below method it is very sismlar to onclick tag in HTML code

let addEvent_btn = document.querySelector("#add-event");
// console.log(addEvent_btn);

addEvent_btn.addEventListener("click", ()=>{
    // console.log("Add Event button clicked")
    // o/p : (6) times Add Event button clicked
    const result = input_box.value;
    formElement.textContent = eval(result)

    // console.log(name)
})



/*
wherver in the window is clicked it will get counted or captured in the console
because window is a object

window.addEventListener("click", ()=>{
    console.log("Window is clicked");
    // o/ p: window is clicked
})
--------------------------------------
Essential 4 events : Its a very important event that could be very important in industries
----- Window events -----
1. scroll : whenever you scroll a bit it will count

let windowCount = 0;
window.addEventListener("scroll", ()=>{
    windowCount++;
    console.log(`Hey There, I scrolled ${windowCount}`)
})
o/p : Hey There, I scrolled 17 --> based on the scroll it will count
...........................................
2. resize : the below code will measure the width and height of the window
note : event.target.innerWidth - its the way to measure to width and for height change as
"InnerHeight".

let demo_result = document.querySelector("#res-content")

window.addEventListener("resize", (event)=>{
    demo_result.textContent = (`The width of the screen ${event.target.innerWidth}; and
    The height is ${event.target.innerHeight};`)
})
o/p : The width of the screen 461; and
    The height is 815;
....................................................
----- form events ----
1. focus
2. blur
3. change
..........................................................
4. input : getting input to the console

let inputArea = document.createElement("textarea");
inputArea.setAttribute("id", "mes-area");

inputArea.style.width = "300px";
inputArea.style.height = "200px";

let name;
inputArea.addEventListener("input", (event)=>{
    name = event.target.value;
})

document.body.append(inputArea); --> it will append it on the place
o/p : In the particular area if you enter some text, when the button is clicked it will
display in the console.
eg.., kalil was a good boy
--------------- or ------------------------
Validating the input area should not exceed the char more than 100 letters

Eg..,
let inputArea = document.createElement("textarea");
inputArea.setAttribute("id", "mes-area");

let validationString = document.createElement("div");
validationString.setAttribute("id", "message-validate");

inputArea.style.width = "300px";
inputArea.style.height = "200px";
let maximumChar = 100;

inputArea.addEventListener("input", ()=>{
    const remainingAllowedChar = maximumChar - inputArea.value.length;
    console.log(remainingAllowedChar);
    const styleColor = remainingAllowedChar < 20 ? "red" : "green";
    validationString.textContent = `Remaining allowed char is ${remainingAllowedChar}`
    validationString.style.color = styleColor;
    if(remainingAllowedChar == 0){
        alert("Hey You already exceeded the character");
    }
})

document.body.append(inputArea, validationString);

o/p : remaining allowed char is 94
......................................................
5. submit - It will use to submit particular text and print it on the document/window
understand the below code.

Note : 
event.preventDefault() --> this will stop refreshing the page, because when you click
on the window it will reload again and again, so you cannot capture it on the console
or the window, that's why you need use this event function.
Eg..,
const formElement = document.createElement("div");
let select_form = document.getElementById("form-id");

select_form.addEventListener("submit", (event)=>{
    event.preventDefault(); // stop refreshing the page, it will prevent the refreshing form
    formElement.textContent = inputArea.value;
    console.log("Submitted")
})

*** Always append it on the document body to reflect

document.body.append(inputArea, validationString, formElement);
o/p : Hi Iam Kalil --> This will printed in window after hitting submit button
.......................................................
6. click
----- key board events ----
1. keydown
2. keypress
3. keyup
----- Mouse events ---
1. mousedown
Eg..,
window.addEventListener("mousedown", ()=>{
    document.body.style.background = "green"
})
o/p : Whenyou click on the event it will change the color
.....................................
2. mouseup
Eg..,
window.addEventListener("mouseup", ()=>{
    document.body.style.background = "coral"
})

o/p : It will change the bg color when you click on the window
..............................................
3. mousemove :: whenever you click the screen it can fetch the co-ordinates, see the
below code
Eg..,
window.addEventListener("mousemove", (e)=>{
    demo_result.textContent = `
    The X Co-ordinates : ${e.clientX},
    The Y Co-ordinates : ${e.clientY}`
})
o/p : 
The X Co-ordinates : 261,
The Y Co-ordinates : 333
..................................................
4. mouseout
Eg..,
window.addEventListener("mouseout", ()=>{
    document.body.style.background = "pink"
})
o/p : After clicking any event and then it will change the color
--------------------------------------
calculator task: example

let addEvent_btn = document.querySelector("#add-event");
addEvent_btn.addEventListener("click", ()=>{
    const result = input_box.value;
    formElement.textContent = eval(result);
})


*/

let demo_result = document.querySelector("#res-content")

let windowCount = 0;
window.addEventListener("scroll", ()=>{
    windowCount++;
    console.log(`Hey There, I scrolled ${windowCount}`)
})


window.addEventListener("resize", (event)=>{
    demo_result.textContent = (`The width of the screen ${event.target.innerWidth}; and
    The height is ${event.target.innerHeight};`)
})

let inputArea = document.createElement("textarea");
inputArea.setAttribute("id", "mes-area");

let validationString = document.createElement("div");
validationString.setAttribute("id", "message-validate");

inputArea.style.width = "300px";
inputArea.style.height = "200px";
let maximumChar = 100;

inputArea.addEventListener("input", ()=>{
    const remainingAllowedChar = maximumChar - inputArea.value.length;
    console.log(remainingAllowedChar);
    const styleColor = remainingAllowedChar < 20 ? "red" : "green";
    validationString.textContent = `Remaining allowed char is ${remainingAllowedChar}`
    validationString.style.color = styleColor;
    if(remainingAllowedChar == 0){
        alert("Hey You already exceeded the character");
    }
    
})

//submit event


const formElement = document.createElement("div");
let select_form = document.getElementById("form-id");

select_form.addEventListener("submit", (event)=>{
    event.preventDefault(); // stop refreshing the page, it will prevent the refreshing form
    formElement.textContent = inputArea.value;
    console.log("Submitted")
})


let input_box = document.createElement("input");


//Mouse event

document.body.append(inputArea, validationString, formElement, input_box);