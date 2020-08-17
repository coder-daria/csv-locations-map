import React, { memo } from 'react';
import { string, bool } from 'prop-types';

import { SortableElement } from 'react-sortable-hoc';

import { Label, Container } from './SortableItem.styles';

const SortableItem = SortableElement(({ name, isSorting }) => (
  <Container isSorting={isSorting}>
    <Label>{name}</Label>
  </Container>
));

SortableItem.propTypes = {
  name: string.isRequired,
  isSorting: bool.isRequired,
};

export default memo(SortableItem);

