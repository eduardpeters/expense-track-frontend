import { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";

function Access() {
    const [toggleRegister, setToggleRegister] = useState(false);

    useEffect(() => {
        console.log("User is logged in");
        console.log("User is not logged in");
    }, []);

    return (
        <div>
            <button onClick={() => setToggleRegister(false)}>Log In</button>
            <button onClick={() => setToggleRegister(true)}>Register</button>
            {toggleRegister ?
                <Register />
                :
                <Login />
            }
        </div>
    );
}

export default Access;