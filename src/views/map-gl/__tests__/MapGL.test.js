import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { FILE } from '../../__mocks__/file.mock';

import MapGL from '../MapGL';

const setup = () => {
  const props = {
    file: FILE,
    columnsOrder: ['state', 'city', 'address', 'zip', 'category'],
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<MapGL {...props} />);
};

describe('<MapGL />', () => {
  it('renders without crashing', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
