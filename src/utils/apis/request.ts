import axios from "axios";

const eventioRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        APIKey: process.env.REACT_APP_API_KEY as string,
    },
});

export default eventioRequest;
