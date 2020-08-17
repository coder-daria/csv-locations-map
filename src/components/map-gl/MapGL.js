import React, { useState, memo, useCallback } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Marker from './marker/Marker';

const MAP_SIZE = {
  height: '100vh',
  width: '100vw',
}

const INITIAL_VIEWPORT = {
  latitude: 51.40,
  longitude: 14.87,
  zoom: 12,
};

const MAPBOX_STYLE = 'mapbox://styles/medarilla/ckdvpnkyq13sg19qn16sah8fl';
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Map({ columnsOrder, file }) {
  const [mapApi, setMapApi] = useState();
  const [viewport, setViewPort] = useState(INITIAL_VIEWPORT);

  const handleLoad = useCallback(
    ({ target: map }) => {
      setMapApi(map);
    },[],
  );

  const addressColumnIndex = columnsOrder.indexOf('address');
  const markers =  file.data.map((row, index) => {
    const [latitude, longitude] = file.coordinates[index];

    return (
      <Marker 
        key={`${row[addressColumnIndex]}-${index}`}
        address={row[addressColumnIndex]}
        latitude={latitude}
        longitude={longitude}
      />
    )
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      mapStyle={MAPBOX_STYLE}
      onLoad={handleLoad}
      visible={Boolean(mapApi)}
      onViewportChange={setViewPort}
      {...MAP_SIZE}
    >
      {mapApi ? markers : <div>Spinner</div>}
    </ReactMapGL>
  );
}

export default memo(Map);
