/*
If there is 2 chaining in promises no problem but incase if its 10 to 15 chaining in
promise then you cannot take away the return values from the chaining it will get 
complicated.

problem/issue : 
In case if it is one promise and chaining with it on another function it works fine,
but if its 2 seperate new promises and the first promise function doesnt return anything
how to chain it to second promise -- this is the issue

In simple : internally you can chain it but if you go to external promises/new promise
then you cannot chain it.

process of function : 


*/


function insertCard(cardDigits){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(cardDigits.length < 5){
                reject("Invalid Card");
            } else if(cardDigits.length < 7){
                console.log("Inserted a valid card");
                resolve("Savings card");
            } else {
                console.log("Inserted a valid card");
                resolve("Current account");
            }
        }, 2000)
    })
}


function selectAccount(cardType){
    console.log(`${cardType} is selected`);
}

function selectOptions(option){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(option == "withdraw"){
                resolve("Withdraw successfully");
                console.log(`You selected ${option}`);
            } else if(option == "debit"){
                console.log(`You selected ${option}`);
                resolve("Debitted successfully");
            } else {
                reject("Please select either debit or withdraw");
            }
        }, 3000)
    })
}

function enterSecurityPin(option_select){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(option_select == "withdraw"){
                resolve("Enter security pin to withdraw cash");
            } else if (option_select == "debit"){
                resolve("Enter security pin to debit cash");
            } else {
                reject("Oooooppsss.......Error Occured!!!!!!")
            }
        }, 6000)
    })
}

function greetings(choosed){
    console.log(choosed);
    setTimeout(()=>{
        console.log("Thanks for choosing our bank ::)")
    }, 8000)
    
}



/*
Asynch and await :
step 1 : use asynch before a function
step 2 : use await where you wanted to exist
step 3 : use a variable to to capture the return value

first it will asynch the function and then it await the function and can use it 
anywhere you want

error handling in asynch and await use :
try {

} catch (error){

}
this try catch will store all the rejected value as error and it will exceute in the
catch statement

*/

async function operate_bank_details(cardNumber, options){
/*
promise way ::: 

    insertCard(cardNumber)
    .then((res)=>{
        console.log(`card validated successfully`);
        return res;
    })
    .then((data)=>{
        selectAccount(data)
    })
    .then(()=>{
        const data = selectOptions(options);
        console.log(data);
    })
    .catch((err)=>{
        console.log(err)
    })
*/
    try{
        const cardType = await insertCard(cardNumber);
        selectAccount(cardType);
        const optionSelected = await selectOptions(options);
        const choosed = await enterSecurityPin(options);
        greetings(choosed);
    } catch(error){
        console.log(error);
    }

}

//operate_bank_details("12345787", "debit");


async function fetchData(){
    try{

        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();
        console.log(data)
        
        if(data.message){
            document.body.innerHTML += `<h1> ${data.message} </h1>`
            document.body.style.color = "crimson";
            
            document.body.innerHTML += `<h1>Error Occured ::)</h1>`
        }
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

    } catch(error){
        console.log(error);
        

    }
}
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

fetchData();


