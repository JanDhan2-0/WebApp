import React,{useEffect} from 'react';
import axios from 'axios';
import MyAppBar from '../components/basic/AppBar'
import Broadcast from "../components/basic/Broadcast";
import { Button } from "@material-ui/core";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const styleBtn = {
  boxSizing:'border-box',
  color:"#3B77FA",
  borderRadius:0,
  fontSize:"16px",
  padding:"8px 16px",
  margin:"16px"
}

const activeBtn = {
  boxSizing:'border-box',
  color:"#3B77FA",
  borderBottom:"2px solid #3B77FA",
  borderRadius:0,
  fontSize:"16px",
  padding:"8px 16px",
  margin:"16px"
}

export default function MyRecord() {
  const [value, setValue] = React.useState(1);
  const [feedbackData, setFeedbackData] = React.useState([]);
  const [missingBank, setMissingBank] = React.useState([]);
  const [missingATM, setMissingATM] = React.useState([]);
  const [requestBank, setRequestBank] = React.useState([]);
  const [requestATM, setRequestATM] = React.useState([]);

  useEffect(()=>{
    axios.get('https://jandhan2.herokuapp.com/feedback/bank/SBI/feedbackChart ')
    .then(res => {
      var val=[];
      Object.keys(res.data.response).map(key=>(
        val.push({
          name:key,
          count:res.data.response[key]
        })
      ));
      setFeedbackData(val);
    })
    .catch(err=>console.log(err));

    axios.get('https://jandhan2.herokuapp.com/missing/bank/SBI/touchPoint/BANK/getDetails ')
    .then(res => {
      var val=[];
          // eslint-disable-next-line 
      res.data.map((ele)=>{
        let key=Object.keys(ele)[0];
        val.push({
          name:key,
          count:ele[key].count
        })
      });
      setMissingBank(val);
    })
    .catch(err=>console.log(err));

    axios.get('https://jandhan2.herokuapp.com/missing/bank/SBI/touchPoint/ATM/getDetails ')
    .then(res => {
      var val=[];
          // eslint-disable-next-line 
      res.data.map((ele)=>{
        let key=Object.keys(ele)[0];
        val.push({
          name:key,
          count:ele[key].count
        })
      });
      setMissingATM(val);
    })
    .catch(err=>console.log(err));


    axios.get('https://jandhan2.herokuapp.com/request/bank/SBI/touchPoint/BANK/getDetails ')
    .then(res => {
      var val=[];
          // eslint-disable-next-line 
      res.data.map((ele)=>{
        let key=Object.keys(ele)[0];
        val.push({
          name:key,
          count:ele[key].count
        })
      });
      setRequestBank(val);
    })
    .catch(err=>console.log(err));

    axios.get('https://jandhan2.herokuapp.com/request/bank/SBI/touchPoint/ATM/getDetails ')
    .then(res => {
      var val=[];
          // eslint-disable-next-line 
      res.data.map((ele)=>{
        let key=Object.keys(ele)[0];
        val.push({
          name:key,
          count:ele[key].count
        })
      });
      setRequestATM(val);
    })
    .catch(err=>console.log(err));
    // eslint-disable-next-line 
  },[]);

  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="analytics"/>
        <div style={{padding:"32px 40px"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <h1>Analytics</h1>
          <Broadcast/>
        </div>
        <div style={{padding:"16px 0"}}>
          <Button style={value===1 ? activeBtn : styleBtn} onClick={()=>setValue(1)}>REPORTS</Button>
          <Button style={value===2 ? activeBtn : styleBtn} onClick={()=>setValue(2)}>REQUESTS</Button>
        </div>

              {value===1 && (
                <RadarChart cx={800} cy={250} outerRadius={200} width={1500} height={500} data={feedbackData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis />
                  <Radar name="Mike" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
              )}

              

              {value===2 && (
                <>
                  <div style={{display:"flex", justifyContent:"space-around"}}>
                    <>
                      <h3>Missing Banks</h3><br/>
                    <LineChart
                          width={500}
                          height={300}
                          data={missingBank}
                          margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                      </>

                      <>
                        <h3>Missing ATM</h3><br/>
                        <LineChart
                          width={500}
                          height={300}
                          data={missingATM}
                          margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                      </>
                    </div>

                    <div style={{display:"flex", justifyContent:"space-around"}}>
                    
                    <>
                      <h3>Request Bank</h3><br/>
                    <LineChart
                          width={500}
                          height={300}
                          data={requestBank}
                          margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </>

                    <>
                      <h3>Request ATM</h3><br/>
                        <LineChart
                          width={500}
                          height={300}
                          data={requestATM}
                          margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </>
                    </div>
                </>
              )}
        </div>
    </div>
  );
}