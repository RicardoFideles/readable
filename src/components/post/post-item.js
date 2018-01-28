

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { upVotePost, downVotePost } from '../../actions/posts'
import Votes  from './votes'
import { formatDate } from '../../utils'
import FaPencilSquare from 'react-icons/lib/fa/pencil-square';
import FaTimes from 'react-icons/lib/fa/times-circle';


const PostItem = ({id, title, voteScore, category, comments = [], author, timestamp, onUpVotePost, onDownVotePost }) => (
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
                        <Link to={`${category}/${id}`}>
                            {title}
                        </Link>
                    </h1>
                </header>
                <p className='author-date-time'>by <b>{author}</b> at {formatDate(timestamp)}</p>
                <div className="entry-content">
                    <Link to={`${category}/${id}`} className="read-more">
                        Leia mais →
                    </Link>
                </div>
                <footer className="footer-meta">
                    <div className="cat-tag-meta-wrap">
                        <span className="cats-meta">
                            <FaPencilSquare />
                            <Link to={`/posts/${id}/edit`}>
                                Edit
                            </Link>
                        </span>
                        <span className="cats-meta">
                            <FaTimes />
                            <Link to={`/posts/${id}/delete`}>
                                Delete
                            </Link>
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    </article>
)

export default connect(null, { onUpVotePost : upVotePost , onDownVotePost : downVotePost })(PostItem)