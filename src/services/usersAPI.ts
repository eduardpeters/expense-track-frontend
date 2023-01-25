import axios from "axios";

type UserResponse = Promise<{ isLoggedIn: boolean; message?: string; username?: string }>

const baseUrl = `${process.env.REACT_APP_BASE_URL}users`;

class usersAPI {

    static async getUser(token: string): UserResponse {
        const requestUrl = `${baseUrl}`;
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
}

export default usersAPI;