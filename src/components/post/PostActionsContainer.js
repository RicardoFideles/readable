import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { removePost } from '../../actions/posts';
import { connect } from 'react-redux';
import PostActions from './PostActions';
export default withRouter(connect(null, { onDelete: removePost })(PostActions));
