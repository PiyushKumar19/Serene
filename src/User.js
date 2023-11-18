import { useState } from "react";
export function User(props) {
    const [name, setName ] = useState("");
    return (
        <div>
            <h1>{props.name}</h1>
            <button className="border-1 bg-b-sky-500" onClick={(props.funct)}>Click to show Name</button>
        </div>
    )
}

