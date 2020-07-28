import React,{useState} from "react";
import Popup from "reactjs-popup";
import { Button } from "@material-ui/core";
import "../../assets/styles/Search.css" 
import {sendOTP} from "../../utils/api"
import { useHistory } from "react-router-dom";

export default function SendOTP ()  {
  const history=useHistory();
  const [OTP, setOTP] = useState('');

  const handleChange = (e) => {
    let val=e.target.value;
    setOTP(val);
  };

  const handleSubmit = () =>{
    console.log(OTP);
    sendOTP(localStorage.getItem('Bank'),OTP)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    history.push(`/client/${OTP}`);
  };

  return(
    <Popup trigger={
        <div style={{padding:"10px", backgroundColor:"#f3f3f3", borderRadius:"5px", cursor:"pointer"}}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#3B77FA"/>
              </svg>
        </div>
        } 
      modal>
      {close => (
        <div className="modal">
              <h2 style={{fontFamily:"Roboto", textAlign:"center"}}>Enter OTP</h2>
          <div className="content" style={{padding:"20px"}}>
              <input id="otp" onChange={handleChange}/><br/>
          </div>
          <div className="actions">
            <center>
                <Button variant="contained" onClick={()=>{
                  handleSubmit();
                  close();
                  }} color="primary" style={{backgroundColor:'#3265D5',width:'47%', margin:"10px" }}>Save</Button>
                <Button variant="contained" onClick={close} color="primary" style={{backgroundColor:'#3265D5',width:'47%', margin:"10px" }}>Close</Button>
            </center>
          </div>
        </div>
      )}
  </Popup>
);
}