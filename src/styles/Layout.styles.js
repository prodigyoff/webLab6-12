import styled from 'styled-components'

export const MainSection = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 160px);
    background-size: cover;
    background-position: center center;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10em;
    margin-left: 1em;
`

export const MainHeader = styled.h1`
    color: grey;
    font-size: 26px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
`

export const MainDescription = styled.p`
    color: grey;
    font-size: 22px;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
`
export const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-end;
`

export const LearnMoreButton = styled.button`
   border-radius: 4px;
   background-color: #b8c6db;
   background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
   border: none;
   opacity: 80%;
   color: grey;
   text-align: center;
   text-transform: uppercase;
   font-size: 22px;
   padding: 20px;
   width: 200px;
   transition: all 0.4s;
   cursor: pointer;
   margin: 5px;

   &:hover{
       opacity: 100%;
   }

`