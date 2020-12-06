import CardItem from '../components/CardItem'
import { CardWrapper } from '../styles/ProductsLists.styles'
import { useEffect, useState } from 'react'
import React from 'react';
import { getItems } from '../connection';
import Spinner from '../components/Spinner';

const ProductsListHome = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        (async function () {
            setItems(await getItems());
        })()
    }, []);
    if (items.length == 0) { return <Spinner /> }
    return(
            <CardWrapper>
                {items.slice(0, 3).map((item) => (
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
    )
}

export default ProductsListHome;