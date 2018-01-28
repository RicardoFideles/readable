import * as types from './constants';
import { addComment, deleteComment, editComment, voteComment } from '../api/index'

export const createComment = (comment, parentId, callback) => {
    return (dispatch) => {
        addComment(comment)
        .then(comment => {
            callback()
            dispatch({
                type: types.ADD_COMMENT,
                parentId,
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