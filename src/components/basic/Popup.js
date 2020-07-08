import React from "react";
import Popup from "reactjs-popup";
import { Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
 
export default () => (
    <Popup trigger={<Link style={{fontFamily:'Roboto',fontSize:'30px',paddingTop:'30px'}}>View</Link>} modal>
    {close => (
      <div className="modal">
          <center>
        <h2 style={{fontFamily:"Roboto"}}>AADHAR</h2>
        </center>
        <div className="content">
        <Container>
            <center>
            <img src={require('../../assets/images/aadhar.png')} alt="Not showing"/><br></br>
            <img src={require('../../assets/images/aadhar2.png')} alt="Not showing"/>
            </center>
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