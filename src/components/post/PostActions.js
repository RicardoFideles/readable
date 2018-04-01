import React from 'react';
import { Link } from 'react-router-dom';

import FaPencilSquare from 'react-icons/lib/fa/pencil-square';
import FaTimes from 'react-icons/lib/fa/times-circle';
import PropTypes from 'prop-types';

const PostActions = ({ id, onDelete, history }) => {
  return (
    <footer className="footer-meta">
      <div className="cat-tag-meta-wrap">
        <span className="cats-meta">
          <FaPencilSquare />
          <Link to={`/posts/${id}/edit`}>Edit</Link>
        </span>
        <span className="cats-meta">
          <FaTimes />
          <button
            onClick={event => {
              onDelete(id);
              history.go('/');
            }}
          >
            {' '}
            Delete
          </button>
        </span>
      </div>
    </footer>
  );
};

export default PostActions;

PostActions.propTypes = {
  id: PropTypes.string,
  onDelete: PropTypes.func,
};
