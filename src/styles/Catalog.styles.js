import styled from 'styled-components'

export const CatalogContainer = styled.div `
    display: flex;
    max-width: 1000px;
    margin: 15px auto;
    align-items: center;
    justify-content: space-between;
`

export const FilterForm = styled.form`
    display: flex;
    width: 500px;
    color: grey;
    justify-content: space-around;
    align-items: center;
`

export const FilterCategory = styled.select`
    height: 36px;
    width: 150px;
    border-radius: 12px;
    color: grey;
    text-align: center;
    background-color: white;
    border: 1px solid grey;
`

export const SearchContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-around;
`

export const InputBox = styled.input`
    height: 32px;
    width: 150px;
    font-size: 16px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 12px;
`

export const SearchButton = styled.button`
    height: 36px;
    width: 150px;
    border-radius: 12px;
    font-size: 16px;
    background-color: white;
    border: 1px solid grey;
    color: grey;
`