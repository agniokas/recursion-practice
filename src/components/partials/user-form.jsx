import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux';
import useForm from '../../helpers/useForm';
import renderCategories from '../../helpers/render-categories';

const UserForm = () => {
  const {
    handleChange,
    firstName,
    lastName,
    email,
    age,
    errors,
    handleSubmit,
  } = useForm();

  const nameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const categoryRef = useRef();
  const submitRef = useRef();

  const categories = useSelector(selectors.getCategories);

  useEffect(() => nameRef.current.focus(), []);

  const handleFocus = (event) => {
    if (event.key === 'Enter') {
      const { name } = event.target;
      name === 'firstName' && lastNameRef.current.focus();
      name === 'lastName' && emailRef.current.focus();
      name === 'email' && ageRef.current.focus();
      name === 'age' && genderRef.current.focus();
      name === 'gender' && categoryRef.current.focus();
      name === 'category' && submitRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='firstName'>First Name</label>
        <input
          ref={nameRef}
          onKeyDown={handleFocus}
          name='firstName'
          type='text'
          id='firstName'
          placeholder='Name'
          className='form-control'
          value={firstName}
          onChange={handleChange}
          required
        />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div className='form=group'>
        <label htmlFor='secondName'>Last Name</label>

        <input
          onKeyDown={handleFocus}
          name='lastName'
          type='text'
          value={lastName}
          id='secondName'
          className='form-control'
          placeholder='Last Name'
          required
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email address</label>

        <input
          ref={emailRef}
          onKeyDown={handleFocus}
          name='email'
          type='email'
          value={email}
          id='email'
          className='form-control'
          placeholder='name@mail.com'
          required
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='age'>Age</label>

        <input
          ref={ageRef}
          onKeyDown={handleFocus}
          name='age'
          id='age'
          type='number'
          value={age}
          placeholder='Age'
          className='form-control'
          required
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Gender</label>
        <div className='form-check-inline'>
          <input
            ref={genderRef}
            onKeyDown={handleFocus}
            name='gender'
            id='female'
            value='female'
            type='radio'
            className='form-check-input'
          />
          <label htmlFor='female'>Female</label>
        </div>
        <div className='form-check-inline'>
          <input
            name='gender'
            id='male'
            value='male'
            type='radio'
            className='form-check-input'
          />
          <label htmlFor='male'>Male</label>
        </div>
        <div className='form-check-inline'>
          <input
            name='gender'
            id='other'
            value='other'
            type='radio'
            className='form-check-input'
          />
          <label htmlFor='other'>Other</label>
        </div>
      </div>

      <div className='form-group'>
        <label htmlFor='categorySelect' className='col-sm-2 col-form-label'>
          Select category
        </label>
        <select
          ref={categoryRef}
          onKeyDown={handleFocus}
          name='category'
          className='form-control'
          onChange={handleChange}
          id='categorySelect'
          required
        >
          <option value='select'>select</option>
          {renderCategories(categories)}
        </select>
      </div>
      <div>
        <button
          type='submit'
          name='submitbtn'
          className='btn btn-success'
          ref={submitRef}
          onKeyDown={handleFocus}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserForm;
