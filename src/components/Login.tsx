import { useState } from "react";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import authorizationAPI from "../services/authorizationAPI";
import "../styles/Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLoginClick() {
        if (username && password) {
            const response = await authorizationAPI.login(username, password);
            if (response) {
                if ((response as AxiosResponse).status === 200) {
                    const token = (response as AxiosResponse).data.token.split(' ')[1];
                    localStorage.setItem("expenseTrackToken", token);
                    navigate("/home");
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
        <div className="login-container">
            <h3 className="login__title">Please Log In</h3>
            <div className="login-inputs">
                <label htmlFor="usernameInput">Username</label>
                <input type="text" id="usernameInput" value={username} onChange={event => setUsername(event.target.value)}></input>
            </div>
            <div className="login-inputs">
                <label htmlFor="passwordInput">Password</label>
                <input type="password" id="passwordInput" value={password} onChange={event => setPassword(event.target.value)}></input>
            </div>
            <button className="login__button" onClick={handleLoginClick}>Log In</button>
        </div>
    );
}

export default Login;