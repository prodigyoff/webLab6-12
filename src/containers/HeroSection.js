import {HeroContainer, StyledImage, StyledHeader, StyledDescription, TextContainer} from '../styles/HeroSection.styles'
import HeroImage from '../assets/hero-image.png'


const HeroSection = () =>{
    return (
        <HeroContainer>
            <StyledImage src={HeroImage}></StyledImage>
            <TextContainer>
                <StyledHeader>Header</StyledHeader>
                <StyledDescription>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </StyledDescription>
            </TextContainer>
        </HeroContainer>
    )
}

export default HeroSection;
