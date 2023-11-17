import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

// Class component example

export class Student extends Component 
{
    constructor() 
    {
        super();
        this.state = {
            data:'Piyush',
            numData: 1
        };
    }
    apple() {
        // setState updates the data
        this.setState({data: 'Kumar'});
        this.setState({numData: this.state.numData+1});
    }
    render()
    {
        return (
            <div style={{backgroundColor: 'coral'}}>
                <h2>State with class component</h2>
                <h3>{this.state.numData+1}</h3>
                <h3>State data is {this.state.data}</h3>
                <button onClick={()=>this.apple()}>Click me!</button>
            </div>
        )
    }
}

export function AppleProp(props)
{
  return (
    <div style={{backgroundColor: 'powderblue'}}>
      <h1>{props.name}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}