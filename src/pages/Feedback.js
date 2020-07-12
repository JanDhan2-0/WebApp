import React from 'react';
import MyAppBar from '../components/basic/AppBar'

export default function MyRecord() {
  const style={
    display:'flex',
    padding:'20px'
  };
  const data=[
    {
      name:"Rajendra Shah",
      date:"11th July",
      review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
      name:"Chhavi Malhotra",
      date:"12th July",
      review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
      name:"Anushka Singh",
      date:"15th July",
      review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
  ];
  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="feedback"/><br></br>
      <div style={style}>
        <div style={{width:"30%", padding:"0 20px"}}>
          <h1>4.88</h1>
          <div>Based on 21 Reviews</div>
          <div>5 stars</div>
          <div>4 stars</div>
          <div>3 stars</div>
          <div>2 stars</div>
          <div>1 stars</div>
        </div>
        <div style={{width:"70%", padding:"20px 0 0"}}>
          <h3>Reviews (21)</h3>
            {
              data.map(item =>
                <div style={  {backgroundColor:"#EAEAEA", padding:"10px 20px", marginBottom:"20px", borderRadius:"5px"}}>
                  <h3>{item.name}</h3>
                  <p>{item.date}</p>
                  <p>{item.review}</p>
                </div>
              )
            }
        </div>
      </div>
    </div>
  );
}