import styled from 'styled-components';
import { Form } from 'formik';

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto auto;
  width: 900px;
  height: 83.2vh;
  margin-bottom: 20px;
`

export const LoginTitle = styled.h1`
  font-size: 32px;
  text-align: center;
  color: grey;
`

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  p {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #020243;
    text-align: center;
    width: 300px;
    letter-spacing: 1px;
    padding: 5px 0;
    margin: 0;
    font-weight: 400;
    color: grey;
  }
  span {
    cursor: pointer;
    color: #474543;
    font-weight: 600;
    color: grey;
  }
`

export const LoginButton = styled.button`
  width: 180px;
  height: 50px;
  font-size: 32px;
  font-weight: 700;
  border: 1px solid grey;
  color: grey;
  border-radius: 5px;
`