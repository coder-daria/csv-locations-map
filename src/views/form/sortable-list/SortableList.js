import React, { memo } from 'react';
import { bool, arrayOf, string } from 'prop-types';
import { SortableContainer } from 'react-sortable-hoc';

import { SortableItem } from './sortable-item';

import { List } from './SortableList.styles';

const SortableList = SortableContainer(({ items, isSorting }) => (
  <List>
    {items.map((value, index) => (
      <SortableItem
        index={index}
        isSorting={isSorting}
        key={value}
        name={value}
        value={index}
      />
    ))}
  </List>
));

SortableList.propTypes = {
  isSorting: bool.isRequired,
  items: arrayOf(string).isRequired,
};

export default memo(SortableList);
