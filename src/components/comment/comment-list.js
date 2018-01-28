import React, { Component } from 'react'
import { formatDate } from '../../utils'
import CommentForm from './comment-form'

class CommentList extends Component {
    render() {
        const {id} = this.props
        let {comments} = this.props
        if (comments === undefined) {
            comments = []
        }
        return (
            <div>
                <CommentForm />
                <ol className="comment-list media-list">
                    {comments.map(c =>
                        <li key={c.id} className="comment even thread-even depth-1">
                            <article id="div-comment-2" className="comment-body media">
                                <div className="media-body">
                                    <div className="media-body-wrap">
                                        <div className="comment-heading">
                                            <h5 className="media-heading">
                                                <cite className="fn">{c.author}</cite>
                                            </h5>
                                            <div className="comment-meta">
                                                <time className="updated">
                                                    {formatDate(c.timestamp)}
                                                </time>
                                            </div>
                                        </div>
                                        <div className="comment-content">
                                            <p>{c.body}</p>
                                        </div>
                                        <div className="reply comment-reply">
                                            <a rel="nofollow" className="comment-reply-link btn btn-primary" href="">
                                                Editar
                                            </a>
                                            <br/><br/>
                                            <a rel="nofollow" className="comment-reply-link btn btn-primary" href="">
                                                Apagar
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                    )}
                </ol>
            </div>
        )
    }
}

export default CommentList