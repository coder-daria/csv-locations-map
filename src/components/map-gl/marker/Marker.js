import React, { memo } from 'react';
import { Marker as MapGLMarker } from 'react-map-gl';

import { LocationSVG } from "./Marker.styles";

function generateColor() {
  return `#${Math.random().toString(16).substr(-6)}`;
}

function Marker({ address, latitude, longitude}) {
  return (
    <MapGLMarker key={address} latitude={latitude} longitude={longitude}>
      <LocationSVG fill={generateColor()}/>
      <span>{address}</span>
    </MapGLMarker>
  );
}

export default memo(Marker);
