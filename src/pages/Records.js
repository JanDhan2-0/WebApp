import React, { useState,useEffect } from 'react';
import MyAppBar from '../components/basic/AppBar'
import MySearchBar from '../components/basic/SearchBar';
import Tabular from "../components/basic/Tabular"
import {ATMReports} from "../utils/api"
// import SendOTP from "../components/basic/sendOTP";

export default function Test() {
    const headers=["Id","Name","Area","Reports","Rating","Status"]
    const [value, setValue] = useState("");
    const [records, setRecords] = useState([]);
    const [data, setData] = useState([]);
    useEffect(()=>{
      // getRecords(localStorage.getItem('Bank'))
      // .then(res => {
      //   setRecords(res);
      //   setData(res);
      // })
      // .catch(err=>console.log(err));
      ATMReports()
      .then(res => {
        setRecords(res);
        setData(res);
        console.log(res);
      })
      .catch(err=>console.log(err));
      // eslint-disable-next-line 
    },[]);
    function handleChange(newValue) {
      setValue(newValue);
      setRecords(data.filter(item => item.placeId.includes(newValue)))
    }

  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="records"/>
      <br></br>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",paddingRight:"50px"}}>
            <MySearchBar value={value} onChange={handleChange}/>
            {/* <SendOTP/> */}
            {/* <div style={{padding:"10px", backgroundColor:"#f3f3f3", borderRadius:"5px", cursor:"pointer"}}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#3B77FA"/>
              </svg>
            </div> */}
        </div>
        {
          records.length!==0 && <Tabular headers={headers} data={records}/>
        }
        
    </div>
  );
}