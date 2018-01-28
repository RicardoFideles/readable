import React, { Component } from 'react'

class CommentForm extends Component {
    render() {
        return (
            <div className="comment-respond">
                <h3 id="reply-title" className="comment-reply-title">
                    Adicionar um comentário
                </h3>
                <form method="post" id="commentform" className="comment-form">
                    <p>
                        <textarea placeholder="..." id="comment" className="form-control" name="comment" cols="45" rows="8" aria-required="true"></textarea>
                    </p>
                    <p className="comment-form-author">
                        <label for="author">Nome</label>
                        <input id="author" name="author" type="text" size="30"/>
                    </p>
                    <p className="form-submit">
                        <input name="submit" type="submit" id="commentsubmit" className="submit btn btn-primary" value="Postar comentário"/>
                    </p>
                </form>
            </div>
        )
    }
}

export default CommentForm