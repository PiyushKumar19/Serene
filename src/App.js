import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import { Student, AppleProp } from './Student';


function App() {
  const [data, setData] = useState('Piyush'); // Created a state and initialized it

  function apple() {
    setData('Kumar');
    // data changes
    return alert(data);
  }
  return (
    <div className="App">

      <div style={{ backgroundColor: 'skyblue' }}>
        <h1 >State in functional component : {data}</h1>
        <button onClick={apple}>Click Me!</button>
      </div>

      <div style={{ backgroundColor: 'skyblue', margin: 10 }}>
        <h2>States in class components ;)</h2>
        <h2 >Student data from Class Component :) <Student></Student></h2>
      </div>

      <div style={{backgroundColor: 'powderblue'}}>
        <h3>Props in React :)</h3>
        <AppleProp name={"Piu"} email={"Piyush@gmail.com"}>Click for props</AppleProp>
      </div>

    </div>
  );
}

export default App;
