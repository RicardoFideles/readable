import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  const fetchCategories = jest.fn();
  const fetchPostsAndComments = jest.fn();

  it('shallow renders correctly', () => {
    expect(shallow(<App />));
  });
});
