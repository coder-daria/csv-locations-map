import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { FILE } from '../../__mocks__/file.mock';

import Form from '../Form';

const setup = () => {
  const props = {
    setColumnsOrder: jest.fn(),
    uploadFile: jest.fn(),
    file: FILE,
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<Form {...props} />);
};

describe('<Form />', () => {
  it('should match the sanpshot', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
