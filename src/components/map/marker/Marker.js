import React, { memo } from 'react';
import { Marker as MapGLMarker } from 'react-map-gl';

import { LocationSVG } from "./Marker.styles";

function Marker({ city, latitude, longitude}) {
  return (
    <MapGLMarker key={city} latitude={latitude} longitude={longitude}>
      <LocationSVG />
    </MapGLMarker>
  );
}

export default memo(Marker);
