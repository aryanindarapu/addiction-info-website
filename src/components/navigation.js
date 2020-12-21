import React, { Component } from "react";

import { tabChange } from '../App';

export class Navigation extends Component {
  // changeTab = (tabName) => {
  //   this.setState({currentTab: tabName}, () => console.log("Navbar value is: " + this.state.currentTab))
  // }

  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Addiction Treatments
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#home" onClick={() => tabChange("home")} >
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => tabChange("about")} >
                  About
                </a>
              </li>
              <li>
                <a href="#info" onClick={() => tabChange("info")} >
                  More Information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
