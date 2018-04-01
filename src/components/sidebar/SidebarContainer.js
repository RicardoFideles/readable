import { connect } from 'react-redux';
import Sidebar from './Sidebar';

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
  };
};

export default connect(mapStateToProps, null)(Sidebar);
