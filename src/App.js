import React, { Component } from 'react'

import Navigation from './components/navigation';
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
          <div>
            <div>
              <Navigation />
            </div>
            <div>
              <MapFunc />
            </div>
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

// <button style={{paddingTop: "100px"}} onClick={() => this.checkVal(this.state.currentTab)}>Check Value</button>
/* <Features data={this.state.landingPageData.Features} />
<About data={this.state.landingPageData.About} />
<Services data={this.state.landingPageData.Services} />
<Gallery />
<Testimonials data={this.state.landingPageData.Testimonials} />
<Team data={this.state.landingPageData.Team} />
<Contact data={this.state.landingPageData.Contact} /> */