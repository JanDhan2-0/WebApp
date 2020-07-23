import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import MyAppBar from '../components/basic/AppBar'
import MyInfoBar from '../components/basic/InfoBar'
import MyDetails from '../components/basic/Details'
import "../assets/styles/Tabular.css"
import MyPopup from "../components/basic/Popup"

export default function MyClient(props) {
  const headers=["AADHAR","PANCARD", "SIGNATURE"];
  const [data,setData]=useState({});
  const {id}=useParams('id');
    useEffect(()=>{
      axios.get(`https://jandhan2.herokuapp.com/account/bank/SBI/documentOtp/${id}/getData`)
      .then(res => {
          setData(res.data);
        })
        .catch(err=>console.log(err));
      // eslint-disable-next-line 
  },[]);
  return (
    <div>
      <MyAppBar active="records"/>
      <br></br>
      <MyInfoBar id={id} status={data.status}/>
      <div style={{backgroundColor:"#EFF0F3", margin:"20px", padding:"30px", borderRadius:"10px"}}>
      <MyDetails data={data}/>
      <table className="board-container">
        <thead>
            <tr>
                {
                headers.map((item,index)=>
                    <th scope="col" key={index}>{item}</th>    
                )}
            </tr>
        </thead>
        <tbody>
        <tr className="row-data">
                <td data-label="aadhar" style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}><MyPopup title="AADHAR" path={data.aadharUrl} data={id}/></td>
                <td data-label="pandcard"><MyPopup title="PANCARD" path={data.panUrl} data={id}/></td>
                <td data-label="sign" style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}><MyPopup title="SIGNATURE" path={data.signatureUrl} data={id}/></td>
        </tr>
         </tbody>
        </table>
      </div>
    </div>
  );
}