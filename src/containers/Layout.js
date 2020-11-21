import {MainSection, TextContainer, MainHeader, MainDescription,LearnMoreButton, ButtonWrapper} from '../styles/Layout.styles'
import bgImage from '../assets/to_be_blured.png'

const Layout = () =>{
    return(
    <MainSection style={{backgroundImage: `url(${bgImage})`}}>
        <TextContainer>
            <MainHeader>
                Chuvash
            </MainHeader>
            <MainDescription>
            A café is sometimes called a coffeehouse or a coffee shop or tea shop in English, a café in French and a bar in Italian. (Cafe or café is the common spelling used in English, French, Spanish, et al. however the word is spelled "caffè" in Italian.)
            </MainDescription>
        </TextContainer>
        <ButtonWrapper><LearnMoreButton>Learn more</LearnMoreButton></ButtonWrapper>
    </MainSection>
    )
}
export default Layout;