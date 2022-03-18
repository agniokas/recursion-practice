import { useState } from 'react';
import { omit } from 'lodash';
import { useDispatch } from 'react-redux';
import { actions } from '../redux';
import { useHistory } from 'react-router';

const useForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.persist();

    let { name, value } = event.target;

    const letters = /^[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ -]+$/;
    const numbers = /^[0-9]+$/;
    const emailRegExp = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(value);

    const validate = (name, value) => {
      switch (name) {
        case 'firstName':
          if (!value.match(letters) || value.length <= 1) {
            setErrors({
              ...errors,
              firsName: 'Name must be only letters and atleast 2 letters',
            });
          } else {
            const newObj = omit(errors, 'firstName');
            setErrors(newObj);
          }
          break;
        case 'lastName':
          if (!value.match(letters) || value.length <= 1) {
            setErrors({
              ...errors,
              lastName: 'Last name must be only letters and atleast 2 letters',
            });
          } else {
            const newObj = omit(errors, 'lastName');
            setErrors(newObj);
          }
          break;
        case 'email':
          if (!emailRegExp) {
            setErrors({
              ...errors,
              email: 'Enter a valid email address',
            });
          } else {
            const newObj = omit(errors, 'email');
            setErrors(newObj);
          }
          break;
        case 'age':
          if (!value.match(numbers) || value.length < 1 || value === 0) {
            setErrors({
              ...errors,
              age: 'Must be numbers and at least 1 year old',
            });
          } else {
            const newObj = omit(errors, 'age');
            setErrors(newObj);
          }
          break;
        default:
          break;
      }
    };

    validate(name, value);

    name === 'firstName' && setFirstName(value);
    name === 'lastName' && setLastName(value);
    name === 'email' && setEmail(value);
    name === 'age' && setAge(value);
    name === 'gender' && setGender(value);
    name === 'category' && setCategory(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      age,
      gender,
      category,
    };
    if (Object.keys(errors).length === 0 && Object.keys(user).length >= 5) {
      dispatch(actions.setUser(user));
      alert('User submited');
      history.replaceState('/categories');
    } else {
      alert('The is error!');
    }
  };

  return {
    firstName,
    lastName,
    email,
    age,
    gender,
    category,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
