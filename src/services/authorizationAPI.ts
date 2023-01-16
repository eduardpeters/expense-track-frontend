import axios from "axios";

class authorizationAPI {

    static async login(username: string, password: string) {
        console.log("Post login to", process.env.REACT_APP_BASE_URL);
        const requestUrl = `${process.env.REACT_APP_BASE_URL}login`;
        const requestBody = {username: username, password: password};
        try {
            const response = await axios.post(requestUrl, requestBody);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return {};
        }
    }

    static register() {
        console.log("Post registration to", process.env.REACT_APP_BASE_URL);
    }
}

export default authorizationAPI;