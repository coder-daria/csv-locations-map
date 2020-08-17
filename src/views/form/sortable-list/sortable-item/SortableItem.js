import React, { memo } from 'react';
import { SortableElement } from 'react-sortable-hoc';

import { Label, Container } from './SortableItem.styles';

const SortableItem = SortableElement(({ name, isSorting }) => (
  <Container isSorting={isSorting}>
    <Label>{name}</Label>
  </Container>
));

export default memo(SortableItem);

