import CardItem from '../components/CardItem'
import { CardWrapper } from '../styles/ProductsLists.styles'
import { useEffect, useState } from 'react'
import React from 'react';

const ProductsListHome = (props) => {
    const [food, setItems] = useState(props.items.slice(0, 3));
    useEffect(() => {
        let featuredItems = props.items;
        setItems(featuredItems.slice(0, 3));
    },[props.items]);
    return(
            <CardWrapper>
                {food.slice(0, 3).map(({ title, price, description, img, id }) => (
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
    )
}

export default ProductsListHome;