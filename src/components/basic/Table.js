import React from 'react'
import MyCard from './Card'
import '../../assets/styles/style.css'
import '../../App.css'

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
      {props.cards.map((value, index) => {
            return (<MyCard status={props.status[index]} key={index} context={props.context} formid={value}/>);
          })}
        </div>
        </div>
    );
}