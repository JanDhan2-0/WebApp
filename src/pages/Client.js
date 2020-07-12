import React from 'react';

import MyAppBar from '../components/basic/AppBar'
import MyInfoBar from '../components/basic/InfoBar'
import MyDetails from '../components/basic/Details'
import "../assets/styles/Tabular.css"
import MyPopup from "../components/basic/Popup"


export default function MyClient() {
  const headers=["AADHAR","PANCARD", "SIGNATURE"];
  return (
    <div>
      <MyAppBar active="records"/>
      <br></br>
      <MyInfoBar/>
      <div style={{backgroundColor:"#EFF0F3", margin:"20px", padding:"30px", borderRadius:"10px"}}>
      <MyDetails/>
      <table className="board-container">
        <thead>
            <tr>
                {
                headers.map(item=>
                    <th scope="col">{item}</th>    
                )}
            </tr>
        </thead>
        <tbody>
        <tr className="row-data">
                <td data-label="id"><MyPopup title="AADHAR" path={require('../assets/images/aadhar.png')}/></td>
                <td data-label="date"><MyPopup title="AADHAR" path={require('../assets/images/aadhar.png')}/></td>
                <td data-label="name"><MyPopup title="AADHAR" path={require('../assets/images/aadhar.png')}/></td>
        </tr>
         </tbody>
        </table>
      </div>
    </div>
  );
}