import React from 'react';
import '../../assets/styles/style.css'

export default function MyStatus(props) {
    switch (props.status) {
        case "pending":
            return(<p className="table-pending">&#9201; Pending</p>)
        case "rejected":
            return(<p className="table-rejected">&#10006; Rejected</p>)
        case "approved":
            return(<p className="table-accepted">&#10004; Approved</p>)
        default:
            break;
    }
}