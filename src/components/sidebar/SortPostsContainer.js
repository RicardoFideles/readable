import { connect } from 'react-redux';
import { setSortBy } from '../../actions/sort';
import SortPosts from './SortPosts';
import {
  SORT_KEY_TIMESTAMP,
  SORT_KEY_VOTE_SCORE,
} from '../../actions/constants';

const mapStateToProps = () => ({
  SORT_KEY_TIMESTAMP,
  SORT_KEY_VOTE_SCORE,
});

const mapDispatchToProps = dispatch => ({
  onSelectSortBy: order => dispatch(setSortBy(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortPosts);
