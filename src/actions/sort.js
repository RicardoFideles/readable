import * as types from './constants';

export const setSortBy = sort => {
  return {
    type: types.SORT_POST,
    sort,
  };
};
