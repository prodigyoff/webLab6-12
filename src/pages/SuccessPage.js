import { Container } from '../styles/SuccessPage.styles'
import { Link } from 'react-router-dom';

function SuccessPage() {
    return (
        <Container>
            <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Accept.svg' height='300px' width='300px' />
            <h1>Success!</h1>
            <div>Your order was sent to processing!</div>
            <Link to='/item'>
                <button>Catalog</button>
            </Link>
        </Container>
    );
}

export default SuccessPage;