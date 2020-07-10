import React from 'react';

import MyAppBar from '../components/basic/AppBar'
import MyTable from '../components/basic/Table'
import MyInfoBar from '../components/basic/InfoBar'
import MyDetails from '../components/basic/Details'

export default function MyClient() {
  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="records"/>
      <br></br>
      <MyInfoBar/>
      <div>
      <MyDetails/>
        <MyTable elements={["AADHAR","PANCARD", "SIGNATURE"]} context="client" status={["null"]} cards={["null"]} />
      </div>
    </div>
  );
}