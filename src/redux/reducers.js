import { ADD_CATEGORY, ADD_USER, ON_INIT } from './types';

const initialState = {
  loading: true,
  users: [
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'mail@test.com',
      age: 25,
      gender: 'female',
      category: 9,
    },
    {
      firstName: 'Jon',
      lastName: 'Doe',
      email: 'jon@doe.com',
      age: 20,
      gender: 'male',
      category: 3,
    },
    {
      firstName: 'William',
      lastName: 'King',
      email: 'wiliam@king.com',
      age: 45,
      gender: 'male',
      category: 2,
    },
    {
      firstName: 'Valeria',
      lastName: 'Vanilla',
      email: 'Valiaria@mail.com',
      age: 33,
      gender: 'female',
      category: 4,
    },
    {
      firstName: 'Barbie',
      lastName: 'Ken',
      email: 'Barbie@mail.com',
      age: 19,
      gender: 'female',
      category: 4,
    },
  ],
  categories: [
    {
      id: 1,
      name: 'category-1',
      level: 1,
      isOpen: false,
      subcategories: [
        {
          id: 2,
          name: 'subcategory-1',
          level: 2,
          isOpen: false,
          subcategories: [],
        },
        {
          id: 3,
          name: 'subcategory-2',
          level: 2,
          isOpen: false,
          subcategories: [
            {
              id: 4,
              level: 3,
              isOpen: false,
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
      isOpen: false,
      subcategories: [
        {
          id: 6,
          name: 'subcategory-1',
          level: 2,
          isOpen: false,
          subcategories: [],
        },
        {
          id: 7,
          name: 'subcategory-2',
          level: 2,
          isOpen: false,
          subcategories: [
            {
              id: 8,
              level: 3,
              isOpen: false,
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
      isOpen: false,
      subcategories: [],
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
      return {
        ...state,
        loading: false,
        categories: action.payload,
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
