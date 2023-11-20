import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect} from 'react';
import User from './User';

function App() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(100);

  // useEffect example as ComponentWillMount
  useEffect(()=>{
    console.log("useEffect Called");
  })

  // useEffect that runs only for specific two states
  useEffect(()=>{
    console.log("useEffect for state-data, is called.");
  }, [data, count]);

  return(
    <div className='App'>
      <h1>UseEffect Hook, Data: {data}</h1>
      <User count={count} />
      <button className='bg-gray-300 rounded-sm m-2' onClick={()=>setData(data+1)}>Update data</button>
      <button className='bg-gray-300 rounded-sm m-2' onClick={()=>setCount(count+1)}>Update count</button>
    </div>
  )
}

export default App;
