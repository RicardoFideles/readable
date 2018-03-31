import { createSelector } from 'reselect';
import * as types from '../actions/constants';

const getPosts = state => state.posts.posts;
const getOrder = state => {
  return state.sort.posts.type;
};
export const getOrderedPosts = createSelector(
  [getPosts, getOrder],
  (posts, order) => {
    switch (order) {
      case types.SORT_KEY_VOTE_SCORE:
        let newArray2 = posts.slice();
        return sortArrayByKeyDesc(newArray2, types.SORT_KEY_VOTE_SCORE);
      case types.SORT_KEY_TIMESTAMP:
        let newArray = posts.slice();
        return sortArrayByKeyDesc(newArray, types.SORT_KEY_TIMESTAMP);
      default:
        return sortArrayByKeyDesc(posts, types.SORT_KEY_VOTE_SCORE);
    }
  }
);

const sortArrayByKeyDesc = (array, key) => {
  return array.sort((item1, item2) => {
    return item1[key] < item2[key] ? 1 : item1[key] > item2[key] ? -1 : 0;
  });
};
