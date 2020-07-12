import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';

export default function MyDetails(props){
    const style={
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        textAlign:'center',
        padding:"0 40px"
    }
    //id,date,name,phone,purpose,status
    return(
        <div style={style}>
            <div style={{width:"60%", fontSize:"1.2em"}}>
    <p><label>Name : </label>{props.data.name}</p>
    <p><label>PhNo : </label>{props.data.phone}</p>
    <p><label>Email : </label>raj@gmail.com</p>
            <p><label>Acc No. : </label>12345678901</p>
            <p><label>Bank Branch : </label>Dwarka,Delhi</p>
            <p><label>IFSC : </label>SBI9857897</p>
            </div>
            <div style={{width:"40%", fontSize:"1.2em"}}>
    <p><label>Form ID : </label><Link to="/client">{props.data.id}</Link></p>
    <p><label>Date : </label>{props.data.date}</p>
    <p><label>Purpose : </label>{props.data.purpose}</p>
             <p><label>Aadhaar No. : </label>12345678901</p>
            <p><label>Pan Card : </label>9857897</p>
            </div>
        </div>
    );
}