import React from 'react';
import Header from './index';

it('renders without crashing', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
