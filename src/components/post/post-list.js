import './post-list.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/posts';
import { fetchCategories } from '../../actions/categories'


class PostList extends Component {

    componentWillMount() {
        this.props.fetchPosts()
        this.props.getCategories()
      }

    render() {
        const { posts } = this.props

        return(

            <div className="col-sm-12 col-md-9">
            <div className="row">
            {posts.map(post =>
                <article className="post type-post status-publish format-standard hentry" key={post.id}>
                    <div className="row">
                        <div className="post-meta-info col-sm-12 col-md-2">
                            <div className="entry-meta">
                                <time className="entry-time updated">
                                    jan<strong>19</strong>
                                </time>
                                <span className="comments_count clearfix entry-comments-link">
                                    <a href="#">0</a>
                                </span>
                            </div>
                        </div>
                        <div className="post-content-wrap col-sm-12 col-md-10">
                            <header className="page-header">
                                <h1 className="entry-title">
                                    <a href="#" rel="bookmark">
                                        {post.title}
                                    </a>
                                </h1>
                            </header>
                            <div className="entry-content">
                                <p>O</p>
                                <a className="read-more" href="#">Leia mais →</a>
                            </div>
                            <footer className="footer-meta">
                                <div className="cat-tag-meta-wrap">
                                    <span className="cats-meta">
                                        <i className="fa fa-folder"></i>
                                        <a href="#" rel="category tag">NodeJS</a>
                                    </span>
                                </div>
                            </footer>
                        </div>
                    </div>
                </article>
           )}
        </div>
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
        getCategories: () => dispatch(fetchCategories())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PostList)
