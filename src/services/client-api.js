import axios from "axios";

const CLIENTS_URL = "http://localhost:8000/clients"

export const getAllClients = async() => {
    return await axios.get(CLIENTS_URL);
}