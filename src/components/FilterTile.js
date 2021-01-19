import SearchBox from '../components/SearchSection'
import SelectionList from '../components/SelectionList'
import {FilterContainer} from '../styles/Catalog.styles'

const FilterTile = ({type, price, search}) =>{
    return(
        <FilterContainer>
            <SelectionList name='Type' options={['Donut', 'Croissant', 'Bread']} state={type}/>
            <SelectionList name='Price' options={['High to low', 'Low to high']} state={price}/>
            <SearchBox state={search}/>
        </FilterContainer>
    )
}

export default FilterTile;