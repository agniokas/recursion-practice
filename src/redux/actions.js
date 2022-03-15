import { ADD_CATEGORY, ADD_USER, ON_INIT } from './types';

export const onInit = () => {
  return {
    type: ON_INIT,
  };
};

export const setUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const setCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: category,
  };
};
