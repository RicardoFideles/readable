import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../../actions/posts';
import { withRouter } from 'react-router-dom';

class PostEdit extends Component {
  addNewPost = e => {
    e.preventDefault();
    // const title = e.target.title.value;
    // const body = e.target.body.value;
    // const author = e.target.author.value;
    // const category = e.target.category.value;

    const submitPost = {
      title: e.target.title.value,
      body: e.target.body.value,
      author: e.target.author.value,
      category: e.target.category.value,
    };

    this.props.updatePost(this.props.id, submitPost, () =>
      this.props.history.goBack()
    );
  };

  render() {
    const { posts } = this.props;

    if (posts.length === 0) {
      return null;
    }

    const post = posts.filter(p => p.id === this.props.id)[0];

    return (
      <form onSubmit={this.addNewPost}>
        <h2>New Post</h2>
        <ul className="form-style-1">
          <li>
            <label>
              Title <span className="required">*</span>
            </label>
            <input
              type="text"
              name="title"
              className="field-long"
              defaultValue={post.title}
            />
          </li>
          <li>
            <label>Category </label>
            <select name="category" className="field-select">
              {this.props.categories &&
                this.props.categories.map(category => (
                  <option
                    key={category.name}
                    value={category.name}
                    selected={category.name === post.category ? true : false}
                  >
                    {category.name}
                  </option>
                ))}
            </select>
          </li>
          <li>
            <label>
              Post <span className="required">*</span>
            </label>
            <textarea
              name="body"
              id="field5"
              className="field-long field-textarea"
              defaultValue={post.body}
            />
          </li>
          <li>
            <label>
              Author <span className="required">*</span>
            </label>
            <input
              type="text"
              name="author"
              className="field-long"
              defaultValue={post.author}
            />
          </li>
          <button>Submit </button>
        </ul>
      </form>
    );
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories: categories.categories,
    posts: posts.posts,
  };
}

export default withRouter(connect(mapStateToProps, { updatePost })(PostEdit));
