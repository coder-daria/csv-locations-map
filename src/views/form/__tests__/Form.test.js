import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { FILE } from '../../__mocks__/file.mock';

import Form from '../Form';

const setup = () => {
  const props = {
    file: FILE,
    setColumnsOrder: jest.fn(),
    uploadFile: jest.fn(),
  };

  return shallow(<Form {...props} />);
};

describe('<Form />', () => {
  it('should match the sanpshot', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
