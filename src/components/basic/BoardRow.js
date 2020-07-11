import React from 'react'
import {ReactComponent as Close} from '../../assets/icons/close.svg';
import {ReactComponent as Clock} from '../../assets/icons/clock.svg';
import {ReactComponent as Check} from '../../assets/icons/check.svg';

export default function BoardRow(props) {
    const color=(props.status==="pending" ? "#948888" : props.status==="approved" ? "#469140":"#FF0303");
    const style={
        color:color,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // lineHeight:0
        paddingLeft:'10px'
    };
    return (
        <tr className="row-data">
                <td data-label="id"><a href="/client">{props.id}</a></td>
                <td data-label="date">{props.date}</td>
                <td data-label="name">{props.name}</td>
                <td data-label="phone">{props.phone}</td>
                <td data-label="purpose">{props.purpose}</td>
                <td data-label="status" style={style}>
                    {props.status==="pending" ? <Clock/> : props.status==="approved" ? <Check/>:<Close/>}
                    {props.status}
                </td>
        </tr>
    )
}
