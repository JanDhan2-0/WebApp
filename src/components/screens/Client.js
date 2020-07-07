import React from 'react';
import MyAppBar from '../basic/AppBar'
import MyTable from '../basic/Table'

export default function MyClient() {
  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="records"/>
      <br></br>
      <MyTable elements={["AADHAR","PANCARD", "SIGNATURE"]}/>
    </div>
  );
}