import * as types from './constants';
import {
  getAllPosts,
  getComments,
  addNewPost,
  votePost,
  editPost,
  deletePost,
} from '../api/index';

export const getAllPostsWithComments = () => dispatch =>
  getAllPosts().then(posts =>
    Promise.all(
      posts.map(post =>
        getComments(post.id)
          .then(comments => (post.comments = comments))
          .then(() => post)
      )
    ).then(posts =>
      dispatch({
        type: types.GET_POSTS,
        posts,
      })
    )
  );

export const addPost = (post, callback) => dispatch =>
  addNewPost(post).then(post => {
    callback();
    dispatch({
      type: types.ADD_NEW_POST,
      post,
    });
  });

export const upVotePost = id => dispatch =>
  votePost(id, types.OPTION_UPVOTE).then(post => {
    dispatch({
      type: types.UPDATE_VOTE,
      post,
    });
  });

export const downVotePost = id => dispatch =>
  votePost(id, types.OPTION_DOWNVOTE).then(post => {
    dispatch({
      type: types.UPDATE_VOTE,
      post,
    });
  });

export const updatePost = (id, data, callback) => {
  return dispatch => {
    editPost(id, data).then(post => {
      callback();
      dispatch({
        type: types.EDIT_POST,
        post,
      });
    });
  };
};

export const removePost = id => {
  return dispatch => {
    deletePost(id).then(post => {
      dispatch({
        type: types.DELETE_POST,
        post,
      });
    });
  };
};
