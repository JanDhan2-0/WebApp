import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Records from './pages/Records'
import MyAnalytics from './pages/Analytics'
import MyFeedback from './pages/Feedback'
import MyClient from './pages/Client'
import Login from "./pages/Login"
import ProtectedRoute from "./Router/ProtectedRoute";

const token=localStorage.Bank;
var status=false;
if(token){
  status=true;
}

export default function App() {
  return (
    <Router>
      <Switch>
          {/* <ProtectedRoute status={status} exact path="/" component={Records}/> */}
          <ProtectedRoute status={status} exact path="/" component={MyFeedback}/>
          <Route path="/login" component={Login}/>
          {/* <ProtectedRoute status={status} path="/feedback" component={MyFeedback}/> */}
          {/* <ProtectedRoute status={status} path="/analytics" component={MyAnalytics}/> */}
          {/* <ProtectedRoute status={status} path="/client/:id" component={(props)=><MyClient {...props}/>}/> */}
      </Switch>
    </Router>
  );
}