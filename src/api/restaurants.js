import axios from "axios";

const API = axios.create({
    baseURL: "/api",  // relative path
    headers: { "Content-Type": "application/json" }
});

export const getRestaurant = async (lat, lng) => {
    try {
        const res = await API.get("/restaurants", { params: { lat, lng } });
        return res.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};