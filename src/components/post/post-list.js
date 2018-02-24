import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/posts';
import PostItem  from './post-item'
import PropTypes from 'prop-types';

class PostList extends Component {

    static propTypes = {
        posts: PropTypes.array
    }

    componentWillMount() {
        this.props.fetchPosts()
    }

    render() {
        const {category, goBack} = this.props
        console.log(goBack)
        console.log(this.props)
        let posts  = []
        if (category) {
            posts = this.props.posts.filter((p) => p.category === category)
        } else {
            posts = this.props.posts
        }
        return(
            <div className="row">
                {posts.map(post =>
                    <PostItem key={post.id} {...post} goBack={goBack}/>
                )}
            </div>
       )
    }
}
const mapStateToProps = ({posts}) => {
    return {
      posts : posts.posts
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
