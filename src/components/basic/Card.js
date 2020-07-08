import React from 'react'
import '../../assets/styles/style.css'
import '../../App.css'
import MyStatus from './Status';
import { Link } from 'react-router-dom';

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
        return (<div className="card">
            <Link to="/client">View</Link>
            <Link to="/client">View</Link>
            <Link to="/client">View</Link>
        </div>);
    }
}