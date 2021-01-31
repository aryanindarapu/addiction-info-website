import React from 'react';

import { FormattedCard } from './FormattedCard';
import '../index.css';

function MapList({ callbackFromHome, data }) {
  // TODO Implement list loading screen
  if (data === []) return console.log("one sec")

  return (
    <div className="scroll">
      {
        data.map((place, i) => {
          if (place !== null)
            return (<FormattedCard key={i} place={place} callbackFromHome={callbackFromHome} />)
        })
      }
    </div>
  )
}

export default MapList;