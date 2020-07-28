import Endpoints from "./endpoints";
import axios from 'axios';

export function UserLogin (credentials){
    return axios.post(Endpoints.login(),credentials)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}

export function getRecords(bank){
    return axios.get(Endpoints.getRecords(bank))
    .then(res =>res.data.response)
    .catch(err=>console.log(err));
}

export function getFeedbacks(bank,touchpoint){
    return axios.get(Endpoints.reviews(bank,touchpoint))
    .then(res =>res.data)
    .catch(err=>console.log(err));
}

export function getKYC(id){
    return axios.get(Endpoints.getKYC(id))
    .then(res =>res.data)
    .catch(err=>console.log(err));
}

export function feedbackChart(bank){
    return axios.get(Endpoints.feedbackChart(bank))
    .then(res =>res.data.response)
    .catch(err=>console.log(err));
}

export function missingData(bank,touchpoint){
    return axios.get(Endpoints.missingData(bank,touchpoint))
    .then(res =>res.data)
    .catch(err=>console.log(err));
}

export function requestData(bank,touchpoint){
    return axios.get(Endpoints.requestData(bank,touchpoint))
    .then(res =>res.data)
    .catch(err=>console.log(err));
}

export function changeStatus(bank,id,status){
    return axios.post(Endpoints.changeStatus(bank,id,status))
    .then(res =>res.data)
    .catch(err=>console.log(err));
}

export function postUpdate(postData){
    return axios.post(Endpoints.postUpdate(),postData)
    .then(res =>res.data)
    .catch(err=>console.log(err));
}

export function sendOTP(bank,otp){
    return axios.get(Endpoints.sendOTP(bank,otp))
    .then(res =>res.data)
    .catch(err=>console.log(err));
}