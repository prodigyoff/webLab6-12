import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85.3vh;
    h1 {
        color: grey;
        font-size: 48px;
        font-weight: 700;
    }
`

export const FieldsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 400px;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 80px;
`

export const Field = styled.div`
    display: flex;
    height: 150px;
    width: 40%;
    flex-direction: column;
`

export const Label = styled.label`
    color: grey;
    font-size: 28px;
    font-weight: 700;
`

export const Input = styled.input`
    -webkit-appearance: none;
    height: 36px;
    outline: none;
    border: 1px solid grey; 
    border-radius: 12px;
    padding: 0 8px;
    color: grey;
    font-size: 20px;
`

export const Button = styled.button`
    width: 26%;
    height: 60px;
    padding: 8px 10px;
    margin: 0 90px 50px 0;
    border-radius: 16px;
    font-size: 32px;
    font-weight: 700;
    border: 1px solid grey;
    color: grey;
    outline: none;
`

export const Error = styled.span`
    color: red;
    margin-left: 6px;
    font-size: 18px;
    font-weight: 600;
`