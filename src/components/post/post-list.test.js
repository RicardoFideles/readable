import React from 'react';
import PostList from './post-list';

it('renders without crashing', () => {
  const posts = [];
  expect(shallow(<PostList posts={posts} />)).toMatchSnapshot();
});
