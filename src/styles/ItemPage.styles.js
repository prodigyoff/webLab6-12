import styled from 'styled-components'
import { LearnMoreButton } from './Layout.styles'

export const ItemContainer = styled.div`
    width: 100%;
    height: 80.3vh;
    margin: 0 auto 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
    height: 400px;
    width: 400px;
    border-radius: 20px;
`

export const ItemTitle = styled.div`
    color: grey;
    margin-bottom: 25px;
    font-size: 26px;
`

export const ItemDescription = styled.div`
    margin-bottom: 15px;
    color: grey;
`

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    border-radius: 40px;
`

export const ItemPageButton = styled(LearnMoreButton)`
   background-color: #d9e4f5;
   background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
   width: 200px;
   border-radius: 40px;
   text-transform: none;
   font-size: 18px;
   opacity: 80%;
   &:hover{
       opacity: 100%;
   }
`