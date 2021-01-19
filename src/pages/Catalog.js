import { CatalogContainer } from '../styles/Catalog.styles'
import {CardWrapper} from '../styles/ProductsLists.styles'
import { useEffect, useState } from 'react'
import FilterTile from '../components/FilterTile'
import CardItem from '../components/CardItem'
import Spinner from '../components/Spinner'
import { ViewMoreButton } from '../styles/Catalog.styles'
import { getFilteredItems } from '../connection'

const Catalog = (props) =>{
    const [border, setBorder] = useState(3);
    const [items, setItems] = useState([]);
    const [showedItems, setShowedItems] = useState([]);
    const [filterType, setFilterType] = useState('None');
    const [priceFilter, setPriceFilter] = useState('None');
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        (async function () {
            setItems(await getFilteredItems(filterType, priceFilter));
        })()
    }, [filterType, priceFilter]);

    useEffect(() => {
        const pattern = new RegExp(searchText, '');

        let filteredItems = items.filter(item => (searchText === '' ||
            pattern.test(item.title) || pattern.test(item.description) ||
            pattern.test(item.price)));

        filteredItems = filteredItems.filter(item => (item.type === filterType ||
            filterType === 'None'));

        if (priceFilter === "Low to high"){
            filteredItems = filteredItems.sort((o1, o2) => (o1.price - o2.price))
        }
        else if (priceFilter === "High to low"){
            filteredItems = filteredItems.sort((o1, o2) => (o2.price - o1.price))
        } 

        setShowedItems(filteredItems.slice(0, border));
    }, [border, filterType, priceFilter, searchText, items]);

    function showMore() {
        setBorder(border + 3);
    }

    if (showedItems.length == 0) { return <Spinner /> }
    return(
        <CatalogContainer>
        <FilterTile type={[filterType, setFilterType]}
                    price={[priceFilter, setPriceFilter]}
                    search={[searchText, setSearchText]}
        />
        <CardWrapper>
        {showedItems.map((item) => (
                    <CardItem
                        title={item.title}
                        description={item.description}
                        imageSrc={item.img}
                        price={item.price}
                        id={item.id}
                        key={item.id}
                    />
                ))}
        </CardWrapper>
        <ViewMoreButton onClick={showMore}>View more</ViewMoreButton>
        </CatalogContainer>
    );
}

export default Catalog;