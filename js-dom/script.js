/*
DOM - Document object model
console.log(window); --> document will be always present in window
window means its a global parent

creating an element :
let newElement = document.createElement("div");


inner text:
newElement.innerText = "Kalil company limited";
console.log(newElement);
o/p:
<div class="js-class1 js-class2" id="js-id1 js-id2">Kalil company limited</div>

Attributes to set in element:
can add multiple classes in one div:
newElement.setAttribute("class", "js-class1 js-class2")
newElement.setAttribute("id", "js-id1 js-id2")

getElementById : From index.Html you can get id by this method:
let inbuildElement = document.getElementById("id-1");
console.log(inbuildElement);
o/p : 
<div id="id-1">DOM Class</div>

getElementsByClassName : from index.html you can get many classes not one:
let inbuildElement2 = document.getElementsByClassName("dom-class2");
console.log(inbuildElement2);
o/p : 
HTMLCollection [div.dom-class2]
0: div.dom-class2
length: 1
[[Prototype]]: HTMLCollection

Accesing using a query selector :

If you want to get class "." and for id "#" in queryselector, it will only select the
top most one in the query selector, the below example has 4 div with same class,
but returns only one dive the top most one

can create a css styles too, see the below example :

let queryElement = document.querySelector(".query-class");
console.log(queryElement);
queryElement.style.color = "blue";
queryElement.innerText += ' Kalil-1'
o/p :
<div class="query-class" style="color: blue; background-color: grey;">Element - 1 Kalil-1</div>

QuerySelectorAll: 
will take/show all the layer in the same class name

let queryElementAll = document.querySelectorAll(".query-class");
console.log(queryElementAll);
o/p : 
NodeList(5) [div.query-class, div.query-class, div.query-class, div.query-class, 
    div.query-class]
0: div.query-class
1: div.query-class
2: div.query-class
3: div.query-class
4: div.query-class
length: 5
[[Prototype]]: NodeList

const colors = ["blue", "green", "yellow", "orange"];
for(let i = 0; i < queryElementAll.length; i++){
    queryElementAll[i].style.backgroundColor = "grey";
    queryElementAll[i].style.color = colors[i]; --> each and every loop it will assign color
    console.log(queryElementAll[i]);
}

o/p :
<div class="query-class" style="color: blue; background-color: grey;">Element - 1 Kalil-1</div>
<div class="query-class" style="background-color: grey; color: green;">Element - 2</div>
<div class="query-class" style="background-color: grey; color: yellow;">Element - 3</div>
<div class="query-class" style="background-color: grey;">Element - 5</div>

console.log("----------------------------------------------------");

innerHTML and innerText :

let newElement1 = document.createElement("div");
newElement1.innerHTML += `
<h1> Kalil is good boy </h1>
<p> Iam seated by Javascript DOM Manipulations </p>`

newElement1.textContent += "This is text content" --> this wont trim the space but it will
change everything instead of html text it will change as content eg.., html tags will no 
more useful
console.log(newElement1)

o/p : 
<div>
<h1> Kalil is good boy </h1>
<p> Iam seated by Javascript DOM Manipulations </p></div>
------------------------------------------------------------------------

console.log("------------------------------------------------");

const newDiv = document.createElement("div");
newDiv.setAttribute("id", "applied-div");
newDiv.textContent = `Hey I'm newly added div`;

appending child : It means appending the html tag inside already created html tag
newElement1.append(newDiv);
console.log(document.body);

o/p : 
<div>
<h1> Kalil is good boy </h1>
<p> Iam seated by Javascript DOM Manipulations</p>
<div id="applied-div">Hey I'm newly added div</div>
</div>
-----------------------------------------------------
*/
//If you want to get class "." and for id "#" in queryselector, it will only select the
//top most one in the query selector, the below example has 4 div with same class,
//but returns only one dive the top most one
let queryElement = document.querySelector(".query-class");
console.log(queryElement);
queryElement.style.color = "blue";
//o/p : <div class="query-class">Element - 1</div>
queryElement.innerText += ' Kalil-1'

//QuerySelectorAll - will take/show all the layer in the same class name
let queryElementAll = document.querySelectorAll(".query-class");
console.log(queryElementAll);



const colors = ["blue", "green", "yellow", "orange"];
for(let i = 0; i < queryElementAll.length; i++){
    queryElementAll[i].style.backgroundColor = "grey";
    queryElementAll[i].style.color = colors[i];
    console.log(queryElementAll[i]);
}

console.log("----------------------------------------------------");

let newElement1 = document.createElement("div");
newElement1.innerHTML += `
<h1> Kalil is good boy </h1>
<p> Iam seated by Javascript DOM Manipulations </p>`

// newElement1.textContent += "This is text content" --> this will change everything as 
//conten it will automatically trim the space and change all the tags as a content

console.log(newElement1)

//appending the content :

document.body.append(newElement1);
console.log("------------------------------------------------");

const newDiv = document.createElement("div");
newDiv.setAttribute("id", "applied-div");
newDiv.textContent = `Hey I'm newly added div`;

//appending child
newElement1.append(newDiv);
console.log(document.body);