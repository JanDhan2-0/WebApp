import React from 'react';
import MyAppBar from '../components/basic/AppBar'
import Broadcast from "../components/basic/Broadcast";
import { Container } from "@material-ui/core";


export default function MyRecord() {
  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="analytics"/>
      <Container>
        <div style={{display:"flex", justifyContent:"space-between", margin:"32px 0"}}>
          <h1>Analytics</h1>
          <Broadcast/>
        </div>
      </Container>
    </div>
  );
}