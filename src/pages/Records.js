import React, { useState,useEffect } from 'react';
import axios from 'axios';
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
    const [rec, setRec] = useState(data);
    const [records, setRecords] = useState([]);
    useEffect(()=>{
      axios.get('http://jandhan2.herokuapp.com/account/bank/SBI/getAll ')
      .then(res => {
        setRecords(res.data.response);
      })
      .catch(err=>console.log(err));
    },[]);
    function handleChange(newValue) {
      setValue(newValue);
      setRec(data.filter(item => item.id.includes(newValue)))
    }

  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="records"/>
      <br></br>
        <MySearchBar value={value} onChange={handleChange}/>
        {records.length===0 ? <div>Loading</div> : <Tabular headers={headers} data={records}/>}
    </div>
  );
}