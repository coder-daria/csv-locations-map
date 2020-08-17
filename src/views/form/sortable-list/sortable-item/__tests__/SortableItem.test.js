import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { SortableContainer } from 'react-sortable-hoc';

import SortableItem from '../SortableItem';

const setup = () => {
  const props = {
    name: 'city',
    isSorting: false,
  };

  return shallow(
  <SortableContainer>
    <SortableItem {...props} />, 
  </SortableContainer>,
  { disableLifecycleMethods: true });
};

describe('<SortableItem />', () => {
  it('should match the sanpshot', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
