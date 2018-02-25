import { createSelector } from 'reselect'
import sortBy from 'sort-by'
import * as types from '../actions/constants';

const getPosts = (state) => state.posts.posts;
const getOrder = (state) => state.posts.order

export const getOrderedPosts = createSelector(
    [ getPosts, getOrder ], (posts, order) => {

      console.log('selector', order)
      switch(order) {
        case types.SORT_KEY_VOTE_SCORE:
          console.log('case votescore')
          console.log(sortArrayByKeyDesc(posts,types.SORT_KEY_VOTE_SCORE))
          return sortArrayByKeyDesc(posts,types.SORT_KEY_VOTE_SCORE)
        case types.SORT_KEY_TIMESTAMP:
          console.log('case timestamp')
          // console.log(posts.sort(sortBy("+"+types.SORT_KEY_TIMESTAMP)))
          // return posts.sort(sortBy("+"+types.SORT_KEY_TIMESTAMP))
          const teste =  sortArrayByKeyDesc(posts,types.SORT_KEY_TIMESTAMP)
          console.log(teste)
          return teste
        default:
          console.log('nunca deveria entrar aqui')
          return sortArrayByKeyDesc(posts,types.SORT_KEY_VOTE_SCORE)
      }
    }
)

const sortArrayByKeyDesc = (array, key) => {
  return array.sort((item1, item2) => {
    return (item1[key] < item2[key]) ? 1 : ((item1[key] > item2[key]) ? -1 : 0);
  })
}