import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import FileUpload from '../FileUpload';

const setup = () => {
  const uploadFile = jest.fn();

  return shallow(<FileUpload uploadFile={uploadFile} />);
};

describe('<FileUpload />', () => {
  it('should match snapshot', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
