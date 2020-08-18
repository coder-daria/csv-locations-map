import React, { memo } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

import { Marker } from './marker';
import getCategories from '../utils/get-categories';

function MarkerLayer({ file, columnsOrder }) {
  const addressColumnIndex = columnsOrder.indexOf('address');
  const categoryColumnIndex = columnsOrder.indexOf('category');
  const categoriesStyle = getCategories(file, categoryColumnIndex);

  return file.data.map((row, index) => {
    const [latitude, longitude] = file.coordinates[index];
    const categoryName = row[categoryColumnIndex].toLowerCase();
    const address = row[addressColumnIndex];
    return (
      <Marker
        key={`${address + index}`}
        address={address}
        latitude={latitude}
        longitude={longitude}
        markerColor={categoriesStyle[categoryName]}
      />
    );
  });
}

export default memo(MarkerLayer);
