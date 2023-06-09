import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route  path="/"><News key={"general"} pageSize={5} country="in" category="general"/></Route>
          <Route  path="/buisness"><News key={"buisness"} pageSize={5} country="in" category="buisness"/></Route>
          <Route  path="/entertainment"><News key={"entertainment"} pageSize={5} country="in" category="entertainment"/></Route>
          <Route  path="/health"><News key={"health"} pageSize={5} country="in" category="health"/></Route>
          <Route  path="/sports"><News key={"sports"} pageSize={5} country="in" category="sports"/></Route>
          <Route  path="/science"><News key={"science"} pageSize={5} country="in" category="science"/></Route>
          <Route  path="/technology"><News key={"technology"} pageSize={5} country="in" category="technology"/></Route>
          
        </Switch>
        </Router>
      </div>
    )
  }
}

