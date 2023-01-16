import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function Access() {
    const [toggleRegister, setToggleRegister] = useState(false);

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