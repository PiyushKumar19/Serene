import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import { Student, AppleProp } from './Student';
import { Case1 } from './TestCase';


function App() {
  const [data, setData] = useState('Piyush'); // Created a state and initialized it

  const [name, setName ] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  function apple() {
    setData('Kumar');
    // data changes
    return alert(data);
  }

  function getFormData(e) {
    console.log(name, tnc, interest);
    e.preventDefault();
  }
  return (
    <div className="App">
      <Case1></Case1>
      <form  onSubmit={getFormData}>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholders="Emter Name" />
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and conditions</span>
        <button type='submit'>Submit</button>
      </form>

    </div>
  );
}

export default App;
