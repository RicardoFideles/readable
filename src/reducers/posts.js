
import * as types from '../actions/constants';

export default function posts(state = { posts: [] }, action) {

    switch (action.type) {
        case types.GET_POSTS:
            action.post.comments = action.comments
            return {
                posts: [...state.posts, action.post]
             }
        case types.ADD_NEW_POST:
             return {
               ...state,
               posts: [...state.posts, action.post]
             }
        default:
            return state;
    }
}