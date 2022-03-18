import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { selectors } from '../../redux';

import '../../css/navigation.css';

const Navigation = () => {
  const categories = useSelector(selectors.getCategories);
  let { url } = useRouteMatch();

  const renderCategories = (categories) => {
    return categories.map(({ id, level, subcategories, name }) => {
      const hasSubCategory = subcategories ? true : false;
      return (
        <div key={id}>
          <li>
            <NavLink
              to={`${url}category/${id}`}
              className={`${level === 1 ? '' : level === 2 ? 'pl-4' : 'pl-5'}`}
            >
              {name}
            </NavLink>
          </li>
          {hasSubCategory && renderCategories(subcategories)}
        </div>
      );
    });
  };

  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink className='' to='/categories'>
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink className='' to='/user/new'>
            new user
          </NavLink>
        </li>
        {/* <li>
          <NavLink className='' activeClassName='active' to='/category/new'>
            new category
          </NavLink>
        </li> */}
        <div>{renderCategories(categories)}</div>
      </ul>
    </nav>
  );
};

export default Navigation;
