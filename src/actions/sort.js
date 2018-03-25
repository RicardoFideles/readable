import * as types from './constants';

export const setSortBy = sort => {
  console.log('sort action');
  console.log('sort', sort);
  return {
    type: types.SORT_POST,
    sort,
  };
};
