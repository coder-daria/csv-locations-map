import React, { useState, memo } from 'react';
import ReactMapGL from 'react-map-gl';

import Marker from './marker/Marker';

const MAP_SIZE = {
  height: '100vh',
  width: '100vw',
}

const INITIAL_VIEWPORT = {
  latitude: 51.40,
  longitude: 14.87,
  zoom: 5,
};

const MAPBOX_STYLE = 'mapbox://styles/medarilla/ckdvpnkyq13sg19qn16sah8fl';

function Map({ columnsOrder, file }) {
  const [viewport, setViewPort] = useState(INITIAL_VIEWPORT);
  const addressColumnIndex = columnsOrder.indexOf('address');

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle={MAPBOX_STYLE}
      onViewportChange={setViewPort}
      {...MAP_SIZE}
    >
      {
        file.data.map((row, index) => {
          const [latitude, longitude] = file.coordinates[index];
  
          return (
            <Marker 
              key={`${row[addressColumnIndex]}-${index}`}
              address={row[addressColumnIndex]}
              latitude={latitude}
              longitude={longitude}
            />
          )
        })
      }
    </ReactMapGL>
  );
}

export default memo(Map);
