import styled from 'styled-components'
import { LearnMoreButton } from './Layout.styles'

export const CatalogContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 85.3vh;
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
    outline: none;
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
    margin-right: 20px;
    color: grey;
`

export const SearchButton = styled.button`
    height: 36px;
    width: 150px;
    border-radius: 12px;
    font-size: 16px;
    background-color: whitesmoke;
    border: 1px solid grey;
    color: grey;
    outline: none;
`

export const ClearButton = styled(SearchButton)`
    margin-left: 10px;
`

export const SelectLabel = styled.label`
    color: grey;
    font-size: 22px;
`

export const FilterContainer = styled.div `
    display: flex;
    width: 1000px;
    margin: 15px auto;
    align-items: center;
    justify-content: space-between;
`

export const ViewMoreButton = styled(LearnMoreButton)`
   background-color: #d9e4f5;
   background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
`