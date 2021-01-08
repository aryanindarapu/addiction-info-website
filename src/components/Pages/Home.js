import React, { useState } from 'react';

import '../../index.css';
import MapFunc from '../MapFunc';
import MapList from '../MapList';

function Home() {
  const [mapData, setMapData] = useState([])
  const [listClickedData, setListClickedData] = useState([])

  const getMapData = (data) => {
    setMapData(data)
  }

  const getListData = (data) => {
    setListClickedData(data)
  }

  return (
    <div>
      <div className="row">
        <div className="col nopadding">
          <MapFunc callbackFromHome={getMapData} data={listClickedData} />
        </div>
        <div className="col nopadding scroll">
          <MapList callbackFromHome={getListData} data={mapData} />
        </div>
      </div>
    </div>
  )
}

export default Home;
