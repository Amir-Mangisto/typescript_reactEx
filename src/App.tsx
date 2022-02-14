import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Student from './Components/Student/Student';

function App() {
  let title:string ="hello world";
  const ClickHandler = (name:string,age?:number,msg:string = "hi there",...friends:string[]):void =>{
    friends.forEach(friendsItem =>{
      console.log(friendsItem);
    })
    alert(msg +  name)
  }
  return (
    <div className="App">
      {/* {title} */}
      {/* <button onClick={()=>ClickHandler("amir",undefined,"good day","asi","lop","mop")}>click</button> */}

      <Home/>
      {/* <Student/> */}
    </div>
  );
}

export default App;
