import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Info from './components/Pages/Info';

export default class App extends Component {
  componentDidMount() {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: process.env.RDS_HOSTNAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      port: process.env.RDS_PASSWORD,
      database: process.env.RDS_DB
    })

    connection.connect(function(err) {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
      }
    
      console.log('Connected to database.');
    });


  }

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