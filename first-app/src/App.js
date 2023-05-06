import React from 'react';
import './App.css';

/*
Topics : 
Once the node js installation is done.
In the command prompt type:
node -v

to install the npm : npm install npm@9.5.1 -g  --> it will install the particular version

This is the link for node js :
https://create-react-app.dev/docs/getting-started/

to move this directory to other directory : 
cd D:\FSD_Guvi\FSD -> this is the code for moving the directory from one to another

npx create-react-app my-app -> my-app is the name you can change it to whatever you want

code . -> it will open the vs code

In vs code :

In the App.js :
remove the header and first line so that the react page and its logo on the google chrome will get removed and a blank white page will
appear.

There is lot of frameworks like React, Angular, gatspy, next
React - Library(small amount of framework) which is created by facebook
Angular - google framework


How to start the React ?

Run `npm audit` for details.

Success! Created first-app at D:\FSD_Guvi\FSD\first-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd first-app
  npm start
...................................


Even you can pass arrays of objects inside the App() to pass for each and every data, 
to get different data or attributes with the help of map function, basically map
function it has 3 param, they are value, idx, actArr with the help of mapping it, 
it will loop through all the data is array of object.

In this map function it will throw an error, because whenever you render the many data
at a time it will throw an error like : 

"warning: Each child in a list should have a unique "key" prop."

Note : For this kind of error(actually it is not an error but it shows like an error),
you need to pass the key index like

key = {idx} -> need to pass inside the <Home2/>  --> see the example of Home2

*/

function App() { //start of the function in JSX should be capital it is functional component

  const name = 'Kalilur Rahman'
  //The below code its same like template literals
  const getName = () => {
    return 'Kasheef Basha'
  }

  const data = [
    {
      image : 'https://i.pinimg.com/736x/5a/0c/7b/5a0c7b76e2a8bcdbe571c5ba916f93fe.jpg',
      name : 'Kalil',
      batch : 'B43WE'
    },
    {
      image : 'https://i.pinimg.com/736x/5a/0c/7b/5a0c7b76e2a8bcdbe571c5ba916f93fe.jpg',
      name : 'Kareem',
      batch : 'B44WE'
    },
    {
      image : 'https://i.pinimg.com/736x/5a/0c/7b/5a0c7b76e2a8bcdbe571c5ba916f93fe.jpg',
      name : 'Kasheef',
      batch : 'B45WE'
    }
  ]

  return (
    <div className="App">
      <h3>Hello how are you? {name}</h3> 
      <h3>Hello how are you? {getName()}</h3> 
      <Home/>
      {/* <Test/> */}
      <Home/>
      {
        data.map((person, idx)=>(

          <Home2
          key = {idx}
          image = {person.image}
          name = {person.name}
          batch = {person.batch}
            />  
        ))
        }
    </div>
  );
}

export default App;

/*
JSX - Javascript xml notation - combination of html and JS is called JSX. In otherwords
Java script will return the html that is meant to ne Javascript XML notation.
It can be referred to functional component, it always should be declare with caps letter

Eg..,
function home(){
  return(
    <div>
      <h1>Hello how are you?</h1>
    </div>
  )
}

see the below function, Home it is declared and called into the another function with the
help of <Home/> tag - see the below and above functional components

Reusability of the components : 
when you declared the component in the main app then whenever you call it it will get displayed
number of times, based on the call, see the App JSX

you can directly declare the image,name and batch as well as the data you can parse it to
object, from the name of the object you can call it as 'name.key', see the below example
Home()

-------------------------------------------------------------
props - its an keyword, empty object (Home2)

In the Home2 we pass props as parameter, with that parameter we can define it the 
internal values with props.name, but if we want to call then this data should be present
inside the functional container. From that data, in the return function we need to
call the <Home2> and also pass the appropriate values in the name, batch and image
inside the <Home2 " attributes goes here ">, then it will reflect the same date.

Destructuring the props :

{name, batch} = props --> in the place of props you can place it "{name, batch}", 
it will get destructured

eg..,

function Home2({name, batch}){

  return(
    <div className='home-component'>
      <img 
      src= {props.image} 
      alt= {props.name}/>
      <h2>{props.name}</h2> 
      <h4>{props.batch}</h4>
    </div>
  )
}

*/

function Home(){
  const data = {
    image : 'https://i.pinimg.com/736x/5a/0c/7b/5a0c7b76e2a8bcdbe571c5ba916f93fe.jpg',
    name : 'Kalil',
    batch : 'B43WE'
  }
  return(
    <div className='home-component'>
      <img src='https://i.pinimg.com/736x/5a/0c/7b/5a0c7b76e2a8bcdbe571c5ba916f93fe.jpg' alt=''></img>
      <h2>{data.name}</h2> 
      <h4>B43WE</h4>
    </div>
  )
}

function Home2(props){

  return(
    <div className='home-component'>
      <img 
      src= {props.image} 
      alt= {props.name}/>
      <h2>{props.name}</h2> 
      <h4>{props.batch}</h4>
    </div>
  )
}


/*
How it is returning the element in the react?

If returning directly like the above example, that is correct, but behind the scenes
how it is working, so basically need to import the React from react it has seperate
create element inside the index.html, so the element which we are passing here it will
convert and create the html tags.

syntax : 
function Test(){

  3 attributes : (html tag, id and class name, style and html content)
  return React.createElement('div',
  {id : 'test', className : 'test-class'},
  React.createElement('h3','null','Iam Full stack developer'))

  Eg..,
  function Test(){
  // const name = 'Zynab Amrin'
  // return(
  //   <div>
  //     <h1>Hello how are you? {name}</h1>
  //   </div>
  // )
  return React.createElement('ul',
  {id : 'test', className : 'test-class'},
  React.createElement('li','null','Iam Full stack developer'),
  React.createElement('li','null','Iam Servicenow developer'))

}

*/




