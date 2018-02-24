import React from 'react';
import { Link } from 'react-router-dom';
import FaPencilSquare from 'react-icons/lib/fa/pencil-square';
import FaTimes from 'react-icons/lib/fa/times-circle';
import { removePost } from '../../actions/posts';
import { connect } from 'react-redux'


const PostActions = ({id, onDelete, goBack}) =>
    (

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
                <button onClick={ (event) => {
                    onDelete(id)
                    goBack('/')
                }  }> Delete</button>
            </span>
        </div>
    </footer>
)


export default connect(null, {onDelete : removePost })(PostActions)
