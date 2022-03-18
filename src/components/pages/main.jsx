import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { selectors } from '../../redux';

import '../../css/main.css';

const convertToId = (pathname) => {
  const id = pathname.split('/')[2];
  return id;
};

const Main = () => {
  const categories = useSelector(selectors.getCategories);
  const users = useSelector(selectors.getUsers);
  const location = useLocation();
  const refToFind = convertToId(location.pathname);
  const revealRefs = useRef([]);
  revealRefs.current = [];
  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  // useEffect(() => {
  //   const executeScroll = (myRef) => scrollToRef(myRef);
  //   if (refToFind) {
  //     executeScroll(refToFind);
  //   }
  // }, [refToFind]);

  const renderCategoriesList = (data) => {
    return data.map((category) => {
      const hasSubCategory = category.subcategories ? true : false;
      return (
        <div key={category.id} ref={addToRefs(category.id)}>
          <div className='block'>
            <div className='card-header'>{category.name}</div>
            {users &&
              users.map((user) => {
                if (user.category === category.id) {
                  return (
                    <ul
                      key={user.firstName + ' ' + user.lastName}
                      className='card-group pt-1'
                    >
                      <li className='card-group-item'>
                        {user.firstName + ' ' + user.lastName}
                      </li>
                      <li>{user.age} years old</li>
                      <li>{user.gender}</li>
                      <li>{user.email}</li>
                    </ul>
                  );
                }
              })}
          </div>
          {hasSubCategory && renderCategoriesList(category.subcategories)}
        </div>
      );
    });
  };

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return <div className='block'>{renderCategoriesList(categories)}</div>;
};

export default Main;
