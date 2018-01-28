import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { fetchPosts, upVotePost, downVotePost, updatePost } from '../../actions/posts';
import { fetchCategories } from '../../actions/categories'
import { Link } from 'react-router-dom'


class PostForm extends Component {

  componentWillMount() {

    if (this.props.posts.length == 0) {
        this.props.fetchPosts()
    }

    if (this.props.categories.length == 0) {
      this.props.getCategories()
    }
  }

  editPost = (e) => {
    e.preventDefault()
    console.log(this.props)
    const postId = this.props.post.id
    const title = e.target.title.value
    const body = e.target.body.value

    if (body === "" || title === "") {
      alert("Both fields are mandatory")
    } else {
      this.props.onUpdatePost(postId, {title, body} ,
        () => this.props.history.push('/'))
    }
  }

  render() {
    const { posts, id } = this.props

    const post = posts.filter((p) => p.id === id)[0]

    if (post === undefined) {
      return null
    }

    return (
      <div>
        <form onSubmit={this.editPost}>
          <h2>Edit Post</h2>
          <ul className="form-style-1">
            <li>
              <label>Title <span className="required">*</span></label>
              <input defaultValue={post.title} type="text" name="title" className="field-long" />
            </li>
            <li>
              <label>Post <span className="required">*</span></label>
              <textarea defaultValue={post.body} name="body" id="field5" className="field-long field-textarea"></textarea>
            </li>
            <button>Update</button>
            <Link to={`/post/${post.id}`}>
              <button>Cancel</button>
            </Link>
          </ul>
        </form>
      </div>
    )
  }
}

  const mapStateToProps = ({posts, categories}) => {
    return {
      posts : posts.posts,
      categories: categories.categories
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        getCategories: () => dispatch(fetchCategories()),
        onUpVotePost : upVotePost,
        onDownVotePost : downVotePost,
        onUpdatePost : updatePost
    }
  }

  export default reduxForm({form: 'post'})(connect(mapStateToProps, mapDispatchToProps)(PostForm))