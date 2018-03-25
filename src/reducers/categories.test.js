import app from './categories';

describe('categories reducer', () => {
  it('should handle initial state', () => {
    expect(app(undefined, {})).toEqual({
      categories: [],
    });
  });
});
