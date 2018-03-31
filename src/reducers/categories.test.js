import categoriesReducer from './categories';

const categoriesArray = [{ id: 1, name: 'redux' }];

describe('categories reducer', () => {
  it('should handle initial state', () => {
    expect(categoriesReducer(undefined, {})).toEqual({
      categories: [],
    });
  });

  it('should handle GET_CATEGORIES action', () => {
    expect(
      categoriesReducer(
        {},
        {
          type: 'GET_CATEGORIES',
          categories: categoriesArray,
        }
      )
    ).toEqual({
      categories: categoriesArray,
    });
  });
});
