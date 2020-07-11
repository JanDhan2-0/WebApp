import React from 'react';
import MyAppBar from '../components/basic/AppBar'
import MySearchBar from '../components/basic/SearchBar';
import Tabular from "../components/basic/Tabular"

export default function Test() {
  const data=[
      {
          id:"SBI123",
          date:"05/06/20",
          name:"Raj Malhotra",
          phone:"9645235976",
          purpose:"A/C creation",
          status:"pending"
      },
      {
        id:"SBI563",
        date:"21/06/20",
        name:"Sooraj Kapoor",
        phone:"9645235976",
        purpose:"A/C creation",
        status:"approved"
    },
    {
        id:"SBI223",
        date:"05/07/20",
        name:"Raj Malhotra",
        phone:"9645235976",
        purpose:"A/C creation",
        status:"rejected"
    },
    {
        id:"SBI123",
        date:"05/06/20",
        name:"Raj Malhotra",
        phone:"9645235976",
        purpose:"A/C creation",
        status:"pending"
    },
    ];
    const headers=["Form Id","Date","Name","Ph no","purpose","status"]
  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="records"/>
      <br></br>
        <MySearchBar/>
        <Tabular headers={headers} data={data}/>
    </div>
  );
}