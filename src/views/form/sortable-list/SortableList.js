import React, { memo } from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import { SortableItem } from './sortable-item';

import { List } from './SortableList.styles';

const SortableList = SortableContainer(({ items, isSorting }) => (
  <List>
    {items.map((value, index) => (
      <SortableItem
        key={index}
        index={index} 
        name={value}
        value={index}
        isSorting={isSorting}
      />
    ))}
  </List>
));

export default memo(SortableList);
