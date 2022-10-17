
import axios from 'axios';

const api_get_first_alert = axios.create({
    baseURL:'http://localhost:3333/door/alerts/sound'
});

export default api_get_first_alert;

