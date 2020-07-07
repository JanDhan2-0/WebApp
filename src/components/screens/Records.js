import React from 'react';
import MyAppBar from '../basic/AppBar'
import MyTable from '../basic/Table'
import MySearchBar from '../basic/SearchBar';

export default function MyRecord() {
  return (
    <div style={{flexGrow:1}}>
      <MyAppBar active="records"/>
      <br></br>
        <MySearchBar/>
        <MyTable elements={["FORM ID","DATE", "NAME", "PHNO", "PURPOSE", "STATUS"]}/>
    </div>
  );
}