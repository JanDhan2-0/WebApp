import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import MyAppBar from '../components/basic/AppBar'
import MyProgress from '../components/basic/Progress'

export default function MyRecord() {
  const [reviews, setReviews]=useState(null);
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
  useEffect(()=>{
    axios.get('https://jandhan2.herokuapp.com/feedback/bank/SBI/touchPoint/ATM/reviews')
    .then(res => {
      setReviews(res.data);
    })
    .catch(err=>console.log(err));
  },[]);
  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="feedback"/><br></br>
      {
        reviews===null ? <div>Loading</div> :(
          <div>
      <div style={style}>
        <div style={{width:"30%", padding:"0 20px"}}>
        <h1>{reviews.averageRating.toFixed(2)}</h1>
          <Rating name="read-only" value={reviews.averageRating.toFixed(2)} precision={0.25} readOnly />
          <div>Based on {reviews.totalReviews} Reviews</div><br></br>
           {Object.values(reviews.ratingDetails).reverse().map((item,index)=>
             <MyProgress value={item} rating={5-index} key={index}/>
           )}
        </div>
        <div style={{width:"70%", padding:"20px 0 0"}}>
          <h3>Reviews ({reviews.totalReviews})</h3>
            {
              reviews.response.map(item =>
                <div style={  {backgroundColor:"#EAEAEA", padding:"10px 20px", marginBottom:"20px", borderRadius:"5px"}}>
                  <h3 style={{marginBottom:"2px"}}>{item.feedbackBy}</h3>
                  <p style={{margin:0, fontSize:"12px"}}>{formatDate(item.date)}</p>
                  <p>{item.feebdack}</p>
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