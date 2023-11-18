import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import { Profile } from './Profile';
import { User } from './User';

function App() {
  const [name, setName ] = useState("");

  function greet() {
    alert(name);
  }
  return (
    <div className="App">
      <Profile />
      
      <input type='string' onChange={(e)=>setName(e.target.value)} placeholder='Enter name'></input>
      <User name={name} funct={greet} />
    </div>
  );
}

export default App;
