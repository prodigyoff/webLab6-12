import styled from 'styled-components';
import { Form } from 'formik';

export const RegisterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto auto;
  width: 900px;
  margin-bottom: 20px;
  height: 83.17vh;
  p {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: grey;
    text-align: center;
    width: 300px;
    letter-spacing: 1px;
    padding: 5px 0;
    margin: 0;
    font-weight: 400;
  }
  span {
    cursor: pointer;
    color: grey;
    font-weight: 600;
  }
`

export const RegisterForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 900px;
`

export const RegisterButton = styled.button`
  width: 180px;
  height: 50px;
  font-size: 32px;
  font-weight: 700;
  border: 1px solid grey;
  border-radius: 5px;
  color: grey;
  outline: none;
`