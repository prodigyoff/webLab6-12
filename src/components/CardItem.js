import { Card } from 'antd'
import { CardFooter, ShowMoreButton } from '../styles/CardItem.styles'

const { Meta } = Card

    const CardItem = ({ title, description, imageSrc, price, id }) =>{
        return(
        <Card
            hoverable
            style={{width: 250, borderRadius: '10px', border: '1px solid grey', padding: '5px', marginTop: '1em'}}
            cover={
                <img style = {{borderRadius:'10px'}} src={imageSrc}/>
            }
        >
            
            <CardFooter>
            <Meta title={title} description={description}/>
                <p>${price}</p>
                <ShowMoreButton href={'/item/' + id}>Show more</ShowMoreButton>
            </CardFooter>
        </Card>
        )}
        
export default CardItem;