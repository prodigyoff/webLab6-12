import { CatalogContainer } from '../styles/Catalog.styles'
import {CardWrapper} from '../styles/ProductsLists.styles'
import { useEffect, useState } from 'react'
import FilterTile from '../components/FilterTile'
import CardItem from '../components/CardItem'
import { ViewMoreButton } from '../styles/Catalog.styles'

const Catalog = (props) =>{
    const [border, setBorder] = useState(3);
    const [food, setItems] = useState(props.items.slice(0, border));
    const [filterType, setFilterType] = useState('None');
    const [priceFilter, setPriceFilter] = useState('None');
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        const pattern = new RegExp(searchText, '');

        let filteredItems = props.items.filter(food => (searchText === '' ||
            pattern.test(food.title) || pattern.test(food.description) ||
            pattern.test(food.price)));

        filteredItems = filteredItems.filter(food => (food.type === filterType ||
            filterType === 'None'));

        if (priceFilter === "Low to high"){
            filteredItems = filteredItems.sort((o1, o2) => (o1.price - o2.price))
        }
        else if (priceFilter === "High to low"){
            filteredItems = filteredItems.sort((o1, o2) => (o2.price - o1.price))
        } 

        setItems(filteredItems.slice(0, border));
    }, [border, filterType, priceFilter, searchText, props.items]);

    function showMore() {
        setBorder(border + 3);
    }

    return(
        <CatalogContainer>
        <FilterTile type={[filterType, setFilterType]}
                    price={[priceFilter, setPriceFilter]}
                    search={[searchText, setSearchText]}
        />
        <CardWrapper>
        {food.map(({ title, price, description, img, id }) => (
                    <CardItem
                        title={title}
                        description={description}
                        imageSrc={img}
                        price={price}
                        id={id}
                        key={id}
                    />
                ))}
        </CardWrapper>
        <ViewMoreButton onClick={showMore}>View more</ViewMoreButton>
        </CatalogContainer>
    );
}

export default Catalog;