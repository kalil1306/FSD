const log = (param) => console.log(param);

/*
Async programming - callback ::

Callback
What's the callback?
Use & its purpose of the callback
Pain of callback
.....................................
log(1);
setTimeout(()=>log(2), 3000); // it will print after 3 seconds, so js wont wait for this line
log(3);

o/p : 
1
3
2
................
synchronous - line by line it will excute the seris of code it wont care about anything
Asynchronous - if any delay/waiting of line it will stop the executing series of code
untill the delayed code is executed, then it will proceed.

2 tyes of functions

1. Invoking/Handler - based on the trigger, this function is going to trigger
(see the below example for setTimeout(function))
2. Call - wherever we wnat to call the function we can call it

Callback function :

Scenario : Consider there are 5 steps, and s2 and s3 need to wait for 2 sec and 
3 sec, see the below example, if s2 needs to wait for 2sec/2000ms you need to do
an callback on s1 in function parameters and use setTimeout function in s1 itself
simulataneously you want to do for all other steps you need to do an callback.

callback keyword is generic but inplace of callback, you can write it whatever
you want.

Callback hell ::: If any problem occurs in the function its not an easy to debugg
this callback code, if it smaller scale callback is good but if it goes to larger
scale then callback is hell, because if any problem occurs in any function you
cannot handle it bcoz you dont know which function is culprit here

This the exact task for the callback function like the same we need to do
*/



function insertCard(callback){ //this callback param is selectAccount function
    log("Step 1 ::: Insert your card!!!");
    setTimeout(callback, 2000)
}

//calling a function into other function as a parameter

function selectAccount(callback){
    log("Step 2 ::: Selected saving account");
    callback();
   
}

function selectOption(callback){
    log("Step 3 ::: Selected the withdraw option");
    setTimeout(callback, 3000)
}

function enterSecurityPin(callback){
    log("Step 4 ::: Entered the security pin");
    setTimeout(callback, 3500)
}

function collectTheCash(){
    log("Step 5 ::: Collected the cash amount")
}

function withdrawCashFromBank(){
    insertCard(()=>{
        selectAccount(()=>{
            selectOption(()=>{
                enterSecurityPin(()=>{
                    collectTheCash()
                })
            });
        });
    });
    
    // selectOption();
    // setTimeout(selectOption, 2500);
    /*
    In selectoption function there is no param, so we can call
    directly incase if param is present then need to use () after the function name
    */
    // enterSecurityPin();
    // collectTheCash();
}

withdrawCashFromBank();