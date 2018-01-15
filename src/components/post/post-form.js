import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { addPost } from '../../actions/posts';

const PostForm = (props) => {

  console.log('propo')
  console.log(props)
  return (
    <a>
        sss
    </a>

  )
}

const mapStateToProps = ({ categories }) => ({
  categories
})

export default reduxForm({
  form: 'post'
})(connect(mapStateToProps,
  { addPost }
)(PostForm));