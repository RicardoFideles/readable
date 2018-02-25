
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm , reset} from 'redux-form';
import { createComment, updateComment } from '../../actions/comments';
import PropTypes from 'prop-types';

const CommentForm = (props) => {
    const { id, postId, handleSubmit, pristine, submitting, createComment, updateComment } = props;

    return (
        <div className="comment-respond">
            <h3 id="reply-title" className="comment-reply-title">
                Adicionar um comentário
            </h3>
            <form method="post" id="commentform" name="comment-form" className="comment-form" onSubmit={handleSubmit(data => {
                const { author, body } = data;
                data = { author, body };
                if (id) {
                    updateComment(id, data, postId)
                } else {
                    createComment(data, postId)
                }
                })}>
                <p>
                    <Field
                        name='body'
                        component='textarea'
                        placeholder='Comentário...'
                    />
                </p>
                <p className="comment-form-author">
                    <label>Autor</label>
                    <Field
                        name='author'
                        component='input'
                        type='text'
                        placeholder='Nome do author'
                    />
                </p>
                <p className="form-submit">
                    <button type='button'>
                        Cancelar
                    </button>
                    <button type='submit' disabled={pristine || submitting}>
                        Postar
                    </button>
                </p>
            </form>
        </div>
    )
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('comment'));

export default reduxForm({
    form: 'comment',
    onSubmitSuccess: afterSubmit,
  })(connect(
    undefined,
    { createComment, updateComment}
  )(CommentForm))


  CommentForm.propTypes = {
    id : PropTypes.string
  }