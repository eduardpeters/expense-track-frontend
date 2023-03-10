import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usersAPI from "../services/usersAPI";
import BudgetsList from "./BudgetsList";

function UserHome() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function checkToken(token: string) {
            const response = await usersAPI.getUser(token);
            if (response.isLoggedIn && response.username) {
                setUsername(response.username);
            }
            else {
                console.log(response.message);
                localStorage.removeItem("expenseTrackToken");
                navigate("/");
            }
        }
        const storedToken = localStorage.getItem("expenseTrackToken");
        if (storedToken) {
            checkToken(storedToken);
        }
    }, [navigate]);

    function handleLogOut() {
        localStorage.removeItem("expenseTrackToken");
        navigate("/");
    }

    return (
        <div>
            <h2>{`Welcome back ${username}!`}</h2>
            <BudgetsList />
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
}

export default UserHome;