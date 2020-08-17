import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Form from '../Form';

const setup = () => {
  const props = {
    fileName: 'locations.csv',
    rowsNum: 4,
    setColumnsOrder: jest.fn(),
    uploadFile: jest.fn(),
  };

  const wrapper = shallow(<Form {...props} />);

  return { wrapper };
};

describe('<Form />', () => {
  it('should match the sanpshot', () => {
    const { wrapper } = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
