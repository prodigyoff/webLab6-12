import React from 'react';
import {LoginButton, LoginContainer, LoginForm, LoginTitle } from '../styles/LoginPage.styles';
import { Formik } from 'formik';
import ValidationField from '../components/ValidationField';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup'

const LoginPage = () => {
  let history = useHistory();

  const goToSignUp = () => {
    history.push('/register');
  };

  const submitForm = (values) => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const email = localStorage.getItem('email');
    localStorage.setItem('isAuth', true);
    if ((username === values.username || email === values.username) && password === values.password) {
      history.push("/");
      history.go(0);
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>Log in to continue</LoginTitle>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .min(2, 'Too Short!')
            .max(30, 'Too Long!')
            .required('Required')
            .test('test-name', 'Include spaces', function (value) {
              return /\s/.test(value) ? false : true;
            }),
          password: Yup.string()
            .min(8, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required')
            .matches(/^(?!\s+$).+/g, 'Invalid password')
            .test('test-name', 'Include spaces', function (value) {
              return /\s/.test(value) ? false : true;
            })
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
              'Must atleast contain 8 characters, One uppercase, One lowercase, One number and one special case character'
            ),
        })}
        onSubmit={submitForm}
      >
        {({ handleSubmit }) => (
          <LoginForm>
            <ValidationField label='Login/Email' name='username' type='text' placeholder='Enter your login or email' />
            <ValidationField label='Password' name='password' type='password' placeholder='Enter your password' />
            <LoginButton onClick={handleSubmit}>Submit</LoginButton>
            <p>
              Don't have an account?{" "}
              <span onClick={goToSignUp}>Sign Up</span>
            </p>
          </LoginForm>
        )}
      </Formik>
    </LoginContainer>
  );
};

export default LoginPage;