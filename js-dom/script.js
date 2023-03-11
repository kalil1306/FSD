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


*/

