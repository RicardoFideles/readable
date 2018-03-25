import app from './sort';

describe('sort reducer', () => {
  it('should handle initial state', () => {
    expect(app(undefined, {})).toEqual({
      posts: { type: 'voteScore' },
    });
  });
});
