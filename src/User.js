import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect} from 'react';

function App(props) {
    // useEffect for specific props
    useEffect(()=>{
        console.log("Hook for prop count is called !");
    },[props.count])

  return(
    <div className='App'>
      <h1>UseEffect Hook, Count:  {props.count}</h1>
    </div>
  )
}

export default App;
