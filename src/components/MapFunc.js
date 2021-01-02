import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { MdGpsFixed, MdGpsNotFixed } from 'react-icons/md'; 

import { mapContainerStyle, options } from '../styles/mapStyles';
import '../index.css';

// To access places libarary with Google Maps API
const libraries = ["places"]

function MapFunc({ callbackFromHome }) {
  const [initLocation, setInitLocation] = useState({lat: 0, long: 0})
  const [treatmentLocs, updateTreatmentLocs] = useState([])
  const [selectedTreatmentLoc, setSelectedTreatmentLoc] = useState(null)
  const [selectedTreatmentLocDetails, setSelectedTreatmentLocDetails] = useState(null)
  const [onCenter, setOnCenter] = useState(true)
  const [placesList, setPlacesList] = useState(null)

  // Creates a Map Reference to only load once
  const mapRef = React.useRef()
  
  const onMapLoad = React.useCallback((map) => {
    setOnCenter(true)
    mapRef.current = map
  }, [])

  useEffect(() => {
    // Get initial location of browser
    navigator?.geolocation.getCurrentPosition(({coords: {latitude: lat, longitude: lng}}) => {
      const pos = {lat, lng}
      setInitLocation(pos)
    })

    const listener = e => {
      if (e.key === "Escape") setSelectedTreatmentLoc(null)
    }
  
    window.addEventListener("keydown", listener)
    
    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])

  useEffect(() => {
    if(placesList === null) console.log("null")
    else getPlacesDetails(placesList)
  }, [placesList])

  // Called when searching for treatment centers in radius
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
        setPlacesList(results)
        updateTreatmentLocs(results)
      }
    })
  }

  // Gets detailed places for MapList
  const getPlacesDetails = async placesArr => {
    const google = window.google
    const service = new google.maps.places.PlacesService(mapRef.current)

    let detailedPlacesArr = await Promise.all(
      placesArr.map(currentPlace => {
        return new Promise((resolve) => 
          service.getDetails({
            placeId: currentPlace.place_id
          }, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              return resolve(place)
            }
            return resolve(null)
        }))
      })
    )

    callbackFromHome(detailedPlacesArr)
  }

  // Called when clicking on Marker
  const openInfoWindow = (selectedPlace) => {
    panToLoc(selectedPlace.geometry.location)
    const google = window.google
    const service = new google.maps.places.PlacesService(mapRef.current)

    setSelectedTreatmentLoc(selectedPlace, false)

    service.getDetails({
      placeId: selectedPlace.place_id
    }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setSelectedTreatmentLocDetails(place)
      }
    })
  }

  // Pans to initial location and changes icon to solid
  const panToLoc = (loc, center) => {
    mapRef.current.panTo(loc)
    if (center) {
      mapRef.current.setZoom(13)
      setOnCenter(center)
    }
  }

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries
  })

  if (loadError) return "Error Loading Maps"
  if (!isLoaded) return "Loading Map..." // TODO Implement loading screen

  // TODO add Google Map ordered list
  return (
    <div>
      <a onClick={() => panToLoc(initLocation, true)} style={{cursor: 'pointer'}}>
        {onCenter ? <MdGpsFixed className="gpsicon"  /> : <MdGpsNotFixed className="gpsicon" />}
      </a>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={initLocation}
        options={options}
        onLoad={onMapLoad}
        onTilesLoaded={fetchPlaces}
        onCenterChanged={() => setOnCenter(false)}
      >
        {treatmentLocs && treatmentLocs.map((place, i) =>
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

export default MapFunc;

