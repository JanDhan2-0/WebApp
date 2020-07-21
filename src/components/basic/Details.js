import React,{useEffect, useState} from 'react'
import '../../App.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';

export default function MyDetails(props){
    const [data,setData]=useState({});
    const {id}=useParams('id');
    const style={
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        textAlign:'center',
        padding:"0 40px"
    };
    useEffect(()=>{
        axios.get(`http://jandhan2.herokuapp.com/account/bank/SBI/documentOtp/${id}/getData`)
        .then(res => {
            setData(res.data);
            console.log(res.data);
          })
          .catch(err=>console.log(err));
    },[]);
    //id,date,name,phone,purpose,status
    return(
        <div style={style}>
            <div style={{width:"60%", fontSize:"1.2em"}}>
    <p><label>Name : </label>{data.name}</p>
    <p><label>PhNo : </label>{data.phone}</p>
    <p><label>Email : </label>{data.email}</p>
            <p><label>Acc No. : </label>12345678901</p>
            <p><label>Bank Branch : </label>Dwarka,Delhi</p>
            <p><label>IFSC : </label>SBI9857897</p>
            </div>
            <div style={{width:"40%", fontSize:"1.2em"}}>
    <p><label>Form ID : </label><Link to="/client">{data.formId}</Link></p>
    <p><label>Date : </label>{data.account_creation_date}</p>
    <p><label>Purpose : </label>{data.purpose}</p>
             <p><label>Aadhaar No. : </label>12345678901</p>
            <p><label>Pan Card : </label>9857897</p>
            </div>
        </div>
    );
}