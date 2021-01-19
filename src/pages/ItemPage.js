import { Link, useParams } from 'react-router-dom';
import { ItemContainer, ButtonsContainer, ItemPageButton, Image, ItemTitle, ItemDescription, ItemInfo } from '../styles/ItemPage.styles';
import CardItem from '../components/CardItem'

const ItemPage = (props) =>{
    const { id } = useParams();
    const item = props.items.find(item => (item.id === parseInt(id)));

    return(
        <>
        <ItemContainer>
            <Image src={item.img}/>
            <ItemInfo>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
                <ItemDescription>Price: {item.price}$</ItemDescription>
                <ButtonsContainer>
            <Link to='/catalog'>
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