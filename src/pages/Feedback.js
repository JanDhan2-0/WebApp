import React from 'react';
import MyAppBar from '../components/basic/AppBar'

export default function MyRecord() {
  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="feedback"/>
    </div>
  );
}