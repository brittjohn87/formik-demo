import React from 'react';
import './App.css';
import { SignupForm } from './signup-form';
import { YupSignupForm } from './yup-signup-form'

export const App = () => {
  return (
    <div>
      <h2>W/O Yup</h2>
      <SignupForm />
      <br /> 
      <h2>W/ Yup</h2>
      <YupSignupForm />
    </div>
  )
}
