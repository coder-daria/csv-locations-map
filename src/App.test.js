import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { FileUpload } from './views';

const setup = () => shallow(<App />);

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = setup();

    expect(wrapper).toBeDefined();
  });

  it('renders initial page', () => {
    const wrapper = setup();

    expect(wrapper.find(FileUpload)).toBeDefined();
  });
});
