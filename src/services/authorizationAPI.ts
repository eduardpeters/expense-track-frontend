import axios, { AxiosError } from "axios";

type IsAuthorized = Promise<{isLoggedIn: boolean; message?: string; username?: string }>

class authorizationAPI {

    static async login(username: string, password: string) {
        const requestUrl = `${process.env.REACT_APP_BASE_URL}login`;
        const requestBody = { username: username, password: password };
        try {
            const response = await axios.post(requestUrl, requestBody);
            return response;
        }
        catch (error) {
            if (error instanceof AxiosError) {
                if (error.response) {
                    return error.response;
                }
            }
            else {
                console.error(error);
                return {};
            }
        }
    }

    static async isAuthorized(token: string): IsAuthorized {
        const requestUrl = `${process.env.REACT_APP_BASE_URL}getuser`;
        const requestConfig = { headers: { authorization: `Bearer ${token}` } };
        try {
            const response = await axios.get(requestUrl, requestConfig);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return { isLoggedIn: false, message: "Failed to authenticate" };
        }
    }

    static async register(username: string, email: string, password: string) {
        const requestUrl = `${process.env.REACT_APP_BASE_URL}register`;
        const requestBody = { username: username, email: email, password: password };
        try {
            const response = await axios.post(requestUrl, requestBody);
            return response;
        }
        catch (error) {
            if (error instanceof AxiosError) {
                if (error.response) {
                    return error.response;
                }
            }
            else {
                console.error(error);
                return {};
            }
        }
    }
}

export default authorizationAPI;