import React from 'react';
import Footer from './index';

it('renders without crashing', () => {
  expect(shallow(<Footer />)).toMatchSnapshot();
});
