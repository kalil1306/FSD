document.addEventListener("DOMContentLoaded", ()=>{

console.log("CRUD is started");

const studentList = document.querySelector("#student-list");
const studentForm = document.querySelector(".add-student-form");
const addBtn = document.querySelector("#new-stu-btn");
let addStudent = false;

let API = "https://64291bb45a40b82da4cccad3.mockapi.io/kcl_students";
console.log(API)

/*
CRUD : (all big application like whatsapp, insta, twitter)
can see all the updated data, created data, read data and delete data
C - Create
R - Read
U - Update
D - Delete

For all the operations there is syntax for all the methods, need to remember the 
all the syntax

to read the data use - "GET"
to create the data use - "POST"
for update = "PUT"




*/

function readAllData(){
    fetch(API, {
        method : "GET"
    })
    .then((response) => response.json())
    .then((data)=>renderAllStudent(data)) // it will do the forEach into the object
    .catch((err)=>console.log(err))
}

readAllData();

/*
o/p : 

[{"name":"kalil","batch":"B43WE","age":"24","id":"1"},
{"name":"kasheef","batch":"B43WE","age":"21","id":"2"},
{"name":"kareem","batch":"B43WE","age":"26","id":"3"},
{"name":"mafaaz","batch":"B43WE","age":"11","id":"4"},
{"name":"khalidh","batch":"B43WE","age":"1","id":"5"},
{"name":"sadaam","batch":"B43WE","age":"23","id":"6"},
{"name":"Zaynab","batch":"B43WE","age":"27","id":"7"},
{"name":"Imran","batch":"B44WE","age":24,"id":"8"},
{"name":"Imran-OA","batch":"B44WeekDay","age":24,"id":"9"}]
*/

let newStudentData = {
    name : "Abdullah",
    batch : "B44WE",
    age : 24
}

function createData(newStudentData){
    fetch(API, {
        method : "POST",
        body : JSON.stringify(newStudentData),
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        },
    })
    .then((response)=>response.json())
    .then((data)=>readerStudent(data))
    .catch((err)=>console.log(err))
}

//createData(newStudentData); 
/*
Note : whenever it is called it will insert the new data on the API
o/p : 

{"name":"Abdullah","batch":"B44WE","age":24,"id":"10"}

*/

function updateData(){
    let editStudentData = {
        name : "Imran-OA",
        batch : "B44WeekDay"
    }

    fetch(`${API}/9`,{ // in the place of id=9 it will change the data
        method : "PUT",
        body : JSON.stringify(editStudentData),
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

// updateData();
// o/p : {name: 'Imran-OA', batch: 'B44WeekDay', age: 24, id: '9'}

//delete operation

function deleteData(id, parent){
    fetch(`${API}/${id}`, {
        method : "DELETE",
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
    .then(()=>parent.remove())
    .catch((err)=>console.log(err))
}

// deleteData();
/*

o/p : 
Note : there is not necessary to call the body here
{"name":"Abdullah","batch":"B44WE","age":24,"id":"10"} - this data will no more 
available in the API

if you try to delete again the data which is already deleted data it will says
DELETE https://64291bb45a40b82da4cccad3.mockapi.io/kcl_students/10 404 (Not Found)
Not Found

*/

/*
How to do all these operations of CRUD in HTML as UI 

class name is very important for addevent listener because whenever the user
click the event it will shows what you have clicked in the div element
refer and understand the example

event.target.className --> this is for clicking event 


*/

addBtn.addEventListener("click", ()=>{
    addStudent = !addStudent;
    if(addStudent){
        studentForm.style.display = "block";
        addBtn.textContent = "Add and close";
    } else {
        studentForm.style.display = "none";
        addBtn.textContent = "Add student";
    }
})



function readerStudent(stud){
    const studentDiv = document.createElement("div");
    studentDiv.className = "card";
    studentDiv.innerHTML += `
    <h2>${stud.name}</h2>
    <p><span>Batch : </span>${stud.batch}</p>
    <p><span>Age : </span>${stud.age}</p>
    <button data-id = "${stud.id}" class ="del-btn">Delete</button>
    `;

    studentList.appendChild(studentDiv);
}

// to render all the student data

function renderAllStudent(arr_of_students){
    studentList.innerHTML = "";
    arr_of_students.forEach((student)=>{
        readerStudent(student); //then it will read each time from the readerStudent
    })

}


// this is for student list

studentList.addEventListener("click", (event)=>{
    event.preventDefault();
    // console.log(event.target.className)
    if(event.target.className == "del-btn"){ // wheen clicking this class
        // console.log("delete button is clicked")
        //this will give the object the below dataset
        // let dataset = event.target.dataset;
        // console.log(dataset)
        //id and parent will be called and passed as parameters in deleteData
        let id = event.target.dataset.id;
        let parent = event.target.parentNode;
        deleteData(id, parent); // from the deleteData function it will remove
/*
this below parent will give the whole html tag of the card, this is the syntax
event.target.parentNode;

let parent = event.target.parentNode;
console.log(parent)
parent.remove(); // it will remove the card in the UI level but if you do it refresh
again it will get reflected because you are not deleting in the API data

o/p :  please check the readerStudent function 

<div class="card">
    <h2>kalil</h2>
    <p><span>Batch : </span>B43WE</p>
    <p><span>Age : </span>24</p>
    <button data-id="1" class="del-btn">Delete</button>
    </div>

2:20:01

*/
        
    }
})

studentForm.addEventListener("click", (event)=>{
    event.preventDefault();
    // console.log(event)
    let name = document.getElementsByClassName("input-text")[0].value;
    let batch = document.getElementsByClassName("input-text")[1].value;
    let age = document.getElementsByClassName("input-text")[2].value;
    let data = {
        name : name,
        batch : batch,
        age : age
    }
    if(event.target.name === "submit"){
        if(name === "" || batch === "" || age === ""){
            alert("Please fill all the fields")
        }
        createData(data);
    }
})

readAllData();
})