import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Info from './components/Pages/Info';

export default class App extends Component {
  async componentDidMount() {
    // Gets data from testData database
    // let response = await fetch(process.env.REACT_APP_GET_API_ENDPOINT)
    // let data = await response.json()
    // console.log(data[0].firstName)

    // Pulls data from testData database

    const exampleObj = { firstName: 'final', lastName: 'testPerson' }
    fetch(process.env.REACT_APP_PUSH_API_ENDPOINT, {
      method: 'POST', // or 'PUT','
      mode: 'cors',
      body: JSON.stringify(exampleObj),
    })
    .then(response => { return response.json()})
    .then(json => console.log(json))
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