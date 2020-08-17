import React, { memo } from 'react';

import { Address, LocationSVG, MapGLMarker } from './Marker.styles';

function Marker({ address, latitude, longitude, markerColor}) {
  return (
    <MapGLMarker key={address} latitude={latitude} longitude={longitude}>
      <LocationSVG fill={markerColor}/>
      <Address>{address}</Address>
    </MapGLMarker>
  );
}

export default memo(Marker);
