import React, { useState } from 'react';

import '../../index.css';
import MapFunc from '../MapFunc';
import MapList from '../MapList';

function Home() {
  const [mapData, setMapData] = useState([])

  const getMapData = (data) => {
    console.log(data[1])
    setMapData(data)
  } 

  return (
    <div>
      <div className="row">
        <div className="col nopadding">
          <MapFunc callbackFromHome={getMapData} />
        </div>
        <div className="col nopadding">
          <MapList data={mapData} />
        </div>
      </div>
    </div>
  )
}

export default Home;