import React from 'react';
import { Link } from 'react-router-dom';
import SortPosts from './SortPostsContainer';

const Sidebar = ({ categories }) => (
  <div className="sidebar">
    <aside id="categories-1" className="widget widget_categories">
      <h3 className="widget-title">Ações</h3>
      <Link to={`/newPost`}>Novo Post</Link>
    </aside>

    <SortPosts />

    <aside id="categories-2" className="widget widget_categories">
      <h3 className="widget-title">Categorias</h3>
      <ul className="nav">
        {categories.map((category, index) => (
          <li className="cat-item cat-item-3" key={index}>
            <Link to={`/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  </div>
);

export default Sidebar;
