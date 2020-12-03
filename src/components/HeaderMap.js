import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



class HeaderMap extends Component {
  state = {
    defaultCenter: {lat: 34.153417446874386, lng: -118.45955565226701},
    center: {lat: 0, lng: 0},
    zoom: 8
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   let center = { lat: position.coords.latitude, lng: position.coords.longitude }
    //   this.setState({center})
    // });
  }

  render() {
    return (
      <body id="home">
        <div style={{ height: '100vh', width: '100%'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyB0q4LFE9kKJeBmgVT0nWbeXl1kyua9HiI" }}
            defaultCenter={this.state.defaultCenter}
            defaultZoom={this.state.zoom}
          >
            <button type="button" onClick="alert('hello world')" />
          </GoogleMapReact>
        </div>
      </body>
    );
  }
}

export default HeaderMap;

