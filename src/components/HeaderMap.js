import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox, Autocomplete } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

class HeaderMap extends Component {
  constructor (props) {
    super(props)

    this.autocomplete = null

    this.onLoad = this.onLoad.bind(this)
    this.onPlaceChanged = this.onPlaceChanged.bind(this)

    this.state = {
      currentLocation: {lat: 0, lng: 0},
      markers: [],
      zoom: 8
    }
  }
  

  componentDidMount() {
    navigator?.geolocation.getCurrentPosition(({coords: {latitude: lat, longitude: lng}}) => {
      const pos = {lat, lng}
      this.setState({currentLocation: pos})  
    })
  }

  onLoad (autocomplete) {
    console.log('autocomplete: ', autocomplete)

    this.autocomplete = autocomplete
  }


  onPlaceChanged() {
    if (this.autocomplete !== null) {
      let lat = this.autocomplete.getPlace().geometry.location.lat()
      let long = this.autocomplete.getPlace().geometry.location.lat()
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }

  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyC8Hk7qLyvebRrCcife6oGxOGV1zUCEkJE"
        libraries={["places"]}
      >
        <GoogleMap
          id='search-box-example'
          mapContainerStyle={containerStyle}
          center={this.state.currentLocation}
          zoom={14}
          // onDragEnd={search for centers in current location}
        >
          <Marker key={1} position={this.state.currentLocation} />
          <Autocomplete
            onLoad={this.onLoad}
            onPlaceChanged={this.onPlaceChanged}
          >
            <input
              type="text"
              placeholder="Customized your placeholder"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px"
              }}
            />
          </Autocomplete>
        </GoogleMap>
      </LoadScript>
    );
  }
}

const inputStyle = {
  boxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  padding: `0 12px`,
  borderRadius: `3px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
  position: 'absolute',
  top: '10px',
  right: '10px',
}

export default HeaderMap;

