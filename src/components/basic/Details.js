import React from 'react'
import '../../App.css'
import '../../assets/styles/style.css'
import { Link } from 'react-router-dom';

export default function MyDetails(){
    return(
        <div className="table" style={{ height:'300px',flexDirection:'row',justifyContent:'space-evenly'}}>
            <div style={{float:'left'}}>
            <p className="small-form-content"><label>Name : </label>Raj Malhotra</p>
            <p className="small-form-content"><label>PhNo : </label>9087654321</p>
             <p className="small-form-content"><label>Email : </label>raj@gmail.com</p>
             <p className="small-form-content"><label>Acc No. : </label>12345678901</p>
            <p className="small-form-content"><label>Bank Branch : </label>Dwarka,Delhi</p>
            <p className="small-form-content"><label>IFSC : </label>SBI9857897</p>
            </div>
            <div style={{float:'right'}}>
            <p className="small-form-content"><label>Form ID : </label><Link to="/client">SBI-123</Link></p>
            <p className="small-form-content"><label>Date : </label>05/06/20</p>
             <p className="small-form-content"><label>Purpose : </label>A/C Opening</p>
             <p className="small-form-content"><label>Aadhaar No. : </label>12345678901</p>
            <p className="small-form-content"><label>Pan Card : </label>9857897</p>
            </div>
        </div>
    );
}