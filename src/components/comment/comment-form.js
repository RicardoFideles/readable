import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../actions/comments';
import { addNewPost } from '../../api/index';
const uuidv1 = require('uuid/v1');

class CommentForm extends Component {

    state = {
        author : '',
        body : ''
    }

    componentWillUpdate() {
        const {comment, isEdit} = this.props
        console.log(this.props)
        if (isEdit) {
            console.log(comment)
            this.setState((state) => ({
                author : comment.author,
                body : comment.body
            }))
        }
    }

    addComment = (e) => {
        const {parentId} = this.props
        e.preventDefault()
        if (this.props.isEdit) {
        } else {
            const author = e.target.author.value;
            const body = e.target.body.value;
            const submitComment = {
                id: uuidv1(),
                author,
                body,
                parentId
            }
            this.addNewPost(submitComment, parentId)
        }

    }

    addNewPost = (comment, parentId) => {
        this.props.createComment(comment,parentId )
    }

    editComment(comment) {

    }

    render() {
        return (
            <div className="comment-respond">
                <h3 id="reply-title" className="comment-reply-title">
                    Adicionar um comentário
                </h3>
                <form method="post" id="commentform" className="comment-form" onSubmit={this.addComment}>
                    <p>
                        <textarea placeholder="..." id="comment" className="form-control" name="body" cols="45" rows="8" defaultValue={this.state.body}></textarea>
                    </p>
                    <p className="comment-form-author">
                        <label>Autor</label>
                        <input id="author" name="author" type="text" size="30" defaultValue={this.state.author}/>
                    </p>
                    <p className="form-submit">
                        <input name="submit" type="submit" id="commentsubmit" className="submit btn btn-primary" value="Postar comentário"/>
                    </p>
                </form>
            </div>
        )
    }
}

export default connect(null, { createComment })(CommentForm)