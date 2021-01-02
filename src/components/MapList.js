import React from 'react';

import { FormattedCard } from './FormattedCard';


import '../index.css';

function MapList({ data }) {
  // TODO Implement list loading screen
  if (data === []) return console.log("one sec")

  return (
    <div className="scroll">
      {
        data.map((place) => {
          if (place !== null)
            return (<FormattedCard place={place} />)
        })
      }
    </div>
  )
}

export default MapList;