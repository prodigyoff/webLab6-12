import CardItem from '../components/CardItem'
import { CardWrapperCatalog} from '../styles/ProductsListsCatalog.styles'
import {data} from '../components/Data'


const ProductsListCatalog = () => {
    return(
            <CardWrapperCatalog>
                {data.map(({ title, price, description, img, id }) => (
                    <CardItem
                        title={title}
                        description={description}
                        imageSrc={img}
                        price={price}
                        key={id}
                    />
                ))}
            </CardWrapperCatalog>
    )
}

export default ProductsListCatalog;