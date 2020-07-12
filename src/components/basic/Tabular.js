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
                                data.map( (item,index) =>
                                    <BoardRow
                                    key={index}
                                    id={item.id}
                                    name={item.name}
                                    date={item.date}
                                    phone={item.phone}
                                    purpose={item.purpose}
                                    status={item.status}
                                />
                                )}
                            </tbody>
                </table>
        </div>
    )
}
