import React, { Component } from "react";

import { CarouselSlider } from '../CarouselSlider';
import { MedTabs } from '../MedTabs';
import '../../index.css';

class Info extends Component {
  render() {
    return (
      <div id="treatment-types" className="text-center">
        <h2>Types of Treatment Programs</h2>
        <div className="section-title">
          <CarouselSlider />
        </div>
        <MedTabs />
      </div>
    );
  }
}

export default Info;
