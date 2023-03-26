const log = (param) => console.log(param);

/*
Async programming- Day -2 : Promise

Contents:
Promise
 - What is promise?
 - Promise States
 - Promise chain
 - promise.all()
 - Use of fetch() & then()

Session Practice task in rest countries API:
https://restcountries.eu/
......................................................
Promises - will always return something that says a resolve or reject
In the below example, 
Genrally promise has 2 param (resolve, reject) => based on the condition it passed or failed
you can return the resolve param or reject param and can set the timeout inside the promises
by arrow function.


In Promises usually can code with 2 cases:
1. Producer -> it has resolve and reject.
syntax ::: let promise = new Promise((resolve, reject) => {setTimeout(()=>param, seconds)})
2. Consumer -> based on the result from producer, need to call/return in the consumer
If the result is resolve/success use "promise(varName).then"
If the result is reject/failure use ".catch" 

***Refer the below syntax/code

code :

let taskCompletionRate = 98;
log("----- Execution started -----")

//producer of a promises 

let taskAchieved = new Promise(
    (resolve, reject) =>{
        setTimeout(()=>{
            if(taskCompletionRate >= 80){
                resolve("Your work is appreciated");
            } else {
                reject("Thanks for your work but you failed!!!!")
            }
        }, 3000)
    }
)

//consumer

taskAchieved
.then((returnValue)=>{
    log(returnValue);
})
.catch((error)=>{
    log(error)
})

setTimeout(()=>log("End of Session!!!"), 4000)

o/p : 
----- Execution started -----
Your work is appreciated
End of Session!!!
-----------------------------------------------------------------

Chaining promises : if the value is get from the producer, with that returned success
value from the producer, you can return it and chain it to other chaining value with
the help of ".then"

let chainPromise = new Promise(
    (resolve)=>{
        setTimeout(()=>{
            resolve(30)
        }, 1300)
    }
)

chainPromise
.then((val1)=>{
    console.log("value-1 :::", val1);
    return val1 * 2;
})
.then((val2)=>{
    log(`Value-2 ::: ${val2}`)
    return val2 + 50;
})
.then((val3)=>{
    log(`Value-3 ::: ${val3}`)
    return val3 + 50;
})

o/p : 

value-1 ::: 30
Value-2 ::: 60
Value-3 ::: 110

*/

let taskCompletionRate = 98;
log("----- Execution started -----")

//producer of a promises 

let taskAchieved = new Promise(
    (resolve, reject) =>{
        setTimeout(()=>{
            if(taskCompletionRate >= 80){
                resolve("Your work is appreciated");
            } else {
                reject("Thanks for your work but you failed!!!!")
            }
        }, 3000)
    }
)

//consumer

taskAchieved
.then((returnValue)=>{
    log(returnValue);
})
.catch((error)=>{
    log(error)
})

setTimeout(()=>log("End of Session!!!"), 4000)

log("------------------------------------------------------")


let chainPromise = new Promise(
    (resolve)=>{
        setTimeout(()=>{
            resolve(30)
        }, 1300)
    }
)

chainPromise
.then((val1)=>{
    console.log("value-1 :::", val1);
    return val1 * 2;
})
.then((val2)=>{
    log(`Value-2 ::: ${val2}`)
    return val2 + 50;
})
.then((val3)=>{
    log(`Value-3 ::: ${val3}`)
    return val3 + 50;
})

//upto 1:25 hr done