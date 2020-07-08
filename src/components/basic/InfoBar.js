import React from 'react'
import '../../assets/styles/style.css'
import '../../App.css'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function MyInfoBar(){
    const history = useHistory();
    return(
        <div >
        <div className="table-header-text" style={{float:'left', paddingLeft:'10px', fontSize:'30px'}}>
            <p>Client Details</p>
        </div>
        <div style={{float:'right', justifyContent:'space-around'}}>
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