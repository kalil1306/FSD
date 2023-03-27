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

---------------------------------------------
Promise.all() :::

Promise.all() you can all the promises as a array and thrn you can use it as ".then" or
".catch".
Note :: If you want to see all the answers then all the promises must be an resolved param
If anyone is reject then it will only print the rejected one from promise

Example :

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        log("Promise 1 is called");
        resolve("Rejected your promise 1");
        //reject("Rejected your promise 1");
    }, 3000)
})

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        log("Promise 2 is called");
        resolve(23)
    }, 5000)
})

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        log("Promise 3 is called");
        resolve(876)
    }, 7000)
})

Promise.all([promise1, promise2, promise3])
.then((value)=>{
    log(`The value from the promise is ::: ${value};`)
})
.catch((error)=>{
    log(`Error occured ${error}`)
})

o/p :
Promise 1 is called
Promise 2 is called
Promise 3 is called
The value from the promise is ::: Rejected your promise 1,23,876;
----------------------------------------------
Real time example - this need to to do in promise chaining


function getName(name){
    log(name)
}

function getAge(age){
    log(age)
}

function verifyNameAndAge(name, age){
    log(`Verify your name ::: ${name} and Age ::: ${age}`)
}
.............................
function getName(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(name.length == 0){
                reject("Please pass a valid name");
            } else {
                resolve(name)
            }
        }, 2000)
    })
}

function getAge(name){
    log(`Hi ${name}, please tell your age`)
}

function verifyNameAndAge(name, age){
    setTimeout(()=>{
        log(`Hi ${name} we get your age as ${age}`)
    }, 2000)
}

getName("Kalilur Rahman A R")
.then((res) => {
    log(`The name entered is ${res}`)
    return res; // in res = Kalilur Rahman A R
})
.then((resValue) => {
    getAge(resValue)
    return resValue; // resValue = Kalilur Rahman A R
})
.then((resData) => verifyNameAndAge(resData, 24))
.catch((err)=> log(`Invalid or empty name`))

o/p : 
The name entered is Kalilur Rahman A R
Hi Kalilur Rahman A R, please tell your age
Hi Kalilur Rahman A R we get your age as 24
---------------------------------------------------
//fetch data from the url

fetch("https://restcountries.com/v3.1/all")
.then((response)=> response.json()) // json will return a object
.then((data) => log(data))
.catch((err) => log(err))

o/p :
If the url is true then we can get all the data as json and that json will return 
it as returnable javascript object with the help of that and by chaining method 
you can see the data


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
    console.log("value-1 :::", val1); // why here console.log becaue our log message has 1 param
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

log("-----------------------------------------------")

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        log("Promise 1 is called");
        resolve("Rejected your promise 1");
        //reject("Rejected your promise 1");
    }, 3000)
})

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        log("Promise 2 is called");
        resolve(23)
    }, 5000)
})

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        log("Promise 3 is called");
        resolve(876)
    }, 7000)
})

Promise.all([promise1, promise2, promise3])
.then((value)=>{
    log(`The value from the promise is ::: ${value};`)
})
.catch((error)=>{
    log(`Error occured ${error}`)
})

/*
Real time example - this need to to do in promise chaining


function getName(name){
    log(name)
}

function getAge(age){
    log(age)
}

function verifyNameAndAge(name, age){
    log(`Verify your name ::: ${name} and Age ::: ${age}`)
}

*/
function getName(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(name.length == 0){
                reject("Please pass a valid name");
            } else {
                resolve(name)
            }
        }, 2000)
    })
}

function getAge(name){
    log(`Hi ${name}, please tell your age`)
}

function verifyNameAndAge(name, age){
    setTimeout(()=>{
        log(`Hi ${name} we get your age as ${age}`)
    }, 2000)
}

getName("Kalilur Rahman A R")
.then((res) => {
    log(`The name entered is ${res}`)
    return res; // in res = Kalilur Rahman A R
})
.then((resValue) => {
    getAge(resValue)
    return resValue;
})
.then((resData) => verifyNameAndAge(resData, 24))
.catch((err)=> log(`Invalid or empty name`))

//fetch data from the url

fetch("https://restcountries.com/v3.1/all")
.then((response)=> response.json()) // json will return a object
.then((data) => {
    log(data)
    data.forEach((ele) =>{

        const createCountryObj = {
            ...ele,
            name : ele.name.common,
            flags : ele.flags.png,
            population : ele.population,
            region : ele.region,
            capital : ele.capital
        }
        createCountries(createCountryObj)
    })

})
.catch((err) => log(err))

function createCountries({name, flags, population, region, capital}){
    document.body.innerHTML += `
    <div class="container">
    <img src="${flags}" alt="${name}" class="flag"/>
    <div class="info">
    <h2>${name}</h2>
    <p> <span> Population : "${population}" </span></p>
    <p><span>Region : ${region} </span></p>
    <p><span>Capital : ${capital} </span></p>
    </div>
    </div>
    `
}

/*

The above program is fetching the existing restcountries and that response is 
converted into json object, so that it will return as js object from that json
obj we can fetch the value from those obj, but we can able to see it on UI page
so creating a function "createCountries" you can create a innerHTML see the 
above example into a structured container and then these function need to call
in promise chaining you can desconstruct the obj ana pass it to the UI function

*/