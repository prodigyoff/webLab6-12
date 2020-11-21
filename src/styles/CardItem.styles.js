import styled from 'styled-components'

export const CardFooter = styled.div`
    display: flex;
    flex-direction: column;
    color: grey;
    width: 250px;
    p{
        margin-left: 80%;
    }
    button{
        margin-left: 60%;
    }
`

export const ShowMoreButton = styled.button`
   float: right;
   border-radius: 4px;
   background-color: #d9e4f5;
   background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
   border: none;
   color: #686868;
   width: 100px;
   height: 28px;
   transition: all 0.4s;
   cursor: pointer;
   margin: 5px;
`