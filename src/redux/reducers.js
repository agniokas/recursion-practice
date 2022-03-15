import { ADD_CATEGORY, ADD_USER, ON_INIT } from './types';

const initialState = {
  loading: true,
  users: [
    {
      name: 'Jane',
      lastName: 'Doe',
      email: 'mail@test.com',
      age: 25,
      gender: 'female',
      category: 9,
    },
  ],
  categories: [
    {
      id: 1,
      name: 'category-1',
      level: 1,
      users: [],
      subcategories: [
        {
          id: 2,
          name: 'subcategory-1',
          level: 2,
          users: [],
        },
        {
          id: 3,
          name: 'subcategory-2',
          level: 2,
          users: [],
          subcategories: [
            {
              id: 4,
              level: 3,
              name: 'sub sub-1',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'category-2',
      level: 1,
      users: [],
      subcategories: [
        {
          id: 6,
          name: 'subcategory-1',
          level: 2,
          users: [],
          subcategories: [],
        },
        {
          id: 7,
          name: 'subcategory-2',
          level: 2,
          users: [],
          subcategories: [
            {
              id: 8,
              level: 3,
              users: [],
              name: 'sub sub-1',
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: 'category-3',
      level: 1,
      users: [
        {
          name: 'Jane',
          lastName: 'Doe',
          email: 'mail@test.com',
          age: 25,
          gender: 'female',
          category: 9,
        },
      ],
      categories: [],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_INIT:
      return {
        state,
        loading: false,
      };
    case ADD_CATEGORY:
      const newCategory = action.payload.newCategory;
      const categories = state.categories;

      return {
        ...state,
        loading: false,
        categories: [...categories, newCategory],
      };
    case ADD_USER:
      const newUser = action.payload;
      const users = state.users;

      return {
        ...state,
        loading: false,
        users: [...users, newUser],
      };
    default:
      return state;
  }
};

export default reducer;
