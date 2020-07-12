import React from 'react'
import '../../App.css'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function MyInfoBar(){
    const history = useHistory();
    return(
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',padding:'0px 20px'}}>
            <h1>Client Details</h1>
            <div>
                <Button variant="contained" style={{backgroundColor: '#EF6C6C'}} color="primary" onClick={()=>{
                    history.push('/records')
                }}>Reject</Button>&nbsp;
                &nbsp;
                <Button variant="contained" style={{backgroundColor: '#71956E'}} color="primary" onClick={()=>{
                    history.push('/records')
                }} >Approve</Button>
            </div>
        </div>
    );
}