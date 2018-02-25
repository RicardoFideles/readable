
import * as types from '../actions/constants';
import sortBy from 'sort-by'

export default function posts(state = { posts: [], order : types.SORT_KEY_VOTE_SCORE }, action) {

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
            return {
                ...state,
                posts :  state.posts.map(post => {
                            if (post.id === action.post.id) {
                                return {
                                    ...post,
                                    voteScore : action.post.voteScore
                                }
                            } else {
                                return post
                            }
                        })
            }
        case types.SORT_POST:
            console.log('ordenar reducer...')
            console.log('action.sortKey', action.sortKey)
            return {
                ...state,
                order: action.sortKey
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
        case types.EDIT_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    return {
                      ...post,
                      comments: post.comments.map(comment => {
                        if (comment.id === action.id) {
                            return {
                                ...comment,
                                author: action.comment.author,
                                body: action.comment.body
                            }
                        } else {
                            return comment
                        }

                      })
                    }
                  })
            }
        case types.DELETE_COMMENT:
        return {
            ...state,
            posts: state.posts.map(post => {
                if (post.id === action.parentId) {
                    return {
                        ...post,
                        comments : post.comments.filter((c) => c.id !== action.commentId)
                    }
                } else {
                    return post
                }
            })

        }
        default:
            return state;
    }
}