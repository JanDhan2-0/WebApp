import React from 'react'
import BoardRow from "./BoardRow"
import "../../assets/styles/Tabular.css"

export default function Tabular({headers,data}) {
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
                                data.length===0 ? <div>No Records..</div> :
                                data.map( (item,index) =>
                                    <BoardRow
                                    key={item.placeId}
                                    id={item.placeId}
                                    name={item.name}
                                    area={item.vicinity}
                                    reports={item.numberOfReports}
                                    rating={item.user_rating}
                                    // status={item.status}
                                    // otp={item.otp}
                                />
                                )}
                            </tbody>
                </table>
        </div>
    )
}
