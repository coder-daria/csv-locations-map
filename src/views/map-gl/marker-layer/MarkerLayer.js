import React, { memo } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

import { Marker } from './marker';
import getCategories from '../utils/get-categories';

function MarkerLayere({ file, columnsOrder }) {
  const addressColumnIndex = columnsOrder.indexOf('address');
  const categoryColumnIndex = columnsOrder.indexOf('category');
  const categoriesStyle = getCategories(file, categoryColumnIndex);

  return file.data.map((row, index) => {
    const [latitude, longitude] = file.coordinates[index];
    const categoryName = row[categoryColumnIndex].toLowerCase();

    return (
      <Marker 
        key={`${row[addressColumnIndex]}-${index}`}
        address={row[addressColumnIndex]}
        latitude={latitude}
        longitude={longitude}
        markerColor={categoriesStyle[categoryName]}
      />
    )
  });
}

export default memo(MarkerLayere);
