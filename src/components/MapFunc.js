import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

import { mapStyles } from '../data/mapStyles';

// TODO PROPERLY COMMENT OUT CODE

const libraries = ["places"]

function MapFunc() {
  const [initLocation, setInitLocation] = useState({lat: 0, long: 0})
  const [treatmentLocs, updateTreatmentLocs] = useState([])
  const [selectedTreatmentLoc, setSelectedTreatmentLoc] = useState(null)
  const [selectedTreatmentLocDetails, setSelectedTreatmentLocDetails] = useState(null)

  useEffect(() => {
    navigator?.geolocation.getCurrentPosition(({coords: {latitude: lat, longitude: lng}}) => {
      const pos = {lat, lng}
      setInitLocation(pos)
    })

    const listener = e => {
      if (e.key === "Escape") selectedTreatmentLoc(null)
    }
  
    window.addEventListener("keydown", listener)
    
    return () => {
      window.removeEventListener("keydown", listener)
    }
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
        updateTreatmentLocs(results);
      }
    })
  }

  const openInfoWindow = (selectedPlace) => {
    const google = window.google
    const service = new google.maps.places.PlacesService(mapRef.current)

    setSelectedTreatmentLoc(selectedPlace)

    service.getDetails({
      placeId: selectedPlace.place_id
    }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setSelectedTreatmentLocDetails(place)
      }
    })
  }

  // TODO Pan to initial location
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
  if (!isLoaded) return "Loading Map..." // TODO Can implement loading screen later

  // TODO add Google Map ordered list
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
        {// TODO Add info box above pins
        treatmentLocs && treatmentLocs.map((place, i) =>
          <Marker 
            key={i}
            position={place.geometry.location}
            onClick={() => openInfoWindow(place)}
          />
        )}
        
        {// TODO Pan to nearest location
        selectedTreatmentLoc && selectedTreatmentLocDetails && (
          <InfoWindow            
            position={selectedTreatmentLoc.geometry.location}

            onCloseClick={() => {
              setSelectedTreatmentLoc(null);
            }}
          >
            <div>
              <h3>{selectedTreatmentLoc.name}</h3>
              <h5>{selectedTreatmentLocDetails.vicinity}</h5>
              {
                // TODO automatically call by clicking phone # and address
              }
              <h5>{selectedTreatmentLocDetails.formatted_phone_number}</h5>
              {/* <p>Hours of operation: {selectedTreatmentLoc.hours}</p> */}
              {
                // TODO add stars instead of number 
              }
              <p>Google Rating: {selectedTreatmentLocDetails.rating}/5</p> 
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  )
}

const mapContainerStyle = {
  width: '100%',
  height: '100%'
}

const options = {
  styles: mapStyles,
  clickableIcons: false,
  disableDefaultUI: true,
  zoomControl: true
}

export default MapFunc;

