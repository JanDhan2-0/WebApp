import React,{useState} from 'react';
import { Button } from "@material-ui/core";
import Logo from "../assets/images/logo.png";
import {UserLogin} from "../utils/api";
import { useHistory } from "react-router-dom";


export default function Login() {
  const history=useHistory();
  const [credential, setCredential] = useState({
      email:"",
      password:""
  });
  const [loading,setLoading]=useState(false);
  const handleChange = (e) =>{
      var field=e.target.id;
      var val=e.target.value;
      setCredential(prevState => ({
        ...prevState,
        [field]: val
      }));
  };
  const handleSubmit = () =>{
      setLoading(true);
      UserLogin(credential)
      .then(res => {
        localStorage.setItem("Bank",res.user.displayName);
        history.push('/');
        console.log(res.user);
        })
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
                <Button variant="contained" onClick={handleSubmit} color="primary" style={{backgroundColor:'#3265D5',width:'100%'}}>{loading ? "Signing in..":"Login"}</Button>
        </div>
    </div>
  );
}