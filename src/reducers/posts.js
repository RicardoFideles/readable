
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
                                post.voteScore = action.post.voteScore
                            }
                            return post
                        })
            }
        case types.SORT_POST:
            return {
                ...state,
                posts: [].concat(state.posts.sort(sortBy("-"+action.sortKey)))
            }

        case types.ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.parentId) {
                        post.comments = [...post.comments, action.comment]
                    }
                    return post
                })

            }
        case types.DELETE_COMMENT:
        return {
            ...state,
            posts: state.posts.map(post => {
                if (post.id === action.parentId) {
                    post.comments = post.comments.filter((c) => c.id !== action.commentId)
                }
                return post
            })

        }
        default:
            return state;
    }
}