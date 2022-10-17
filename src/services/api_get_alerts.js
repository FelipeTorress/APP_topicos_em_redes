import axios from 'axios';

const api_get_all_alerts = axios.create({
    baseURL:'http://localhost:3333/door/alerts?name=ARRIVE_DOOR'
});

export default api_get_all_alerts;

