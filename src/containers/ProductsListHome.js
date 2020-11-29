import CardItem from '../components/CardItem'
import { CardWrapper } from '../styles/ProductsLists.styles'
import {data} from '../components/Data'

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