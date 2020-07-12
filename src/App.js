import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MyRecord from './pages/Records'
import MyAnalytics from './pages/Analytics'
import MyFeedback from './pages/Feedback'
import MyClient from './pages/Client'

export default function MyApp() {
  return (
    <Router>
      <Switch>
      <Route path="/feedback">
            <MyFeedback />
          </Route>
          <Route path="/analytics">
            <MyAnalytics />
          </Route>
          <Route exact path="/client" component={(props)=><MyClient {...props}/>}/>
          <Route path="/">
            <MyRecord />
          </Route>
      </Switch>
    </Router>
  );
}