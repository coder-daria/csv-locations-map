import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import SortableList from '../SortableList';

const setup = () => {
  const props = {
    items: ['state', 'city', 'address', 'zip', 'coategory'],
    isSorting: false,
  };

  return shallow(<SortableList {...props} />, { disableLifecycleMethods: true });
};

describe('<SortableList />', () => {
  it('should match the sanpshot', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
