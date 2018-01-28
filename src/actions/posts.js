import * as types from './constants';
import { getAllPosts, getComments, addNewPost, votePost, editPost } from '../api/index'

export const fetchPosts = () => dispatch => (
    getAllPosts()
        .then(posts =>
            Promise.all(
                posts.map(post =>
                    getComments(post.id)
                        .then(comments => (post.comments = comments))
                        .then(() => post)
                )
            )
            .then(posts => dispatch
                ({
                    type: types.GET_POSTS,
                    posts,
                }

                )
            )
        )
    )

export const addPost = (post) => dispatch => (
    addNewPost(post)
        .then(post => {
            dispatch({
                type: types.ADD_NEW_POST,
                post
            })
        })
    )

export const upVotePost = (id) => dispatch => (
    votePost(id, types.OPTION_UPVOTE)
        .then(post => {
            dispatch({
                type :  types.UPDATE_VOTE,
                post
            })
        })
)

export const downVotePost = (id) => dispatch => (
    votePost(id, types.OPTION_DOWNVOTE)
        .then(post => {
            dispatch({
                type :  types.UPDATE_VOTE,
                post
            })
        })
)

export const updatePost = (id, data) => dispatch => (
    editPost(id, data)
        .then(post => {
            dispatch({
                type : types.EDIT_POST,
                post
            })
        })
)


const timeStampKey = types.SORT_KEY_TIMESTAMP

export const sortPostByTimeStamp = () => {
    return  dispatch => {
        dispatch({
            type: types.SORT_POST,
            sortKey: timeStampKey
        })
    }
}


const voteScoreKey = types.SORT_KEY_VOTE_SCORE

export const sortPostByVoteScore = () => dispatch => (
    dispatch({
        type: types.SORT_POST,
        sortKey: voteScoreKey
    })
)

