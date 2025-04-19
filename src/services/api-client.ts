import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '831cd8d881dc4c8bb72073b46dcc017e'
    }
})