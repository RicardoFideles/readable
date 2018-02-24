import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts, upVotePost, downVotePost } from '../../actions/posts';
import { formatDate } from '../../utils'
import Votes from './votes'
import CommentList from '../comment/comment-list'
import PostActions  from './post-actions'

class PostDetail extends Component {

    componentWillUpdate() {
        console.log('component wiill update')
        console.log(this.props)
    }

    componentDidMount() {
        if (this.props.posts.length === 0) {
            this.props.fetchPosts()
                .then((res) => {
                    console.log('carregando finalizado.')
                })
        }
    }

    render() {
        const { posts, id, onUpVotePost, onDownVotePost } = this.props
        const post = posts.filter((p) => p.id === id)[0]
        console.log('renderizando....')
        if (post === undefined) {
            return null
        }
        console.log(post)

        return(
            <div className="row">
                <article className="post type-post status-publish format-standard hentry">
                    <div className="row">
                        <div className="post-meta-info col-sm-12 col-md-2">
                            <div className="entry-meta">
                                <span className="comments_count clearfix entry-comments-link">
                                    <span>
                                        {post.comments ? post.comments.length : 0}
                                    </span>
                                </span>
                                <Votes
                                    onUpvote={() => {
                                            console.log('aaa')
                                            onUpVotePost(post.id)
                                    }}
                                    onDownvote={() => onDownVotePost(post.id)}
                                    voteScore={post.voteScore}
                                />
                            </div>
                        </div>
                        <div className="post-content-wrap col-sm-12 col-md-10">
                            <header className="page-header">
                                <h1 className="entry-title">{post.title}</h1>
                                <span className="entry-author">
                                    Posted by <span className="author vcard entry-author-link"> {post.author} at {formatDate(post.timestamp)} </span>
                                </span>
                            </header>
                            <div className="entry-content">
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </div>
                </article>
                <PostActions id={post.id} />
                <CommentList postId={post.id} comments={post.comments} />
            </div>
       )
    }
}
const mapStateToProps = ({posts}) => {
    return {
        posts : posts.posts,
    }
}

const mapDispatchToProps = {
    fetchPosts,
    onUpVotePost : upVotePost,
    onDownVotePost : downVotePost,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
