// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Change this to your backend URL

export const loginUser = async (credentials) => {
    return await axios.post(`${API_URL}/users/login`, credentials);
};

export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/users/register`, userData);
};

export const fetchUsers = async () => {
    return await axios.get(`${API_URL}/users`);
};

export const fetchItems = async () => {
    return await axios.get(`${API_URL}/items`);
};

// Add other API functions as needed
