import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from '@bombillazo/rhf-plus';

import './styles.css';

const defaultValues = {
  firstName: 'bill',
  lastName: 'luo',
  email: 'email@hotmail.com',
};

function App() {
  const { register, handleSubmit } = useForm();
  // or you can set up the defaultValues at useForm
  // const { register, handleSubmit } = useForm({
  //   defaultValues,
  // });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input
        defaultValue={defaultValues.firstName}
        name="firstName"
        placeholder="bill"
        ref={register}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        defaultValue={defaultValues.lastName}
        name="lastName"
        placeholder="luo"
        ref={register}
      />

      <label htmlFor="email">Email</label>
      <input
        defaultValue={defaultValues.email}
        name="email"
        placeholder="email@hotmail.com"
        type="email"
        ref={register}
      />

      <input type="submit" />
    </form>
  );
}
