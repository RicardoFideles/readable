

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { upVotePost, downVotePost } from '../../actions/posts'
import Votes  from './votes'
import { formatDate } from '../../utils'

const PostItem = ({id, title, voteScore, comments = [], author, timestamp, onUpVotePost, onDownVotePost }) => (
    <article className="post type-post status-publish format-standard hentry" key={id}>
        <div className="row">
            <div className="post-meta-info col-sm-12 col-md-2">
                <div className="entry-meta">
                    <Votes
                        onUpvote={() => {
                                onUpVotePost(id)
                        }}
                        onDownvote={() => onDownVotePost(id)}
                        voteScore={voteScore}
                    />
                    <span className="comments_count clearfix entry-comments-link">
                        <span>{comments.length}</span>
                    </span>
                </div>
            </div>
            <div className="post-content-wrap col-sm-12 col-md-10">
                <header className="page-header">
                    <h1 className="entry-title">
                        <Link to={`/posts/${id}`}>
                            {title}
                        </Link>
                    </h1>
                </header>
                <p className='author-date-time'>by <b>{author}</b> at {formatDate(timestamp)}</p>
                <div className="entry-content">
                    <Link to={`/posts/${id}`} className="read-more">
                        Leia mais →
                    </Link>
                </div>
            </div>
        </div>
    </article>
)

export default connect(null, { onUpVotePost : upVotePost , onDownVotePost : downVotePost })(PostItem)