import postReducer from './posts';

let initialArray = [];
let expectedPosts = [];
let firstItem = {};
let secondItem = {};
let updatedItem = {};
let expectedUpdatePosts = {};
let secondCommentsAddedItem = {};
let newComment = {};
let secondItemWithComment = {};
let expectedPostsWithUpdateComment = [];
let expectedPostsWithUpdatesComment = [];
let updatedComment = {};
let secondCommentsUpdatedItem = {};

beforeEach(() => {
  (newComment = { id: 2, body: 'Very good', body: 'Ricardo' }),
    (updatedComment = {
      id: 2,
      body: 'Not to good, needs improvement',
      author: 'Udacity',
    }),
    (firstItem = { id: 1, title: 'Hello Enzyme', voteScore: 1, comments: [] }),
    (secondItem = { id: 2, title: 'Hello Redux', voteScore: 1, comments: [] }),
    (secondItemWithComment = {
      id: 2,
      title: 'Hello Redux',
      voteScore: 1,
      comments: [newComment],
    }),
    (secondCommentsAddedItem = {
      id: 2,
      title: 'Hello Redux',
      voteScore: 1,
      comments: [{ id: 1, body: 'Very good Article', author: 'Ricardo' }],
    }),
    (secondCommentsUpdatedItem = {
      id: 2,
      title: 'Hello Redux',
      voteScore: 1,
      comments: [updatedComment],
    }),
    (updatedItem = {
      id: 1,
      title: 'Hello Enzyme',
      voteScore: 5,
      comments: [],
    }),
    (initialArray = [firstItem]),
    (expectedPosts = [firstItem, secondItem]),
    (expectedUpdatePosts = [updatedItem, secondItem]),
    (expectedPostsWithUpdateComment = [firstItem, secondItemWithComment]),
    (expectedPostsWithUpdatesComment = [firstItem, secondCommentsUpdatedItem]);
});

describe('posts reducer', () => {
  it('should handle initial state', () => {
    expect(postReducer(undefined, {})).toEqual({
      posts: [],
    });
  });
  it('should handle GET_POSTS action', () => {
    expect(
      postReducer(
        {},
        {
          type: 'GET_POSTS',
          posts: initialArray,
        }
      )
    ).toEqual({
      posts: initialArray,
    });
  });
  it('should handle ADD_NEW_POST action', () => {
    expect(
      postReducer(
        { posts: initialArray },
        {
          type: 'ADD_NEW_POST',
          post: secondItem,
        }
      )
    ).toEqual({
      posts: expectedPosts,
    });
  });
  it('should handle UPDATE_VOTE action', () => {
    expect(
      postReducer(
        { posts: expectedPosts },
        {
          type: 'UPDATE_VOTE',
          post: updatedItem,
        }
      )
    ).toEqual({
      posts: expectedUpdatePosts,
    });
  });

  it('should handle ADD_COMMENT action', () => {
    expect(
      postReducer(
        { posts: expectedPosts },
        {
          type: 'ADD_COMMENT',
          parentId: 2,
          comment: newComment,
        }
      )
    ).toEqual({
      posts: expectedPostsWithUpdateComment,
    });
  });
  it('should handle EDIT_COMMENT action', () => {
    expect(
      postReducer(
        { posts: expectedPostsWithUpdateComment },
        {
          type: 'EDIT_COMMENT',
          id: 2,
          comment: updatedComment,
        }
      )
    ).toEqual({
      posts: expectedPostsWithUpdatesComment,
    });
  });

  it('should handle EDIT_COMMENT action  when commentID not found', () => {
    expect(
      postReducer(
        { posts: expectedPostsWithUpdateComment },
        {
          type: 'EDIT_COMMENT',
          id: 4,
          comment: updatedComment,
        }
      )
    ).toEqual({
      posts: expectedPostsWithUpdateComment,
    });
  });

  it('should handle DELETE_COMMENT action', () => {
    expect(
      postReducer(
        { posts: expectedPostsWithUpdateComment },
        {
          type: 'DELETE_COMMENT',
          parentId: 2,
          commentId: 2,
        }
      )
    ).toEqual({
      posts: expectedPosts,
    });
  });

  it('should handle DELETE_COMMENT action when commentID not found ', () => {
    expect(
      postReducer(
        { posts: expectedPostsWithUpdateComment },
        {
          type: 'DELETE_COMMENT',
          parentId: 2,
          commentId: 3,
        }
      )
    ).toEqual({
      posts: expectedPostsWithUpdateComment,
    });
  });
});
