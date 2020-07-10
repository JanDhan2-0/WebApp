import React from 'react';
import MyAppBar from '../components/basic/AppBar'
import MyTable from '../components/basic/Table'
import MySearchBar from '../components/basic/SearchBar';

export default function MyRecord() {
  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="records"/>
      <br></br>
        <MySearchBar/>
        <MyTable elements={["FORM ID","DATE", "NAME", "PHNO", "PURPOSE", "STATUS"]} context="records" cards={["SBI123","SBI234","SBI345","SBI345","SBI456"]} status={["rejected","rejected","pending","approved","approved"]}/>
    </div>
  );
}