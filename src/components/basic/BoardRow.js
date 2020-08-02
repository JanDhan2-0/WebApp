import React from 'react'
// import {ReactComponent as Close} from '../../assets/icons/close.svg';
// import {ReactComponent as Clock} from '../../assets/icons/clock.svg';
// import {ReactComponent as Check} from '../../assets/icons/check.svg';
// import { Link } from 'react-router-dom';
// import {RejectReports} from "../../utils/api"
// import { withRouter } from "react-router-dom";


function BoardRow(props) {
    // const history=useHistory();
    // const color=(props.status==="Pending" ? "#948888" : props.status==="Approved" ? "#469140":"#FF0303");
    // const style={
    //     color:color,
    //     justifyContent:'center',
    //     alignItems:'center',
    //     padding:'0px 5px 0px 5px',
    //     borderTopRightRadius: '10px',
    //     borderBottomRightRadius:'10px'
    // };
    const handleClick = () => {
        props.handleClick(props.id);
        // RejectReports(props.id)
        // .then(res => {
        // //   setRecords(res);
        // //   setData(res);
        //   console.log(res);
        // })
        // .catch(err=>console.log(err));
    };
    return (
        <tr className="row-data">
                {/* <td data-label="id" style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}><Link to={{pathname:`/client/${props.otp}`}}>{props.id}</ Link></td> */}
                <td data-label="name">{props.id.slice(0,10)}</td>
                <td data-label="name">{props.name}</td>
                <td data-label="phone">{props.area}</td>
                <td data-label="purpose">{props.reports}</td>
                <td data-label="purpose">{props.rating}</td>
                <td data-label="purpose">
                    <div tabIndex="0" style={{color:"red", cursor:"pointer"}} onClick={handleClick}>Reject</div>
                </td>
                {/* <td data-label="status" style={style}>
                    {props.status==="Pending" ? <Clock/> : props.status==="Approved" ? <Check/>:<Close/> } &nbsp;
                    {props.status}
                </td> */}
        </tr>
    )
}


export default BoardRow;

