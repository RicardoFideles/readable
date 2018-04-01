import React from 'react';
import SortPosts from './SortPosts';

import {
  SORT_KEY_TIMESTAMP,
  SORT_KEY_VOTE_SCORE,
} from '../../actions/constants';

describe('<SortPosts />', () => {
  const onSelectSortBy = jest.fn();

  it('shallow renders correctly', () => {
    expect(
      shallow(
        <SortPosts
          onSelectSortBy={onSelectSortBy}
          SORT_KEY_TIMESTAMP={SORT_KEY_TIMESTAMP}
          SORT_KEY_VOTE_SCORE={SORT_KEY_VOTE_SCORE}
        />
      )
    );
  });

  it('shallow renders correctly', () => {
    const test = mount(
      <SortPosts
        onSelectSortBy={onSelectSortBy}
        SORT_KEY_TIMESTAMP={SORT_KEY_TIMESTAMP}
        SORT_KEY_VOTE_SCORE={SORT_KEY_VOTE_SCORE}
      />
    );
    test
      .find('select')
      .simulate('change', { target: { value: SORT_KEY_TIMESTAMP } });
    expect(onSelectSortBy).toHaveBeenCalledTimes(1);
  });
});
