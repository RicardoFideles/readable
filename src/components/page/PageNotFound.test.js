import React from 'react';
import PageNotFound from './PageNotFound';

it('renders without crashing', () => {
  expect(shallow(<PageNotFound />)).toMatchSnapshot();
});
