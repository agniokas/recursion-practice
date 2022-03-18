import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../../redux';

const findCategory = (categoryArr, id) => {
  console.log('id', id);
  let categoryToUpdate = [];
  categoryArr.find((category) => {
    if (category.id === id) {
      console.log('found item to update', category);
      categoryToUpdate = category;
    }
    return categoryToUpdate;
  });
};

const CategoryForm = () => {
  const [name, setName] = useState('');
  const [chosenCategory, setChosenCategory] = useState(null);
  const [chosenSubCategory, setChosenSubCategory] = useState(null);
  const categories = useSelector(selectors.getCategories);
  const dispatch = useDispatch();

  const onSubmit = () => {
    let categoryToUpdate =
      chosenCategory !== null
        ? chosenSubCategory !== null
          ? chosenSubCategory
          : chosenCategory
        : categories;

    // dispatch(thunkActions.setNewCategory(categoryToUpdate, name));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className=' form-group'>
        <label htmlFor='inputCategoryTitle' className='form-label'>
          Category/ subcategory name
        </label>
        <input
          name='title'
          type='text'
          value={name}
          className='form-control'
          id='inputCategoryTitle'
          aria-describedby='categoryName'
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
      </div>
      <div className=' form-group'>
        <label htmlFor='inputCategory' className='form-label'>
          Choose category
        </label>
        <select
          className='form-control'
          id='formControlSelect1'
          onChange={(e) => {
            const id = parseInt(e.target.value);
            const mycategory = categories.find((category) => {
              if (category.id === id) {
                return category;
              }
              return null;
            });
            setChosenCategory(mycategory);
          }}
        >
          <option value='0'></option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      {
        <div className='mb-3'>
          <label htmlFor='inputsubCategory' className='form-label'>
            Choose subCategory
          </label>
          <select
            className='form-control'
            id='formControlSelect2'
            onClick={(e) => {
              const id = parseInt(e.target.value);
              console.log({ id });
              console.log('chosencat in control selec', chosenCategory);
              const mySubCategory = chosenCategory.subcategories.find(
                (category) => {
                  if (category.id === id) {
                    return category;
                  }
                  return null;
                }
              );
              setChosenSubCategory(mySubCategory);
            }}
          >
            <option value='0'></option>
            {chosenCategory !== null &&
              chosenCategory.subcategories &&
              chosenCategory.subcategories.map((subcat) => {
                return (
                  <option key={subcat.id} value={subcat.id}>
                    {subcat.name}
                  </option>
                );
              })}
          </select>
        </div>
      }
      <button type='submit' className='btn btn-success'>
        Add subcategory
      </button>
    </form>
  );
};

export default CategoryForm;
