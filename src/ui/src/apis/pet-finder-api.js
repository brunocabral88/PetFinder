import axios from 'axios';

const PetFinderAPI = axios.create({
    baseURL: process.env.REACT_APP_PETFINDER_API_URL,
    withCredentials: true
});

export default PetFinderAPI;