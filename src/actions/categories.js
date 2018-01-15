import * as types from './constants';

import {
    getAllCategories
} from '../api/index'

export const getCategories = (categories) => ({
    type: types.GET_CATEGORIES,
    categories
})

export const fetchCategories = () => dispatch => (
  getAllCategories()
    .then(categories => dispatch(getCategories(categories)))
)