import { useState } from "react";

export function Profile() {
    const[loggedIn, useLoggedIn] = useState(1);

    return (
        <div>
            {/* Recommeded way - ternary operator*/}
            {loggedIn?<h1>Welcome Piyush :)</h1> : <h1>Welcome Guest</h1>}
            {loggedIn==1? <h1>Welcome user1</h1>
                :loggedIn==2? <h1>Welcome user2</h1>
                :<h1>Welcome user3</h1> }
        </div>
    )
}