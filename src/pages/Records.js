import React, { useState } from 'react';
import MyAppBar from '../components/basic/AppBar'
import MySearchBar from '../components/basic/SearchBar';
import Tabular from "../components/basic/Tabular"

export default function Test() {
  let data=[
      {
          id:"SBI123",
          date:"05/06/20",
          name:"Raj Malhotra",
          phone:"9645235976",
          purpose:"A/C creation",
          status:"Pending"
      },
      {
        id:"SBI563",
        date:"21/06/20",
        name:"Sooraj Kapoor",
        phone:"9645235976",
        purpose:"A/C creation",
        status:"Approved"
    },
    {
        id:"SBI223",
        date:"05/07/20",
        name:"Raj Malhotra",
        phone:"9645235976",
        purpose:"A/C creation",
        status:"Rejected"
    },
    {
        id:"SBI423",
        date:"05/06/20",
        name:"Raj Malhotra",
        phone:"9645235976",
        purpose:"A/C creation",
        status:"Pending"
    },
    ];
    const headers=["Form Id","Date","Name","Ph no","Purpose","Status"]
    const [value, setValue] = useState("");
    const [rec, setRecords] = useState(data);
    function handleChange(newValue) {
      setValue(newValue);
      setRecords(data.filter(item => item.id.includes(newValue)))
    }

  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="records"/>
      <br></br>
        <MySearchBar value={value} onChange={handleChange}/>
        <Tabular headers={headers} data={rec}/>
    </div>
  );
}