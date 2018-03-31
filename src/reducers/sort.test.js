import sortReducer from './sort';

describe('sort reducer', () => {
  it('should handle initial state', () => {
    expect(sortReducer(undefined, {})).toEqual({
      posts: { type: 'voteScore' },
    });
  });
  it('should handle SORT_POST action', () => {
    expect(
      sortReducer(
        {},
        {
          type: 'SORT_POST',
          sort: 'timestamp',
        }
      )
    ).toEqual({
      posts: { type: 'timestamp' },
    });
  });
});
