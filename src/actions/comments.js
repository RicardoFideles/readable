import * as types from './constants';
import { addComment, deleteComment, editComment } from '../api/index'

export const createComment = (comment, parentId) => {
    return (dispatch) => {
        addComment(comment, parentId)
        .then(comment => {
            dispatch({
                type: types.ADD_COMMENT,
                parentId,
                comment
            })
        })
    }
}

export const updateComment = (id, comment,postId) => {
    return (dispatch) => {
        editComment(id,comment)
        .then(comment => {
            dispatch({
                type: types.EDIT_COMMENT,
                id,
                comment
            })
        })
    }
}

export const onDeleteComment = (commentId,parentId) => {
    return (dispatch) => {
        deleteComment(commentId)
        .then(res => {
            dispatch({
                type: types.DELETE_COMMENT,
                parentId,
                commentId
            })
        })
    }
}