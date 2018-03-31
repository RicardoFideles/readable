import React from 'react';
import { connect } from 'react-redux';

import { setSortBy } from '../../actions/sort';

import {
  SORT_KEY_TIMESTAMP,
  SORT_KEY_VOTE_SCORE,
} from '../../actions/constants';

const SortPosts = ({ onSelectSortBy, sortBy }) => {
  return (
    <aside id="categories-1" className="widget widget_categories">
      <h3 className="widget-title">Filtrar por</h3>
      <div className="sorter">
        <select onChange={event => onSelectSortBy(event.target.value)}>
          <option value={SORT_KEY_VOTE_SCORE}>Score</option>
          <option value={SORT_KEY_TIMESTAMP}>Date</option>
        </select>
      </div>
    </aside>
  );
};

const mapStateToProps = ({ sortBy }) => ({
  sortBy,
});

const mapDispatchToProps = dispatch => ({
  onSelectSortBy: order => dispatch(setSortBy(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortPosts);
