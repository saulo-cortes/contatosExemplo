import axios from "axios";

export const api = axios.create({
    timeout: 60000,
    baseURL: "https://api-monogo-db-yp8x-onrender.com"
});