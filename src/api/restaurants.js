import axios from "axios";

const API = axios.create({
    baseURL: "/api",  // relative path
    headers: { "Content-Type": "application/json" }
});

export const getRestaurant = async (lat, lng) => {
    try {
        const response = await API.get("/restaurants", { params: { lat, lng } });
        // Ensure we always return an array
        if (Array.isArray(response.data)) {
        return response.data;
        } else {
        console.warn("Backend returned non-array data:", response.data);
        return [];
        }
    } catch (error) {
        console.error("Error fetching restaurants:", error);
        return [];
    }
};
