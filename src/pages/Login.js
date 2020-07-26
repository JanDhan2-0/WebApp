import React,{useState} from 'react';
import { Button } from "@material-ui/core";
import Logo from "../assets/images/logo.png";
import {UserLogin} from "../utils/api";

export default function Login() {
  const [credential, setCredential] = useState({
      email:"",
      password:""
  });
  const handleChange = (e) =>{
      var field=e.target.id;
      var val=e.target.value;
      setCredential(prevState => ({
        ...prevState,
        [field]: val
      }));
  };
  const handleSubmit = () =>{
      UserLogin(credential)
      .then(res => console.log(res.user))
      .catch(err=>console.log(err));
  };
  return (
    <div>
        <div style={{width:"500px", boxShadow: "2px 1px 12px rgba(0, 0, 0, 0.15)", padding:"50px", margin:"150px auto", borderRadius:"10px"}}>
                <center>
                    <img src={Logo} alt="Jan Dhan Logo"/>
                </center>
                <label>User ID</label>
                <input type="email" id="email" onChange={handleChange} style={{width:"100%"}} placeholder="admin@bank.com"/>
                <label>Password</label>
                <input type="password" id="password" onChange={handleChange} style={{width:"100%"}} placeholder="password"/>
                <Button variant="contained" onClick={handleSubmit} color="primary" style={{backgroundColor:'#3265D5',width:'100%'}}>Login</Button>
        </div>
    </div>
  );
}