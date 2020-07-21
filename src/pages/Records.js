import React, { useState,useEffect } from 'react';
import axios from 'axios';
import MyAppBar from '../components/basic/AppBar'
import MySearchBar from '../components/basic/SearchBar';
import Tabular from "../components/basic/Tabular"

export default function Test() {
    const headers=["Form Id","Date","Name","Ph no","Purpose","Status"]
    const [value, setValue] = useState("");
    const [records, setRecords] = useState([]);
    useEffect(()=>{
      axios.get('http://jandhan2.herokuapp.com/account/bank/SBI/getAll ')
      .then(res => {
        setRecords(res.data.response);
      })
      .catch(err=>console.log(err));
    });
    function handleChange(newValue) {
      setValue(newValue);
      setRecords(records.filter(item => item.formId.includes(newValue)))
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