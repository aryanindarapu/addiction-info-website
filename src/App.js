import React, { Component } from 'react'

import Navigation from './components/Navigation';
import MapFunc from './components/MapFunc';
import About from './components/about';
import Info from './components/info';

export function tabChange(clickedTab) {
  this.setState({currentTab: clickedTab})
}


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: "home",
    }
  }

  componentDidMount() {
    tabChange = tabChange.bind(this)
  }

  checkVal = (value) => {
    console.log("Context value is: " + value)
  }

  render() {
    switch (this.state.currentTab){
      case 'home':
        return (
          // TODO Add Yelp-like review system
          // TODO Add navbar back to div
          <div>
            <Navigation />
            <MapFunc />
          </div>
        )
      case 'about':
        return (
          <div>
            <Navigation />
            <About />
          </div>
        )
      case 'info':
        return (
          <div>
            <Navigation />
            <Info />
          </div>
        )
      default:
        return (
          <div>
            <Navigation />
            <MapFunc />
          </div>
        )
    }
        
  }
}