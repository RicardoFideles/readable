import * as types from '../actions/constants';

export const DEFAULT_SORT_BY = {
  posts: {
    type: 'voteScore',
  },
};

const sortBy = (state = DEFAULT_SORT_BY, action) => {
  switch (action.type) {
    case types.SORT_POST:
      return {
        ...state,
        posts: {
          type: action.sort,
        },
      };
    default:
      return state;
  }
};

export default sortBy;
