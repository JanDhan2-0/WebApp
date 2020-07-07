import React from 'react'
import '../../assets/styles/style.css'
import MyStatus from './Status';

export default function MyCard(props) {
    return (
        <div className="card">
            <a href="/" className="form-id">SBI-265</a>
              <p className="form-content">05/06/20</p>
              <p className="form-content">Raj Malhotra</p>
              <p className="form-content">9876543201</p>
              <p className="form-content">A/C Creation</p>
              <MyStatus status={props.status}/>
        </div>
    );
}