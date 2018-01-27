import './post-list.css'
import React, { Component } from 'react';
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
        const category = this.props.category
        let posts  = []
        if (category) {
            posts = this.props.posts.filter((p) => p.category === category)
        } else {
            posts = this.props.posts
        }
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
