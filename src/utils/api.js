import Endpoints from "./endpoints";
import axios from 'axios';

export function UserLogin (credentials){
    return axios.post(Endpoints.login(),credentials)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}