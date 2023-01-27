import axios from "axios";

const baseUrl = `${process.env.REACT_APP_BASE_URL}entries`;

class entriesAPI {

    static async getEntries(token: string, budgetId: string) {
        const requestUrl = `${baseUrl}/${budgetId}`;
        const requestConfig = { headers: { authorization: `Bearer ${token}` } };
        try {
            const response = await axios.get(requestUrl, requestConfig);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }
}

export default entriesAPI;