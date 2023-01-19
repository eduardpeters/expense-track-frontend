import { useState } from "react";
import { AxiosResponse } from "axios";
import authorizationAPI from "../services/authorizationAPI";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLoginClick() {
        if (username && password) {
            const response = await authorizationAPI.login(username, password);
            console.log(response);
            if (response){
                if ((response as AxiosResponse).status === 200) {
                    const token = (response as AxiosResponse).data.token.split(' ')[1];
                    console.log(token);
                    localStorage.setItem("expenseTrackToken", token);
                }
                else {
                    console.log((response as AxiosResponse).data.message);
                }
            }
            else {
                console.log("An error occurred, please try again");
            }
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