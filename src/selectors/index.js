import { createSelector } from 'reselect'
import sortBy from 'sort-by'
import * as types from '../actions/constants';

const getPosts = (state) => state.posts.posts;

export const getPostsOrderedByVotes = createSelector(
    [ getPosts ], (posts) => {
      posts.sort(sortBy("-"+types.SORT_KEY_VOTE_SCORE))
      return posts;
    }
)

export const getPostsOrderedByDate = createSelector(
  [ getPosts ], (posts) => {
    posts.sort(sortBy("-"+types.SORT_KEY_TIMESTAMP))
    return posts;
  }
)