import React from 'react'
import axios from 'axios'
import '../../App.css'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function MyInfoBar({id, status}){
    const history = useHistory();
    const handleReject = () =>{
        axios.post(`https://jandhan2.herokuapp.com/account/bank/SBI/documentOtp/${id}/changeStatus/Rejected`)
        .then(res => {
            history.push('/');
          })
          .catch(err=>console.log(err));
    };
    const handleApprove = () =>{
        axios.post(`https://jandhan2.herokuapp.com/account/bank/SBI/documentOtp/${id}/changeStatus/Approved`)
        .then(res => {
            history.push('/');
          })
          .catch(err=>console.log(err));
    };
    return(
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',padding:'0px 20px'}}>
            <h1>KYC Details</h1>
            {
                status==="Pending" ? (
                    <div>
                        <Button variant="contained" style={{backgroundColor: '#EF6C6C'}} color="primary" onClick={handleReject}>Reject</Button>&nbsp; &nbsp;
                        <Button variant="contained" style={{backgroundColor: '#71956E'}} color="primary" onClick={handleApprove}>Approve</Button>
                    </div>
                ) :
                <div />
            }
        </div>
    );
}