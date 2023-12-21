import axios from 'axios';

const getCapacity = async () => {
    try {
        const response = await axios.get('http://localhost:8080/storage/currentCapacity');
        console.log("reponse: ", response )
        return response.data;
    } catch (error) {
        console.error('Fehler bei der Backend-Anfrage:', error);
        return null;
    }
};

export default getCapacity;