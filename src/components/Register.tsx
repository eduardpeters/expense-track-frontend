import authorizationAPI from "../services/authorizationAPI";

function Register() {

    function handleRegisterClick() {
        authorizationAPI.register();
    }

    return (
        <div>
            Register Form
            <button onClick={handleRegisterClick}>GO!</button>
        </div>
    );
}

export default Register;