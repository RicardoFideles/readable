import * as types from './constants';

import { getCategories } from '../api/index';

export const updateCategoriesList = categories => ({
  type: types.GET_CATEGORIES,
  categories,
});

export const getAllCategories = () => dispatch =>
  getCategories().then(categories =>
    dispatch(updateCategoriesList(categories))
  );
