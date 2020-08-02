import React,{useState} from 'react'
import BoardRow from "./BoardRow"
import "../../assets/styles/Tabular.css"
import {RejectReports} from "../../utils/api"


export default function Tabular({headers,data}) {
    const [reports, setReports] = useState(data);
    const handleClick = (id) => {
        // console.log(id);
        RejectReports(id)
        .then(res => {
        //   setRecords(res);
        //   setData(res);
          setReports(reports.filter(item => item.placeId!==id));
          console.log(res);
        })
        .catch(err=>console.log(err));
    };
    return (
        <div style={{backgroundColor:"#F6F7F9",margin:"30px", borderRadius:"10px"}}>
             <table className="board-container">
                            <thead>
                                <tr>
                                    {
                                    headers.map((item,index)=>
                                        <th scope="col" key={index}>{item}</th>    
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                reports.length===0 ? <div>No Records..</div> :
                                reports.map( (item,index) =>
                                    <BoardRow
                                    key={item.index}
                                    id={item.placeId}
                                    name={item.name}
                                    area={item.vicinity}
                                    reports={item.numberOfReports}
                                    rating={item.user_rating}
                                    handleClick={handleClick}
                                    // status={item.status}
                                    // otp={item.otp}
                                />
                                )}
                            </tbody>
                </table>
        </div>
    )
}
