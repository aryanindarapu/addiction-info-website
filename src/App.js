import React, { Component } from 'react'

import Navigation from './components/navigation';
import HeaderMap from './components/HeaderMap';
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
    this.pickTab = this.pickTab(this)
  }

  pickTab = (tabName) => {
    console.log(tabName)
    switch (tabName){
      case 'home':
        return <HeaderMap />
      case 'about':
        return <About />  
      case 'info':
        return <Info />
      default:
        return <HeaderMap />
    }
        
  }

  checkVal = (value) => {
    console.log("Context value is: " + value)
  }

  render() {
    switch (this.state.currentTab){
      case 'home':
        return (
          <div>
            <Navigation />
            <HeaderMap />
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
            <HeaderMap />
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