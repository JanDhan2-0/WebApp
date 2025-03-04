import React,{useState} from "react";
import Popup from "reactjs-popup";
import { Button } from "@material-ui/core";
import "../../assets/styles/Search.css" 
import {postUpdate} from "../../utils/api"
import IconButton from '@material-ui/core/IconButton';



export default function Broadcast ()  {
  const [formData, setFormData] = useState({
    title:'',
    description:'',
    designation:'',
    location:'',
    additionalFileUrl:'',
    date:new Date().toISOString().slice(0,10),
    time:new Date().toTimeString().slice(0,8),
    postBy:'SBI',
    imageUrl:"#"
  });

  const handleChange = (e) => {
    let field=e.target.id;
    let val=e.target.value;
    setFormData(prevState => ({
      ...prevState,
      [field]: val
    }));
  };

  const handleSubmit = () =>{
    console.log(formData);
    postUpdate(formData)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err));
  };

  return(
    <Popup trigger={
        <Button style={{background:"#3B77FA", height:"50px",color:"white", borderRadius:"8px", padding:"12px", border:0, display:"inline-flex", justifyContent:"center", alignItems:"center", pointerEvents:"cursor"}}>
            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4998 16.0417C15.8957 16.0417 14.5832 17.3542 14.5832 18.9583C14.5832 20.5625 15.8957 21.875 17.4998 21.875C19.104 21.875 20.4165 20.5625 20.4165 18.9583C20.4165 17.3542 19.104 16.0417 17.4998 16.0417ZM26.2498 18.9583C26.2498 14.1313 22.3269 10.2083 17.4998 10.2083C12.6728 10.2083 8.74984 14.1313 8.74984 18.9583C8.74984 22.1958 10.5144 25.0104 13.1248 26.5271L14.5832 23.9896C12.8478 22.9688 11.6665 21.1167 11.6665 18.9583C11.6665 15.7354 14.2769 13.125 17.4998 13.125C20.7228 13.125 23.3332 15.7354 23.3332 18.9583C23.3332 21.1167 22.1519 22.9688 20.4165 23.9896L21.8748 26.5271C24.4853 25.0104 26.2498 22.1958 26.2498 18.9583ZM17.4998 4.375C9.44984 4.375 2.9165 10.9083 2.9165 18.9583C2.9165 24.3542 5.84775 29.05 10.1936 31.5729L11.6519 29.05C8.18109 27.0229 5.83317 23.275 5.83317 18.9583C5.83317 12.5125 11.054 7.29167 17.4998 7.29167C23.9457 7.29167 29.1665 12.5125 29.1665 18.9583C29.1665 23.275 26.8186 27.0229 23.3332 29.05L24.7915 31.5729C29.1519 29.05 32.0832 24.3542 32.0832 18.9583C32.0832 10.9083 25.5498 4.375 17.4998 4.375Z" fill="white"/>
            </svg>
            <span style={{paddingLeft:"4px", fontSize:"14px"}}>Broadcast</span>
        </Button>} 
      modal contentStyle={{width:"700px"}}>
      {close => (
        <div className="modal">
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <h2 style={{fontFamily:"Roboto", textAlign:"center", width:"90%"}}>Broadcast Information</h2>
                  <IconButton onClick={close}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
                    </svg>
                  </IconButton>
              </div>
          <div className="content" style={{padding:"20px"}}>
              <label>Title</label><br/>
              <input id="title" onChange={handleChange}/><br/>
              <label>Designation</label><br/>
              <input id="designation" onChange={handleChange}/><br/>
              <label>Description</label><br/>
              <input id="description" onChange={handleChange}/><br/>
              <label>Location</label><br/>
              <input id="location" onChange={handleChange} /><br/>
              <label>Additional comments</label><br/>
              <input id="additionalFileUrl" onChange={handleChange}/><br/>
          </div>
          <div className="actions" style={{padding:"0 20px 10px"}}>
            <center>
                <Button variant="contained" onClick={()=>{
                  handleSubmit();
                  close();
                  }} color="primary" style={{backgroundColor:'#3265D5',width:'100%' }}>Save</Button>
            </center>
          </div>
        </div>
      )}
  </Popup>
);
}