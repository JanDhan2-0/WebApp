import React from 'react';
import MyAppBar from '../basic/AppBar'
import MyTable from '../basic/Table'
import MyInfoBar from '../basic/InfoBar'
export default function MyClient() {
  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="records"/>
      <br></br>
      <MyInfoBar/>
      <MyTable elements={["AADHAR","PANCARD", "SIGNATURE"]} context="client" status={["null"]} cards={["null"]}/>
    </div>
  );
}