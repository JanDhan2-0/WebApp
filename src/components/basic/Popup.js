import React from "react";
import Popup from "reactjs-popup";
import { Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
 
export default (props) => (
    <Popup trigger={<Link style={{fontFamily:'Roboto',fontSize:'30px',paddingTop:'30px'}}>View</Link>} modal>
    {close => (
      <div className="modal">
          <center>
    <h2 style={{fontFamily:"Roboto"}}>{props.title}</h2>
        </center>
        <div className="content">
        <Container>
            <center>
            <img src={props.path} alt="Not showing"/><br></br>
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