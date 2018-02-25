import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../../utils'
import CommentForm from './comment-form'
import { onDeleteComment } from '../../actions/comments';

class CommentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            parentId : 0,
            comment : {}
        }
        this.onSelectComment = this.onSelectComment.bind(this);
    }

    componentWillMount() {
        const {postId} = this.props
        this.setState((state) => ({
            parentId : postId,
        }))
    }

    onCommentDelete = (comment) => {
        let parentId = comment.parentId
        this.props.deleteComment(comment.id, parentId)
    }

    onSelectComment(comment) {
        this.setState({ isEdit: true, comment: comment });
    }



    render() {
        let {comments} = this.props
        if (comments === undefined) {
            comments = []
        }
        const {isEdit, parentId, comment }  = this.state
        return (
            <div>
                <CommentForm initialValues={comment} isEdit={isEdit} postId={parentId} id={comment.id ? comment.id : null} />
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

                                            <button className="comment-reply-link btn btn-primary" onClick={(event) => {
                                                event.preventDefault();
                                                this.onSelectComment(c)
                                            } }>Editar</button>

                                            <br/><br/>
                                            <button className="comment-reply-link btn btn-primary" onClick={() => this.onCommentDelete(c)}>Apagar</button>
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


export default connect(null, { deleteComment : onDeleteComment } )(CommentList)