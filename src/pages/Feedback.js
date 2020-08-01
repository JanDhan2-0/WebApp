import React,{useEffect,useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import MyAppBar from '../components/basic/AppBar'
import MyProgress from '../components/basic/Progress'
import { Button } from "@material-ui/core";
import {getFeedbacks,feedbackMetrics} from "../utils/api";
import {activeBtn,styleBtn} from "./Analytics"
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';


export default function MyRecord() {
  const [reviews, setReviews]=useState(null);
  const [data, setData]=useState([
    {"keyword": "ATM", "no_occurances": 430, "avg_rating": 430},
    {"keyword": "Service", "no_occurances": 180, "avg_rating":180},
    {"keyword": "Staff", "no_occurances": 284, "avg_rating": 284},
    {"keyword": "Location", "no_occurances": 65,"avg_rating": 65},
    {"keyword": "Environment", "no_occurances": 32, "avg_rating": 32}
  ]);
  const [value, setValue] = React.useState('BANK');
  const style={
    display:'flex',
    padding:'20px'
  };
  const formatDate = (date) => {
    if(date===null) return;
    var dob = new Date(date);
    var dobArr = dob.toDateString().split(' ');
    var dobFormat = dobArr[2] + ' ' + dobArr[1] + ' ' + dobArr[3];
    return dobFormat;
  };
  const percentFunc = (arr) => {
    let sum= arr.reduce((s,i)=> s + i);
    arr.map( (val,i) => (
      arr[i]=parseInt((val*100)/sum)
    ));
    return arr;
  };
  useEffect(()=>{
    getFeedbacks(localStorage.getItem('Bank'),value)
    .then(res => {
      setReviews(res);
    })
    .catch(err=>console.log(err));
    feedbackMetrics()
    .then(res=>{
      console.log(res);
      console.log(data);
      // setData(res);
    })
    .catch(err=>console.log(err));
  },[value]);
  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="feedback"/><br></br>
      {
        reviews===null ? <div>Loading</div> :(
      <div>
          <div style={{padding:"24px 0"}}>
            <Button style={value==='BANK' ? activeBtn : styleBtn} onClick={()=>setValue('BANK')}>BANKS</Button>
            <Button style={value==='ATM' ? activeBtn : styleBtn} onClick={()=>setValue('ATM')}>ATMS</Button>
          </div>
      <div style={style}>
        <div style={{width:"40%", padding:"0 20px"}}>
        <h1>{reviews.averageRating.toFixed(2)}</h1>
          <Rating name="read-only" value={reviews.averageRating.toFixed(2)} precision={0.25} readOnly />
          <div>Based on {reviews.totalReviews} Reviews</div><br></br>
           {percentFunc(Object.values(reviews.ratingDetails).reverse()).map((item,index)=>
             <MyProgress value={item} rating={5-index} key={index}/>
           )}
          <RadarChart cx={250} cy={200} outerRadius={150} width={500} height={350} data={data}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="keyword" />
                  <PolarRadiusAxis />
                  <Radar name="Occurances" dataKey="no_occurances" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
          <RadarChart cx={250} cy={200} outerRadius={150} width={500} height={350} data={data}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="keyword" />
                  <PolarRadiusAxis />
                  <Radar name="Rating" dataKey="avg_rating" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </div>
        <div style={{width:"60%", padding:"20px 0 0"}}>
          <h3>Reviews ({reviews.totalReviews})</h3>
            {
              reviews.response.map(item =>
                <div style={  {backgroundColor:"#EAEAEA", padding:"10px 20px", marginBottom:"20px", borderRadius:"5px"}}>
                  <h3 style={{marginBottom:"2px"}}>{item.feedbackBy}</h3>
                  <p style={{margin:0, fontSize:"14px"}}>{formatDate(item.date)}</p>
                  <Rating name="read-only" value={item.rating} precision={0.25} readOnly/>
                  <p>{item.feebdack}</p>
              <p><strong>Location: </strong>{item.location}</p>
                </div>
              )
            }
        </div>
      </div>
      </div>
      )
      }
    </div>
  );
}