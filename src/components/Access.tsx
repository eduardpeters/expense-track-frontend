import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "../styles/Access.css";

function Access() {
    const [toggleRegister, setToggleRegister] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("expenseTrackToken");
        if (storedToken) {
            navigate("/home");
        }
    }, [navigate]);

    return (
        <div className="access-container">
            <div className="buttons-container">
                <button className="access__button" onClick={() => setToggleRegister(false)}>Log In</button>
                <button className="access__button" onClick={() => setToggleRegister(true)}>Register</button>
            </div>
            {toggleRegister ?
                <Register setToggleRegister={setToggleRegister} />
                :
                <Login />
            }
        </div>
    );
}

export default Access;