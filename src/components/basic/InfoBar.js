import React from 'react'
import '../../assets/styles/style.css'
import '../../App.css'
import { Button } from '@material-ui/core';

export default function MyInfoBar(){
    return(
        <div >
        <div className="table-header-text" style={{float:'left', paddingLeft:'10px', fontSize:'30px'}}>
            <p>Client Details</p>
        </div>
        <div style={{float:'right', justifyContent:'space-around'}}>
            <Button variant="contained" style={{backgroundColor: '#EF6C6C'}} color="primary">Reject</Button>&nbsp;
            &nbsp;
            <Button variant="contained" style={{backgroundColor: '#71956E'}} color="primary">Approve</Button>
        </div>
        </div>
    );
}