import { useState } from "react";
import authorizationAPI from "../services/authorizationAPI";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    async function handleLoginClick() {
        if (username && password) {
            const response = await authorizationAPI.login(username, password);
            console.log(response);
        }
    }

    return (
        <div>
            <h3>Login Form</h3>
            <input type="text" value={username} onChange={event => setUsername(event.target.value)}></input>
            <input type="password" value={password} onChange={event => setPassword(event.target.value)}></input>
            <button onClick={handleLoginClick}>Log In</button>
        </div>
    );
}

export default Login;