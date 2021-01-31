import React, { Component } from "react";

import { CarouselSlider } from '../CarouselSlider';
import '../../index.css';

export class Info extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <h2>Types of Treatment Programs</h2>
        <div className="section-title">
          <CarouselSlider />
        </div>
        {/* <div className="row">
          {this.props.data
            ? this.props.data.map((d, i) => (
                <div  key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    );
  }
}

export default Info;
