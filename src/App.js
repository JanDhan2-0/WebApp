import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MyRecord from './components/screens/Records'
import MyAnalytics from './components/screens/Analytics'
import MyFeedback from './components/screens/Feedback'
import MyClient from './components/screens/Client'

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
          <Route path="/client">
            <MyClient />
          </Route>
          <Route path="/">
            <MyRecord />
          </Route>
      </Switch>
    </Router>
  );
}