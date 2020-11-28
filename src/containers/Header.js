import {HeaderContainer, HeaderNavigations, HeaderLinks} from '../styles/Header.styles.js'
import {CoffeeOutlined} from '@ant-design/icons'

const HeaderLink = (props) =>{
    return(
        <HeaderLinks href = {props.Link}>
            {props.heading}
        </HeaderLinks>
    )
}

const Header = () =>{
    return (
        <HeaderContainer>
            <HeaderNavigations>
                <CoffeeOutlined style={{fontSize:30, color:'grey'}}/>
                <HeaderLink heading='Home' Link = '/'/>
                <HeaderLink heading="Market"/>
                <HeaderLink heading="Catalog" Link = '/catalog'/>
                <HeaderLink heading="Chart"/>
            </HeaderNavigations>
        </HeaderContainer>
    )
}
export default Header;