import React, {useEffect} from 'react'
import MyCard from './Card'
import '../../assets/styles/style.css'
import '../../App.css'

export default function MyTable (props){
  useEffect(() => {
    if(props.context==='client'){
    document.getElementById("tab").style.top='500px'
    document.getElementById("tab").style.height='200px'
    document.getElementById("viewtable").style.paddingLeft='150px'
    }
  });
    return (
        <div>
        <div className="table" id="tab">
        <div className="table-header">
            {props.elements.map((value, index) => {
            return (<p className="table-header-text" key={index} id="viewtable">{value}</p>);
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