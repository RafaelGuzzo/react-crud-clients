import axios from "axios";

const CLIENTS_URL = "http://localhost:8000/clients"

export const getAllClients = async() => {
    return await axios.get(CLIENTS_URL);
}

export const addClient = async(client) => {
    console.log(client);
    return await axios.post(CLIENTS_URL, client);
}

export const deleteClient = async(id) => {
    return await axios.delete(`${CLIENTS_URL}/${id}`);
}

export const getClientById = async(id) => {
    return await axios.get(`${CLIENTS_URL}/${id}`);
}

export const updateClient = async(id, client) => {
    return await axios.put(`${CLIENTS_URL}/${id}`, client);
}