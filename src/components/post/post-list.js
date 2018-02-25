import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/posts';
import PostItem  from './post-item'
import PropTypes from 'prop-types';
import { getPostsOrderedByVotes}  from '../../selectors'

class PostList extends Component {

    static propTypes = {
        posts: PropTypes.array
    }

    componentWillMount() {
        this.props.fetchPosts()
    }

    render() {
        const {category, go} = this.props
        let posts  = []
        if (category) {
            posts = this.props.posts.filter((p) => p.category === category)
        } else {
            posts = this.props.posts
        }
        return(
            <div className="row">
                {posts.map(post =>
                    <PostItem key={post.id} {...post} go={go}/>
                )}
            </div>
       )
    }
}
const mapStateToProps = (state) => {
    return {
      posts : getPostsOrderedByVotes(state)
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
