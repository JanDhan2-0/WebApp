import React from "react";
import Popup from "reactjs-popup";
import { Button, Container } from "@material-ui/core";
 
export default (props) => (
    <Popup trigger={
    <button style={{background:"#3B77FA", height:"60px",color:"white", borderRadius:"10px", padding:"12px", border:0, display:"inline-flex", justifyContent:"center", alignItems:"center"}}>
        <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4998 16.0417C15.8957 16.0417 14.5832 17.3542 14.5832 18.9583C14.5832 20.5625 15.8957 21.875 17.4998 21.875C19.104 21.875 20.4165 20.5625 20.4165 18.9583C20.4165 17.3542 19.104 16.0417 17.4998 16.0417ZM26.2498 18.9583C26.2498 14.1313 22.3269 10.2083 17.4998 10.2083C12.6728 10.2083 8.74984 14.1313 8.74984 18.9583C8.74984 22.1958 10.5144 25.0104 13.1248 26.5271L14.5832 23.9896C12.8478 22.9688 11.6665 21.1167 11.6665 18.9583C11.6665 15.7354 14.2769 13.125 17.4998 13.125C20.7228 13.125 23.3332 15.7354 23.3332 18.9583C23.3332 21.1167 22.1519 22.9688 20.4165 23.9896L21.8748 26.5271C24.4853 25.0104 26.2498 22.1958 26.2498 18.9583ZM17.4998 4.375C9.44984 4.375 2.9165 10.9083 2.9165 18.9583C2.9165 24.3542 5.84775 29.05 10.1936 31.5729L11.6519 29.05C8.18109 27.0229 5.83317 23.275 5.83317 18.9583C5.83317 12.5125 11.054 7.29167 17.4998 7.29167C23.9457 7.29167 29.1665 12.5125 29.1665 18.9583C29.1665 23.275 26.8186 27.0229 23.3332 29.05L24.7915 31.5729C29.1519 29.05 32.0832 24.3542 32.0832 18.9583C32.0832 10.9083 25.5498 4.375 17.4998 4.375Z" fill="white"/>
        </svg>
        <span style={{paddingLeft:"10px", fontSize:"20px"}}>Broadcast</span>
    </button>} modal>
    {close => (
      <div className="modal">
          <center>
            <h2 style={{fontFamily:"Roboto"}}>Broadcast Information</h2>
        </center>
        <div className="content">
        <Container>
            jhhhh
        </Container>
        </div>
        <div className="actions">
            <center>
        <Button variant="contained" onClick={close} color="primary" style={{backgroundColor:'#3265D5',width:'450px'}}>Close</Button>
        </center>
        </div>
      </div>
    )}
  </Popup>
);