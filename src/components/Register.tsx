import { useState } from "react";
import authorizationAPI from "../services/authorizationAPI";
import { AxiosResponse } from "axios";
import "../styles/Register.css";

interface RegisterProps {
    setToggleRegister: (value: boolean) => void;
}

function Register({setToggleRegister}: RegisterProps) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleRegisterSubmit(event: React.FormEvent) {
        event.preventDefault();
        if (username && email && password && (password === confirmPassword)) {
            const response = await authorizationAPI.register(username, email, password);
            if (response) {
                console.log((response as AxiosResponse).data.message);
                if ((response as AxiosResponse).status === 200) {
                    setToggleRegister(false);
                }
            }
            else {
                console.log("An error occurred");
            }
        }
    }

    return (
        <form className="register-container" onSubmit={(event) => handleRegisterSubmit(event)}>
            <h3>Please register to use the Web App</h3>
            <div className="register-inputs">
                <label htmlFor="usernameInput">Username</label>
                <input type="text" id="usernameInput" value={username} onChange={event => setUsername(event.target.value)}></input>
            </div>
            <div className="register-inputs">
                <label htmlFor="emailInput">E-Mail</label>
                <input type="text" id="emailInput" value={email} onChange={event => setEmail(event.target.value)}></input>
            </div>
            <div className="register-inputs">
                <label htmlFor="passwordInput">Password</label>
                <input type="password" id="passwordInput" value={password} onChange={event => setPassword(event.target.value)}></input>
            </div>
            <div className="register-inputs">
                <label htmlFor="confirmPasswordInput">Confirm Password</label>
                <input type="password" id="confirmPasswordInput" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}></input>
            </div>
                <button type="submit" className="register__button">Register</button>
            </form>
    );
}

export default Register;