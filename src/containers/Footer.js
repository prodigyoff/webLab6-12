import {FooterContainer,FooterLinks, IconBase,FooterText} from '../styles/Footer.styles'
import {YoutubeOutlined, LinkedinOutlined, FacebookOutlined, GithubOutlined} from '@ant-design/icons'

const Footer = () =>{
    return(
    <FooterContainer>
        <FooterLinks>
            <a href='https://www.youtube.com/?hl=uk&gl=UA'><IconBase component={YoutubeOutlined} color='#FF0000' /></a>
            <a href='https://www.linkedin.com/in/denyspotapov/?originalSubdomain=ua'><IconBase component={LinkedinOutlined} color='#0072b1'/></a>
            <a href='https://www.facebook.com/people/Zenoviy-Veres/100010731095427'><IconBase component={FacebookOutlined} color='#4267B2' /></a>
            <a href='https://github.com/prodigyoff'><IconBase component={GithubOutlined} color='grey' /></a>
        </FooterLinks>
        <FooterText>Copyright by Chuvash</FooterText>
    </FooterContainer>
    )
}

export default Footer;