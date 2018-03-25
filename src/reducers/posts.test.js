import app from './posts';

describe('posts reducer', () => {
  it('should handle initial state', () => {
    expect(app(undefined, {})).toEqual({
      posts: [],
    });
  });
});
