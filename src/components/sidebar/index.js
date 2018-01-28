
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions/categories'


class Sidebar extends Component {

    componentWillMount() {
        this.props.getCategories()
    }

    render () {
        const { categories } = this.props
        return (
            <div className='sidebar'>
                <aside id="categories-1" className="widget widget_categories">
                    <h3 className="widget-title">Ações</h3>
                    <Link to={`/newPost`}>Novo Post</Link>
                </aside>

                <aside id="categories-1" className="widget widget_categories">
                    <h3 className="widget-title">Filtrar por</h3>
                    <ul className="nav">
                        <li>
                            <Link to={`/newPost`}>Pontuação</Link>
                        </li>
                        <li>
                            <Link to={`/newPost`}>Data</Link>
                        </li>
                    </ul>
                </aside>

                <aside id="categories-2" className="widget widget_categories">
                    <h3 className="widget-title">Categorias</h3>
                    <ul className="nav">
                    {categories.map((category, index) =>
                        (
                            <li className="cat-item cat-item-3" key={index}>
                                <Link to={`/${category.name}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </aside>
          </div>
        )
    }
}

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
