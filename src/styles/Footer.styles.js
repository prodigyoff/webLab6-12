import Icon from '@ant-design/icons'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
    height: 80px;
    border-top: 1px solid grey;
    background-color: #DCDCDC;
`
export const FooterLinks = styled.div`
    display: flex;
    width: 500px;
    margin-top: 20px;
    justify-content: space-around;
`

export const FooterText = styled.p`
    color: grey;
    font-size: 17px;
`

export const IconBase = styled(Icon)`
    font-size: 30px;
    color: ${({color})=> color}
`