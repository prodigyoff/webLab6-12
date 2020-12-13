import styled from 'styled-components'

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: grey;
    height: 85.1vh;
    h1 {
        font-size: 48px;
    }
`

export const ItemContainer = styled.div`
    height: 160px;
    width: 90%;
    margin: 22px 0;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: grey;
    h1 {
        width: 500px;
        margin: 0 160px 0 30px;
        font-size: 36px;
    }
    h2 {
        margin: 0 5px;
        font-size: 32px;
    }
`

export const CountContainer = styled.button`
    border: 1px solid grey;
    color: grey;
    outline: none;
    border-radius: 12px;
    font-size: 36px;
    font-weight: 600;
    width: 50px;
    height: 50px;
    text-align: center;
`

export const DeleteButton = styled.button`
    width: 160px;
    height: 50px;
    margin: 0 48px 0 16px;
    border-radius: 12px;
    font-size: 26px;
    font-weight: 700;
    color: grey;
    outline: none;
    border: 1px solid grey;
`

export const EmptyStyle = styled.h1`
    width: 100%;
    height: 76.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
    font-size: 64px;
    font-weight: 700;
`

export const ModalContent = styled.div`
    background-color: green;
    color: white;
    border-radius: 10px;
`