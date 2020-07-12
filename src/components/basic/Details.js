import React from 'react'
import '../../App.css'
import '../../assets/styles/style.css'
import { Link } from 'react-router-dom';

export default function MyDetails(){
    const style={
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        textAlign:'left',
        padding:"0 40px"
    }
    return(
        <div style={style}>
            <div style={{width:"60%", fontSize:"1.2em"}}>
            <p><label>Name : </label>Raj Malhotra</p>
            <p><label>PhNo : </label>9087654321</p>
             <p><label>Email : </label>raj@gmail.com</p>
             <p><label>Acc No. : </label>12345678901</p>
            <p><label>Bank Branch : </label>Dwarka,Delhi</p>
            <p><label>IFSC : </label>SBI9857897</p>
            </div>
            <div style={{width:"40%", fontSize:"1.2em"}}>
            <p><label>Form ID : </label><Link to="/client">SBI-123</Link></p>
            <p><label>Date : </label>05/06/20</p>
             <p><label>Purpose : </label>A/C Opening</p>
             <p><label>Aadhaar No. : </label>12345678901</p>
            <p><label>Pan Card : </label>9857897</p>
            </div>
        </div>
    );
}