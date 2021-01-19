import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    border-bottom: 1px solid grey;
    background-color: #DCDCDC;
`
export const HeaderNavigations = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 80%;

`
export const HeaderLinks = styled.a`
    text-decoration: none;
    color: grey;
    cursor: pointer;
    &:hover{
        border-bottom: 1px solid grey;
    }
`
export const NavLink = styled(Link)`
    margin-top: 9px;
`