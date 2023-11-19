import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import Student from './Student';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Piyush",
      count: 0,
      show: true
    };
    console.log('Constructor');
  }

  componentDidMount() {
    <h1>Name is {this.state.name}</h1>

    console.log(this.state.name+"Component mounted");
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log('It updated from', preState, "to", this.state);

    if(this.state.count === preState.count)
    {
      alert("Same state values")
    }

    // infinite loop example
    if (this.state.count < 10)
    {
      // statement that can lead to infinite loop but doesn't because of condition
      this.setState({count: this.state.count+1});
    }
  }

  // commenteed it as it was not letting component render until 5th click
  // shouldComponentUpdate() 
  // {
  //   console.log("shouldComponentUpdate", this.state.count)
  //   if (this.state.count >5 && this.state.count<10)
  //   {
  //     return true;
  //   }
  // }

  render() {
    return (
      <div className='App'>
        <h1>Component Did Mount</h1>
        {console.log("rendor component")}
        <button className='border-2 bg-blue-300' onClick={()=>this.setState({name: "Kumar"})}>Update state</button>

        <h1>Component Did Updated {this.state.count}</h1>
        <button className='border-2 bg-blue-300' onClick={()=>this.setState({count:1})}>Update state count</button>

        <h1>Should Component Update {this.state.count}</h1>
        <button onClick={()=>this.setState({count: this.state.count+1})}>Update count</button>

        { 
          this.state.show ? <Student />:<h1>Child Component Removed</h1>
        }   
        <button className='bg-yellow-400' onClick={()=>this.setState({show:!this.state.show})}>Toggle child component {this.state.show}</button>
      </div>
    )
  }
}

export default App;
