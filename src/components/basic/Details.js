import React from 'react'
import '../../App.css'
import '../../assets/styles/style.css'
import { Link } from 'react-router-dom';

export default function MyDetails(){
    return(
        <div className="table" style={{height:'600px'}}>
            <div>
            <p className="small-form-content"><label>Name :&nbsp;</label>Raj Malhotra</p>
            <p className="small-form-content"><label>PhNo :&nbsp;</label>9087654321</p>
             <p className="small-form-content"><label>Email :&nbsp;</label>raj@gmail.com</p>
             <p className="small-form-content"><label>Acc No. :&nbsp;</label>12345678901</p>
            <p className="small-form-content"><label>Bank Branch :&nbsp;</label>Dwarka,Delhi</p>
            <p className="small-form-content"><label>IFSC :&nbsp;</label>SBI9857897</p>
            </div>
            <div>
            <p className="small-form-content"><label>Form ID :&nbsp;</label><Link to="/client">SBI-123</Link></p>
            <p className="small-form-content"><label>Date :&nbsp;</label>05/06/20</p>
             <p className="small-form-content"><label>Purpose :&nbsp;</label>A/C opening</p>
             <p className="small-form-content"><label>Aadhaar No. :&nbsp;</label>12345678901</p>
            <p className="small-form-content"><label>Pan Card :&nbsp;</label>9857897</p>
            </div>
        </div>
    );
}