
import * as types from '../actions/constants';
import sortBy from 'sort-by'

export default function posts(state = { posts: [] }, action) {

    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.posts
             }
        case types.ADD_NEW_POST:
             return {
               ...state,
               posts: [...state.posts, action.post]
             }
        case types.UPDATE_VOTE:
            console.log('update vote')
            return {
                ...state,
                posts :  state.posts.map(post => {
                            if (post.id === action.post.id) {
                                post = action.post
                            }
                            return post
                        })
            }
        case types.SORT_POST:
            return {
                ...state,
                posts: [].concat(state.posts.sort(sortBy("-"+action.sortKey)))
            }
        default:
            return state;
    }
}