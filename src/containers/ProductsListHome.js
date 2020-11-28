import CardItem from '../components/CardItem'
import { CardWrapper, ProductsContainer } from '../styles/ProductsLists.styles'

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
    },
    {
        title: 'Donut',
        price: 60,
        description: 'Lorum Ipsum, some description text, ok?',
        img: 'https://previews.123rf.com/images/kazitsyn/kazitsyn1901/kazitsyn190100012/122431138-two-donuts-isolated-on-white-background.jpg',
        id: 4
    },
    {
        title: 'Donut',
        price: 60,
        description: 'Lorum Ipsum, some description text, ok?',
        img: 'https://previews.123rf.com/images/kazitsyn/kazitsyn1901/kazitsyn190100012/122431138-two-donuts-isolated-on-white-background.jpg',
        id: 5
    },
    {
        title: 'Donut',
        price: 60,
        description: 'Lorum Ipsum, some description text, ok?',
        img: 'https://previews.123rf.com/images/kazitsyn/kazitsyn1901/kazitsyn190100012/122431138-two-donuts-isolated-on-white-background.jpg',
        id: 6
    },
    {
        title: 'Donut',
        price: 60,
        description: 'Lorum Ipsum, some description text, ok?',
        img: 'https://previews.123rf.com/images/kazitsyn/kazitsyn1901/kazitsyn190100012/122431138-two-donuts-isolated-on-white-background.jpg',
        id: 7
    },
    {
        title: 'Donut',
        price: 60,
        description: 'Lorum Ipsum, some description text, ok?',
        img: 'https://previews.123rf.com/images/kazitsyn/kazitsyn1901/kazitsyn190100012/122431138-two-donuts-isolated-on-white-background.jpg',
        id: 8
    },
    {
        title: 'Donut',
        price: 60,
        description: 'Lorum Ipsum, some description text, ok?',
        img: 'https://previews.123rf.com/images/kazitsyn/kazitsyn1901/kazitsyn190100012/122431138-two-donuts-isolated-on-white-background.jpg',
        id: 9
    },
]




const ProductsListHome = () => {
    return(
            <CardWrapper>
                {data.slice(0, 3).map(({ title, price, description, img, id }) => (
                    <CardItem
                        title={title}
                        description={description}
                        imageSrc={img}
                        price={price}
                        key={id}
                    />
                ))}
            </CardWrapper>
    )
}

export default ProductsListHome;