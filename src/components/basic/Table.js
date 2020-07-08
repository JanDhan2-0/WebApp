import React from 'react'
import MyCard from './Card'
import '../../assets/styles/style.css'

export default function MyTable (props){
    return (
        <div>
        <div className="table">
        <div className="table-header">
            {props.elements.map((value, index) => {
            return (<p className="table-header-text" key={index}>{value}</p>);
          })}
      </div>
      </div>
      <div style={{flexDirection:'column'}}>
                <MyCard status='rejected'/>
                <br></br>
                <MyCard status='rejected'/>
                <br></br>
                <MyCard status='pending'/>
                <br></br>
                <MyCard status='approved'/>
                <br></br>
                <MyCard status='approved'/>
                </div>
        </div>
    );
}