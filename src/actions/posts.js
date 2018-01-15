import * as types from './constants';

import {
    getAllPosts, getComments, addNewPost
} from '../api/index'

export const fetchPosts = () => dispatch => (
    getAllPosts()
        .then(posts => {
        posts.map(post => {
            getComments(post.id)
            .then(comments => {
                dispatch({
                type: types.GET_POSTS,
                post,
                comments
                })
            })
        })
        })
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