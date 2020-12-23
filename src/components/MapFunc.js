import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

/**
 * TODO: 
 * add in navbar 
 * pan to init location
 * pan to nearest location
 * create ordered list (similar to airbnb)
 * yelp-like review system
 * */ 

const libraries = ["places"]

function MapFunc() {
  const [initLocation, setInitLocation] = useState({lat: 0, long: 0})
  const [places, updatePlaces] = useState([])

  useEffect(() => {
    navigator?.geolocation.getCurrentPosition(({coords: {latitude: lat, longitude: lng}}) => {
      const pos = {lat, lng}
      setInitLocation(pos)
    })
  }, [])

  const fetchPlaces = () => {
    const google = window.google
    const service = new google.maps.places.PlacesService(mapRef.current)

    const request = {
      location: mapRef.current.getCenter(),
      radius: 500,
      query: 'addiction treatment centers'
    }

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        updatePlaces(results);
      }
    })
  }

  const panToInit = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo(initLocation)
    mapRef.current.setZoom(14)
  }, [])

  const mapRef = React.useRef()
  
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map
  }, [])

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries
  })

  if (loadError) return "Error Loading Maps"
  if (!isLoaded) return "Loading Map..." // Can implement loading screeen later

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={initLocation}
        options={options}
        onLoad={onMapLoad}
        onTilesLoaded={fetchPlaces}
      >
        {places && places.map((place, i) =>
          <Marker key={i} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }} />
        )}

        {
        
        }
      </GoogleMap>
    </div>
  )
}

const mapContainerStyle = {
  width: '100%',
  height: '100%'
}

const options = {
  disableDefaultUI: true,
  zoomControl: true
}

export default MapFunc;

