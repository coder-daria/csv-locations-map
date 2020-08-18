/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, memo, useCallback } from 'react';
import { arrayOf, string, shape, number, instanceOf } from 'prop-types';

import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import MarkerLayer from './marker-layer/MarkerLayer';

import { Loading } from './loading';

import {
  INITIAL_VIEWPORT,
  MAP_SIZE,
  MAPBOX_ACCESS_TOKEN,
  MAPBOX_STYLE,
} from './constants';

function MapGL({ file, columnsOrder }) {
  const [mapApi, setMapApi] = useState();
  const [viewport, setViewPort] = useState(INITIAL_VIEWPORT);

  const handleLoad = useCallback(({ target: map }) => {
    setMapApi(map);
  }, []);

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
      {mapApi ? (
        <MarkerLayer file={file} columnsOrder={columnsOrder} />
      ) : (
        <Loading />
      )}
    </ReactMapGL>
  );
}

MapGL.propTypes = {
  columnsOrder: arrayOf(string).isRequired,
  file: shape({
    coordinates: arrayOf(arrayOf(number)),
    data: arrayOf(arrayOf(string)),
    errors: instanceOf(Array),
    meta: instanceOf(Object),
    name: string,
  }).isRequired,
};

export default memo(MapGL);
