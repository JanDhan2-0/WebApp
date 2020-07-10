import React from 'react';
import MyAppBar from '../components/basic/AppBar'
import { Container } from '@material-ui/core';
import MyCard from '../components/basic/Card';

export default function MyRecord() {
  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="feedback"/><br></br>
      <Container>
        <div style={{float:'right'}}>
          <h3>Reviews (21)</h3>
            <MyCard context="feedback"></MyCard><br></br>
            <MyCard context="feedback"></MyCard><br></br>
            <MyCard context="feedback"></MyCard><br></br>
            <MyCard context="feedback"></MyCard><br></br>
            <MyCard context="feedback"></MyCard>
        </div>
      </Container>
    </div>
  );
}