import { useState } from "react";
import authorizationAPI from "../services/authorizationAPI";
import { AxiosResponse } from "axios";
import "../styles/Register.css";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleRegisterClick() {
        if (username && email && password && (password === confirmPassword)) {
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
        <div className="register-container">
            <h3>Please register to use the Web App</h3>
            <div className="register-inputs">
                <label htmlFor="usernameInput">Username</label>
                <input type="text" value={username} onChange={event => setUsername(event.target.value)}></input>
            </div>
            <div className="register-inputs">
                <label htmlFor="emailInput">E-Mail</label>
                <input type="text" value={email} onChange={event => setEmail(event.target.value)}></input>
            </div>
            <div className="register-inputs">
                <label htmlFor="passwordInput">Password</label>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)}></input>
            </div>
            <div className="register-inputs">
                <label htmlFor="confirmPasswordInput">Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}></input>
            </div>
            <button className="register__button" onClick={handleRegisterClick}>Register</button>
        </div>
    );
}

export default Register;