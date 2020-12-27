import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Info from './components/Info';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/info" exact component={Info} />
        </Switch>
      </Router>
    )
  }
}