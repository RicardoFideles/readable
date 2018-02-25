import React from 'react';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import PropTypes from 'prop-types';

const Votes = ({ voteScore, onUpvote, onDownvote }) => (
  <div className='stats'>
    <div className='stats-item'>
      <FaThumbsOUp onClick={onUpvote} />
    </div>
    <div className='stats-item'>
      <span>{voteScore}</span>
    </div>
    <div className='stats-item'>
      <FaThumbsODown onClick={onDownvote} />
    </div>
  </div>
)

export default Votes;

Votes.propTypes = {
  voteScore : PropTypes.number,
  onUpvote : PropTypes.func,
  onDownvote : PropTypes.func,
}