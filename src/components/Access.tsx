import { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import UserHome from "./UserHome";
import authorizationAPI from "../services/authorizationAPI";
import "../styles/Access.css";

function Access() {
    const [toggleRegister, setToggleRegister] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        async function checkToken(token: string) {
            const response = await authorizationAPI.isAuthorized(token);
            if (response.isLoggedIn) {
                setIsLoggedIn(true);
                setUsername(response.username as string);
            }
            else {
                localStorage.removeItem("expenseTrackToken");
                console.log(response.message);
            }
        }
        const storedToken = localStorage.getItem("expenseTrackToken");
        if (storedToken) {
            checkToken(storedToken);
        }
        }, []);

    return (
        <>
            {isLoggedIn ?
                <UserHome username={username} />
                :
                <div className="access-container">
                    <div className="buttons-container">
                        <button className="access__button" onClick={() => setToggleRegister(false)}>Log In</button>
                        <button className="access__button" onClick={() => setToggleRegister(true)}>Register</button>
                    </div>
                    {toggleRegister ?
                        <Register />
                        :
                        <Login />
                    }
                </div>
            }
        </>
    );
}

export default Access;