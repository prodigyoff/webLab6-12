import CardItem from '../components/CardItem'
import { CardWrapper, SectionWrapper, StyledText } from '../styles/Home.styles'
import { ShowMoreButton } from '../styles/CardItem.styles'

const data = [
    {
        title: 'Donut',
        price: 100,
        description: 'Lorum Ipsum, some description text, ok?',
        img: 'https://thumbs.dreamstime.com/b/two-donuts-sprinkle-isolated-white-background-142080187.jpg',
        id: 1
    },
    {
        title: 'Another donut',
        price: 75,
        description: 'Lorum Ipsum, some description text, ok?',
        img: 'https://previews.123rf.com/images/ockra/ockra1502/ockra150200670/36929100-two-donuts-close-up-background-.jpg',
        id: 2
    },
    {
        title: 'Donut',
        price: 60,
        description: 'Lorum Ipsum, some description text, ok?',
        img: 'https://previews.123rf.com/images/kazitsyn/kazitsyn1901/kazitsyn190100012/122431138-two-donuts-isolated-on-white-background.jpg',
        id: 3
    }
]


const Home = () => {
    return (
        <div>
            <SectionWrapper>
                <StyledText>
                    <h1>Header</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                    <ShowMoreButton>Show more</ShowMoreButton>
                </StyledText>
                <img src='https://s3.amazonaws.com/cms.ipressroom.com/285/files/201602/56afc77aacae6e374ce05168_National+Donut+Day/National+Donut+Day_33b7829a-12ff-4a6c-b3fe-0f3d2879dda9-prv.jpg' />
            </SectionWrapper>

            <CardWrapper>
                {data.map(({ title, price, description, img, id }) => (
                    <CardItem
                        title={title}
                        description={description}
                        imageSrc={img}
                        price={price}
                        key={id}
                    />
                ))}
            </CardWrapper>
        </div>
    )
}

export default Home;