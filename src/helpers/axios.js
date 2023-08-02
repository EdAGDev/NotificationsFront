import axios from 'axios';

const loggedUser = window.localStorage.getItem('token');

const baseURL = process.env.REACT_APP_API;
const token = loggedUser;
const headers = { Authorization: `Bearer ${token}` }

export const api = axios.create({
    baseURL,
    headers
});