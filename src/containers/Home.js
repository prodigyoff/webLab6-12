import { SectionWrapper, StyledText } from '../styles/Home.styles'
import { ShowMoreButton } from '../styles/CardItem.styles'

const Home = () =>{
    return(
    <SectionWrapper>
    <StyledText>
        <h1>Header</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
        <ShowMoreButton>Show more</ShowMoreButton>
    </StyledText>
    <img src='https://s3.amazonaws.com/cms.ipressroom.com/285/files/201602/56afc77aacae6e374ce05168_National+Donut+Day/National+Donut+Day_33b7829a-12ff-4a6c-b3fe-0f3d2879dda9-prv.jpg' />
</SectionWrapper>
    );
}
export default Home;