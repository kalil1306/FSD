const listArr = ["fruits", "veges", "drinks", "cosmetics"]
console.log(...listArr)

function listOne(arg1, arg3,...arg2){
    console.log(arg1, arg3,arg2);
}

listOne("arg1", "veg1", "veg2", "veg3", "veg4")