import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import Marker from './marker/Marker';

const MOCKED_LOCATIONS = [
  {
    city: "London",
    latitude: 51.50853,
    longitude: -0.12574,
  }, 
];

const MAP_SIZE = {
  height: "100vh",
  width: "100vw",
}

const INITIAL_VIEWPORT = {
  latitude: 51.50853,
  longitude: -0.12574,
  zoom: 12,
};

function Map() {
  const [viewport, setViewPort] = useState(INITIAL_VIEWPORT);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/medarilla/ckdvpnkyq13sg19qn16sah8fl"
      onViewportChange={setViewPort}
      {...MAP_SIZE}
    >
      {
        MOCKED_LOCATIONS.map(({city, latitude, longitude}) => (
          <Marker key={city} latitude={latitude} longitude={longitude} />
        ))
      }
    </ReactMapGL>
  );
}

export default Map;
