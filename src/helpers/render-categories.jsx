import React from 'react';

const renderCategories = (data) => {
  return data.map((category) => {
    const hasSubCategory = category.subcategories ? true : false;
    return (
      <React.Fragment key={category.id}>
        <option
          key={category.id}
          className={`${
            category.level === 1
              ? 'pl-2'
              : category.level === 2
              ? 'pl-3'
              : 'pl-5'
          }`}
          value={category.id}
        >
          {category.level === 1
            ? category.name
            : category.level === 2
            ? `-${category.name}`
            : `--${category.name}`}
        </option>
        {hasSubCategory && renderCategories(category.subcategories)}
      </React.Fragment>
    );
  });
};

export default renderCategories;
