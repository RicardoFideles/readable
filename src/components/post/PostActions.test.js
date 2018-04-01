import React from 'react';
import PostActions from './PostActions';
import { MemoryRouter } from 'react-router-dom';

describe('<PostActions />', () => {
  const onDelete = jest.fn();
  const history = {
    go: jest.fn(),
  };
  it('shallow renders correctly', () => {
    expect(
      shallow(
        <PostActions id={'123123'} onDelete={onDelete} history={history} />
      )
    );
  });

  it('shallow renders correctly with categories', () => {
    const test = mount(
      <MemoryRouter>
        <PostActions id={'123123'} onDelete={onDelete} history={history} />
      </MemoryRouter>
    );

    test.find('button').simulate('click');
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
