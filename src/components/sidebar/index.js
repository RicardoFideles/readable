
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions/categories'

const Sidebar = ({props, categories}) => (
  <div className='sidebar'>
    <aside id="categories-2" className="widget widget_categories">
        <h3 className="widget-title">Categorias</h3>
        <ul className="nav">
        {categories.map((category, index) =>
            (
                <li className="cat-item cat-item-3" key={index}>
                    <Link to={`/categories/${category.name}`}>{category.name}</Link>
                </li>
            ))}
        </ul>
    </aside>
  </div>
)

const mapStateToProps = ({categories}) => {
    return {
      categories: categories.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(fetchCategories())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
