import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import MapGL from '../MapGL';

const MOCKED_FILE = {
  coordinates: [[32.14204382794657, 7.368716259766145], [10.288635465333776, 4.3920949633039505]],
  data: [['Poland', 'Wroclaw', 'Igielna 19', '321', 'Cinema'], ['Germany', 'Reinheim', 'Am Dieburger Berg', '432', 'Cinema']],
  errors: [],
  meta: {},
  name: 'mocked_locations.csv',
};

const setup = () => {
  const props = {
    file: MOCKED_FILE,
    columnsOrder: ['state', 'city', 'address', 'zip', 'category'],
  };

  return shallow(<MapGL {...props} />);
};

describe('<MapGL />', () => {
  it('renders without crashing', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
