import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, remove } from '../store/Actions';
import { CartContainer, ItemContainer, CountContainer, DeleteButton, EmptyStyle } from '../styles/CartPage.styles'

const CartPage = () =>{
    const dispatch = useDispatch();
    const items = useSelector(state => state);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(items.reduce((counter, item) =>
            (counter + item.price * item.counter), 0))
    }, [items])

    if(!items.length) {return <EmptyStyle>Cart is empty(</EmptyStyle>}
    return(
        <CartContainer>
            <h1>Shopping Cart</h1>
            {items.map(item =>
                <ItemContainer key={item.id}>
                    <img src={item.img} height='160px' width='160px' />
                    <h1>{item.title}</h1>
                    <CountContainer onClick={() => (dispatch(increment(item)))}>+</CountContainer>
                    <h2>{item.counter}</h2>
                    <CountContainer onClick={() => (dispatch(decrement(item)))}>-</CountContainer>
                    <DeleteButton onClick={() => (dispatch(remove(item)))}>Delete</DeleteButton>
                    <h2>{item.price * item.counter}$</h2>
                </ItemContainer>
            )}
            <h1>Total: {totalPrice}$</h1>
        </CartContainer>
    )
}
export default CartPage;