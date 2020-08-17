import React, { useState, memo, useCallback } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import MarkerLayer from './marker-layer/MarkerLayer';

import { Loading } from './loading';

import { INITIAL_VIEWPORT, MAPBOX_ACCESS_TOKEN, MAPBOX_STYLE, MAP_SIZE } from './constants';

function MapGL({ file, columnsOrder }) {
  const [mapApi, setMapApi] = useState();
  const [viewport, setViewPort] = useState(INITIAL_VIEWPORT);

  const handleLoad = useCallback(
    ({ target: map }) => {
      setMapApi(map);
    },[],
  );

  return (
      <ReactMapGL
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle={MAPBOX_STYLE}
        onLoad={handleLoad}
        visible={Boolean(mapApi)}
        onViewportChange={setViewPort}
        {...viewport}
        {...MAP_SIZE}
      >
        {mapApi ? <MarkerLayer file={file} columnsOrder={columnsOrder} /> : <Loading />}
      </ReactMapGL>
  );
}

export default memo(MapGL);
