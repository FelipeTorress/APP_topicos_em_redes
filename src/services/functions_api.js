import api from './api'
async function charge (){
    var value = await api.get();

    return value;
}

export default charge;