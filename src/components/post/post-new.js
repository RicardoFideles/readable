import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPost } from '../../actions/posts';
const uuidv1 = require('uuid/v1');



class PostNew extends Component {

  addNewPost = (e) => {
    e.preventDefault()
    // const title = e.target.title.value;
    // const body = e.target.body.value;
    // const author = e.target.author.value;
    // const category = e.target.category.value;

    const submitPost = {
      id: uuidv1(),
      timestamp: Date.now(),
      title: e.target.title.value,
      body: e.target.body.value,
      author: e.target.author.value,
      category: e.target.category.value,
    }

    this.props.addPost(submitPost, () => this.props.goBack())
  }

  render() {
    return (
      <form onSubmit={this.addNewPost}>
        <h2>New Post</h2>
        <ul className="form-style-1">
          <li>
            <label>Name <span className="required">*</span></label>
            <input type="text" name="author" className="field-long" />
          </li>
          <li>
            <label>Title <span className="required">*</span></label>
            <input type="text" name="title" className="field-long" />
          </li>
          <li>
            <label>Category </label>
            <select name="category" className="field-select">
              {this.props.categories && this.props.categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>
          </li>
          <li>
            <label>Post <span className="required">*</span></label>
            <textarea name="body" id="field5" className="field-long field-textarea"></textarea>
          </li>
          <button>Submit </button>
        </ul>
      </form>
    )
  }

}

function mapStateToProps({ categories }) {
    return {
      categories: categories.categories
    }
  }

export default connect(mapStateToProps, { addPost })(PostNew)

