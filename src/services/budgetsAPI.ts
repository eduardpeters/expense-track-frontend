import axios from "axios";

const baseUrl = `${process.env.REACT_APP_BASE_URL}budgets`;

class budgetsAPI {

    static async getAll(token: string) {
        const requestUrl = `${baseUrl}`;
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

export default budgetsAPI;