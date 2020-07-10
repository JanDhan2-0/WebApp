import React from 'react'
import '../../assets/styles/style.css'
import '../../App.css'
import MyStatus from './Status';
import MyPopup from './Popup'
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card'
import { CardContent, Typography } from '@material-ui/core';

export default function MyCard(props) {
    if(props.context==="records"){
        return (<div><div className="card">
        <Link to="/client" className="form-id">{props.formid}</Link>
        <p className="form-content">05/06/20</p>
        <p className="form-content">Raj Malhotra</p>
        <p className="form-content">9876543201</p>
        <p className="form-content">A/C Creation</p>
        <MyStatus status={props.status}/>
        </div><br></br></div>);
    }
    else if(props.context==="client"){
        return (<div className="card" style={{top:'450px'}}>
            <MyPopup title="AADHAR" path={require('../../assets/images/aadhar.png')}/>
            <MyPopup title="PAN CARD" path={require('../../assets/images/aadhar.png')}/>
            <MyPopup title="SIGNATURE" path={require('../../assets/images/aadhar.png')}/>
        </div>);
    }
    else if(props.context==="feedback"){
        return (<Card style={{backgroundColor:'#EAEAEA',height:'170px',width:'868px'}}>
            <CardContent>
        <Typography variant='h6'>Rajendra Shah</Typography>
        <p>11th July</p>
        <Typography>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Typography>
        </CardContent>
        </Card>);
    }
}