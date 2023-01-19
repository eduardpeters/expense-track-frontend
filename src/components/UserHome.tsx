interface UserHomeProps {
    username: string;
}

function UserHome({username}: UserHomeProps) {

    function handleLogOut() {
        localStorage.removeItem("expenseTrackToken");
        console.log("You are now logged out");
        // should navigate to main page now
    }

    return (
        <div>
            {`Welcome back ${username}!`}
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
}

export default UserHome;