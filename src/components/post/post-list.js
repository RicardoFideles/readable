import './post-list.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/posts';
import { fetchCategories } from '../../actions/categories'
import PostItem  from './post-item'


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
                        <PostItem key={post.id} {...post}/>
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
