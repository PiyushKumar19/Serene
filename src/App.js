import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import { Profile } from './Profile';
import  User  from './User';

function App() {
  const [name, setName] = useState("Piyush");
  return (
    <div>
      <h1>Render method with class component in React</h1>
      <User name={name} />
      <button onClick={()=>setName("Kumar")}>Update Name</button>
    </div>
  )
}

export default App;
