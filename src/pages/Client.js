import React from 'react';

import MyAppBar from '../components/basic/AppBar'
import MyInfoBar from '../components/basic/InfoBar'
import MyDetails from '../components/basic/Details'
import "../assets/styles/Tabular.css"
import MyPopup from "../components/basic/Popup"

export default function MyClient(props) {
  const headers=["AADHAR","PANCARD", "SIGNATURE"];
  const { data } = props.location
  return (
    <div>
      <MyAppBar active="records"/>
      <br></br>
      <MyInfoBar/>
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
                <td data-label="aadhar" style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}><MyPopup title="AADHAR" path={require('../assets/images/aadhar.png')} data={data}/></td>
                <td data-label="pandcard"><MyPopup title="PANCARD" path={require('../assets/images/aadhar.png')} data={data}/></td>
                <td data-label="sign" style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}><MyPopup title="SIGNATURE" path={require('../assets/images/aadhar.png')} data={data}/></td>
        </tr>
         </tbody>
        </table>
      </div>
    </div>
  );
}