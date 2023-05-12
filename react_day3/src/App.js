/*
the above array is need to map in to a <li> tag
eg.., <li>Kalilur Rahman : Servicenow Developer'</li> like this
map will usually return as array

so below listitem variable will try to map from the people(arrayList) using the callback 
function it will return the list tag whenever it hit the list of people

note : 
Generally map function will return 3 parameters

function App() {

  const people = [
    'Kalilur Rahman : Servicenow Developer',
    'Kasheef Basha : Manual tester',
    'Mohammed Abdus Salam : physicist',
    'Mohammed Ali : chemist',
    'Subramanyhan chandrasekar : astrophysicist'
 ];


 function createList(person){
  return <li>{ person }</li>;
 }



 let listItems = people.map(createList);
 console.log(listItems)

  return (
    <ul>
      {people.map((person) => <li>{person}</li>)} --> it gives the same result}
      {listItems}
    </ul>
  );
}

export default App;

o/p : 

Kalilur Rahman : Servicenow Developer
Kasheef Basha : Manual tester
Mohammed Abdus Salam : physicist
Mohammed Ali : chemist
Subramanyhan chandrasekar : astrophysicist

---------------------------------------------------------

rfce - shortcut key to bring up this code :
import React from 'react'

function App() {
  return (
    <div>App</div>
  )
}

export default App


 */

/*

Topic : Working with keys using filter and map :

import React from "react";

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];
//let filter only the chemist by using the arrow function
let chemist = people.filter((person) => {
  if (person.profession == "chemist") {
    return true;
  }
  return false;
});

let listItems = chemist.map((person) => {
  return (
    <li key={person.id}>
      <p>
        <img
          src={"https://i.imgur.com/" + person.imageId + "s.jpg"}
          alt={person.name}
        />
        <b>{person.name}:</b>
        {" " + person.profession + " "} known for
        {" " + person.accomplishment}
      </p>
    </li>
  );
});

function App() {
  return <ul style={{ listStyleType: "none" }}>{listItems}</ul>;
  // listStyleType : 'none' - it means it will remove the bullet points in the list
}

export default App;

o/p : stored in D/FSD_Guvi/Test folder/react_day3-keys


*/

/*
Topic : 
condition rendering : it will render the if, if else, logical operator, ternary operator
to be used and what it needs to be return when it is true or false.

below code shows if the packed is true then it will be checked at the end of the 
list and this is the way need to check the checklist.

In the below example can see, inside the App function can declare the seperate variable
to store the data and then it can be called inside the return value, this is the one way
and the second way declaration will be without variable

Example : 

import React from "react";

function Item(props) {
  //This will give the same output
  // if (props.isPacked) {
  //   return <li>{props.name} 🗸</li>;
  // } else {
  //   return <li>{props.name} </li>;
  // }

  //o/p :
  // Sally Ride's Packing list
  //• Space Suit 🗸
  //• Helmet with golden heart 🗸
  //• photo of tam 🗸

  //this will also give the same output :

  // return (
  //   <li>
  //     {props.isPacked ? props.name + "🗸" : props.name}
  //   </li>
  // );

  //o/p :
  // Sally Ride's Packing list
  //• Space Suit 🗸
  //• Helmet with golden heart 🗸
  //• photo of tam 🗸

  // return (
  //   <li>
  //     {props.isPacked ? (
  //       <del>
  //         {props.name + '🗸'}
  //       </del>
  //     ) : (
  //       props.name
  //     )}
  //   </li>
  // )

  // The output will be the same but it will overlapped with line

  // Sally Ride's Packing list
  //• Space Suit 🗸
  //• Helmet with golden heart 🗸
  //• photo of tam 🗸


  //Note : even you can give the multiple condition by using (props.isPacked && props.isPacked)

  // return (
  //   <li>
  //     {props.name} {props.isPacked && '🗸'}
  //   </li>
  // )

  //o/p :

  // Sally Ride's Packing list
  //• Space Suit 🗸
  //• Helmet with golden heart 🗸
  //• photo of tam 🗸

  let itemContent = props.name;
  if (props.isPacked) {
    itemContent = props.name + '🗸';
  }
  return(
    <li>
      {itemContent}
    </li>
  );

  //o/p :

  // Sally Ride's Packing list
  //• Space Suit 🗸
  //• Helmet with golden heart 🗸
  //• photo of tam 🗸
  
}


function App() {
  const data = [
    {
      isPacked: true,
      name: "Space suit",
    },
    {
      isPacked: true,
      name: "Helmet with golden leaf",
    },
    {
      isPacked: false,
      name: "Photo of Tam",
    },
  ];

  return (
    <section>
      <h1>Sally Ride's Packing list</h1>
      <ul>
        <Item isPacked={data[0].isPacked} name={data[0].name} />
        <Item isPacked={true} name="Helmet with golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

export default App;
// 🗸

*/

/*
Handling events : 

Example :

import React from "react";

function Button({message, Children}) {
  return (
    <button onClick={() => console.log(message)}>
      {Children}
    </button>
  );
}

function App() {
  // function handleClick(){
  //   console.log('clicked Button');
  // }

  // return (
  //   // <button onClick={() => console.log('clicked')}>
  //   //   Click Me!!!
  //   // </button>

  //   <button onClick={handleClick}>
  //     Click Me!
  //   </button>
  // )

  return (
    <div>
      <Button message="Playing">Play Movie</Button>
      <Button message="Uploading">Upload Image</Button>
      <Button message="Streaming">Stream a Video</Button>
    </div>
  );
  
  //o/p: 
  // whenever clicking the 3 buttons it will print the message like uploading, streaming
  // and playing
}

export default App;

-------------------------------------------

import React from 'react'

function ParentComponent(props){
  return (
    <div>
      {props.children}
    </div>
  )
}

function App() {
  return (
    <ParentComponent>
      <p>Hello world!!</p>
    </ParentComponent>
  )
}

export default App

o/p : Hello world


*/





//Passing event handlers as props :

// import React from 'react'

// function Button({children, onSmashed}) {
//   return (
//     <button onClick={onSmashed}>
//         {children}
//     </button>
//   )
// }


// function App() {

// function handleClick(){
//   console.log('smashed');
// }

//   //
//   return (
//     <Button onSmashed= {handleClick}>
//       Playing Movie
//     </Button>
//   )
// }

// export default App


/*
This example for event.Propagation() : 


the below code will check only with event it means if you click the div it will alert 
only for div but if you click button it will alert button and as well as div to stop this 
you need to pass the parameter 'event' and need to use event.Propagation()


import React from 'react'

function App() {
  return (
    <div onClick = {(event) => {
      event.stopPropagation();
      alert('Div clicked');
    }}
    style={{background: 'lightgray', border : '1px solid black', width : '550px', height : '200px'}}>
        <button onClick={(event) => {
          event.stopPropagation();
          alert('Button clicked')
          }}>
          Play Movie
        </button>
    </div>
  )
}

export default App
*/

import React from 'react'

function App() {
  console.log('loaded');
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      alert('form submitted');
    }}>
      <input placeholder='type something here...' />
      <button>
        Send
      </button>
    </form>
  )
}

export default App;