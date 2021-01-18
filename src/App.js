import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Info from './components/Pages/Info';

export default class App extends Component {
  render() {
    return (
      <div style={{overflowX: 'hidden'}}>
        <Router>
          <Navbar />
          
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/info" exact component={Info} />
          </Switch>
        </Router>
      </div> 
    )
  }
}