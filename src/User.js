import { Component, useState } from "react";

class User extends Component {
    constructor() {
        super();
        this.state = {
            email: "piyush@1123"
        };
    }
    render()
    {
        return (
            <div>
                <h1>User Component</h1>
                <h1>Name is {this.props.name}</h1>
                <button type="button" onClick={()=>this.setState({email:"kumar@123"})}>Update email</button>
            </div>
        )
    }
}

export default User;