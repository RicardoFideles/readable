
import * as types from '../actions/constants';

export default function categories(state = { categories: [] }, action) {

    switch(action.type) {
        case types.GET_CATEGORIES:
          return {
            ...state,
            categories: action.categories
          }
        default:
          return state
      }
}