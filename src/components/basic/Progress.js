import React from 'react'
import { LinearProgress } from '@material-ui/core';

export default function Progress(props){
    return (
        <div><div>{props.rating} stars <LinearProgress variant="determinate" color="primary" value={props.value} style={{width:'50%',height:'20px',float:'right'}}/></div><br></br></div>
    );
}