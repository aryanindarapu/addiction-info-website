import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>A website with extensive information on treatment for drug and alcohol addicts and their families. The website includes a map of treatment centers for each type of addiction, and giving users the option to rate a treatment center while allowing others to gain a better understanding of what works and what doesn't. There is also information about which treatments are more effective for each type of addiction.</p>
                <h3>The Developer - Aryan Indarapu</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      This website was developed by Aryan Indarapu in his senior year at Carmel High School. After learning about the issues that addiction presents, he wanted to make the information more widespread, trying to give a chance for anyone to learn about and find treatment for their addiction.
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
