
import axios from 'axios';

const api_get_first_alert = axios.create({
    baseURL:'http://localhost:3333/door/alerts/sohttp://localhost:3333/door/alerts?name=ARRIVE_DOOR'
});

export default api_get_first_alert;

