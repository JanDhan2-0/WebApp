import React from 'react';

import MyAppBar from '../basic/AppBar'
import MyTable from '../basic/Table'
import MyInfoBar from '../basic/InfoBar'
import MyDetails from '../basic/Details'

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