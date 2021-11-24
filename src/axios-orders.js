import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-complete-guide-e4670.firebaseio.com/'
});

export default instance;