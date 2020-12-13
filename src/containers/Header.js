import {HeaderContainer, HeaderNavigations, HeaderLinks, NavLink} from '../styles/Header.styles.js'
import {CoffeeOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const HeaderLink = (props) =>{
    return(
        <HeaderLinks>
            {props.heading}
        </HeaderLinks>
    )
}

const Header = () =>{
    return (
        <HeaderContainer>
            <HeaderNavigations>
                <CoffeeOutlined style={{fontSize:30, color:'grey'}}/>
                <NavLink to = '/' style={{textDecoration:'none'}}>
                <HeaderLink heading='Home'/>
                </NavLink>
                <NavLink to = '/item' style={{textDecoration:'none'}}>
                <HeaderLink heading="Catalog"/>
                </NavLink>
                <NavLink to = '/cart' style={{textDecoration:'none'}}>
                <HeaderLink heading="Cart"/>
                </NavLink>
            </HeaderNavigations>
        </HeaderContainer>
    )
}
export default Header;