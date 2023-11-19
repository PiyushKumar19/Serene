import { Component } from "react";

class Student extends Component 
{
    componentWillUnmount()
    {
        alert("componetWillUnmount called");
    }
    render()
    {
        return (
            <div className=" App bg-yellow-300">
                <h1>Student component</h1>
            </div>
        )
    }
}

export default Student;