import React from 'react';

import MapFunc from './MapFunc';
import MapList from './MapList';

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <MapFunc />
        </div>
        <div className="col">
          <MapList />
        </div>
      </div>
  </div>
  )
}

export default Home;
