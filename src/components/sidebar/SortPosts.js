import React from 'react';

const SortPosts = ({
  onSelectSortBy,
  SORT_KEY_TIMESTAMP,
  SORT_KEY_VOTE_SCORE,
}) => {
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

export default SortPosts;
