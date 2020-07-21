import React from 'react'
import {ReactComponent as Close} from '../../assets/icons/close.svg';
import {ReactComponent as Clock} from '../../assets/icons/clock.svg';
import {ReactComponent as Check} from '../../assets/icons/check.svg';
import { Link } from 'react-router-dom';

export default function BoardRow(props) {
    console.log(props)
    const color=(props.status==="Pending" ? "#948888" : props.status==="Approved" ? "#469140":"#FF0303");
    const style={
        color:color,
        justifyContent:'center',
        alignItems:'center',
        padding:'0px 5px 0px 5px',
        borderTopRightRadius: '10px',
        borderBottomRightRadius:'10px'
    };
    return (
        <tr className="row-data">
                <td data-label="id" style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}><Link to={{pathname:`/client/${props.otp}`}}>{props.id}</ Link></td>
                <td data-label="date">{props.date}</td>
                <td data-label="name">{props.name}</td>
                <td data-label="phone">{props.phone}</td>
                <td data-label="purpose">{props.purpose}</td>
                <td data-label="status" style={style}>
                    {props.status==="Pending" ? <Clock/> : props.status==="Approved" ? <Check/>:<Close/> } &nbsp;
                    {props.status}
                </td>
        </tr>
    )
}
