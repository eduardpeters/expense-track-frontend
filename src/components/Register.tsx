import { useState } from "react";
import authorizationAPI from "../services/authorizationAPI";
import { AxiosResponse } from "axios";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegisterClick() {
        if (username && email && password) {
            const response = await authorizationAPI.register(username, email, password);
            console.log(response);
            if (response) {
                console.log((response as AxiosResponse).data.message);
            }
            else {
                console.log("An error occurred");
            }
        }
    }

    return (
        <div>
            <h3>Register Form</h3>
            <input type="text" value={username} onChange={event => setUsername(event.target.value)}></input>
            <input type="text" value={email} onChange={event => setEmail(event.target.value)}></input>
            <input type="password" value={password} onChange={event => setPassword(event.target.value)}></input>
            <button onClick={handleRegisterClick}>Register</button>
        </div>
    );
}

export default Register;