import { CatalogContainer } from '../styles/Catalog.styles'
import SearchBox from '../components/SearchSection'
import Filter from '../components/FilterSection'

const Catalog = () =>{
    return(
        <CatalogContainer>
            <SearchBox/>
            <Filter/>
        </CatalogContainer>
    );
}

export default Catalog;