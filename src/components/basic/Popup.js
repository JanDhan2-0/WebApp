import React from "react";
import Popup from "reactjs-popup";
import { Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
 
export default (props) => (
    <Popup trigger={<Link style={{fontSize:'1.2em',paddingTop:'30px'}} to={{pathname:`/client/${props.data}`,data:props.data}}>View</Link>} modal>
          {close => (
            <div className="modal" style={{height:"75vh", overflowY:"scroll"}}>
              <h2 style={{fontFamily:"Roboto"}} style={{position:"sticky", top:0, left:0, textAlign:"center", backgroundColor:"#fff", padding:"20px 0"}}>{props.title}</h2>
              <div className="content">
                    <img src={props.path} alt="Details" style={{width:"100%",height:"100%"}}/><br></br>
              </div>
              <div className="actions">
                    <Button variant="contained" onClick={close} color="primary" style={{backgroundColor:'#3265D5',width:'100%'}}>Close</Button>
              </div>
            </div>
          )}
      </Popup>
);