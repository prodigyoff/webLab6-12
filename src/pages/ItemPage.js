import { Link, useParams } from 'react-router-dom';
import { getItemById } from '../connection';
import { ItemContainer, ButtonsContainer, ItemPageButton, Image, ItemTitle, ItemDescription, ItemInfo } from '../styles/ItemPage.styles';
import Spinner from '../components/Spinner';
import { useEffect, useState } from 'react'

const ItemPage = (props) =>{
    const { id } = useParams();

    async function loadItem(id) {
        setItem(await getItemById(id));
    }

    const [item, setItem] = useState();

    useEffect(() => loadItem(id), []);

    if (!item) { return <Spinner /> }
    return(
        <>
        <ItemContainer>
            <Image src={item.img}/>
            <ItemInfo>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
                <ItemDescription>Price: {item.price}$</ItemDescription>
                <ButtonsContainer>
            <Link to='/item'>
                <ItemPageButton>Back to catalog</ItemPageButton>
            </Link>
            <ItemPageButton>Add to chart</ItemPageButton>
        </ButtonsContainer>
            </ItemInfo>
        </ItemContainer>
        </>
    )
}
export default ItemPage;