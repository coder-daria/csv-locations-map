import React, { memo } from 'react';
import { string, number } from 'prop-types';

import { Address, LocationSVG, MapGLMarker } from './Marker.styles';

function Marker({ address, latitude, longitude, markerColor }) {
  return (
    <MapGLMarker key={address} latitude={latitude} longitude={longitude}>
      <LocationSVG fill={markerColor} />
      <Address>{address}</Address>
    </MapGLMarker>
  );
}

Marker.propTypes = {
  address: string.isRequired,
  latitude: number.isRequired,
  longitude: number.isRequired,
  markerColor: string.isRequired,
};

export default memo(Marker);
