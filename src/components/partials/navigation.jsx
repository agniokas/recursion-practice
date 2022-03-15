import React from 'react';
import { useSelector } from 'react-redux';
import {
  Link,
  useParams,
  useRouteMatch,
  Switch,
  Route,
} from 'react-router-dom';
import { selectors } from '../../redux';

const Navigation = () => {
  const categories = useSelector(selectors.getCategories);
  let { url } = useRouteMatch();
  let { id } = useParams();
  console.log({ id });
  console.log({ url });
  const renderCategories = (categories) => {
    return categories.map((category) => {
      const hasSubCategory = category.subcategories ? true : false;
      return (
        <div>
          <li key={category.id}>
            <Link
              to={`${url}${category.id}`}
              className={`${
                category.level === 1
                  ? 'pl-2'
                  : category.level === 2
                  ? 'pl-3'
                  : 'pl-5'
              }`}
            >
              {category.name}
            </Link>
          </li>
          {hasSubCategory && renderCategories(category.subcategories)}
        </div>
      );
    });
  };

  return (
    <>
      <ul>
        <div>
          <li className=' pl-2'>
            <Link to='/new-user'>new user</Link>
          </li>
          <li className='pl-2'>
            <Link to='/new-category'>new category</Link>
          </li>
        </div>
        {renderCategories(categories)}
      </ul>
      <Switch>
        <Route path={`${url}:id`}>
          <Navigation />
        </Route>
      </Switch>
    </>
  );
};

export default Navigation;
