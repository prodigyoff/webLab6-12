import { useState } from 'react';
import { SearchContainer, InputBox, SearchButton } from '../styles/Catalog.styles'

const SearchBox = () =>{

    const [ searchQuery, setSearchQuery] = useState('');

    return(
        <SearchContainer>
            <InputBox value={searchQuery} placeholder='Search...' onChange={e => (setSearchQuery(e.target.value))}/>
            <SearchButton onClick={e =>(e.preventDefault())}>Search</SearchButton>
        </SearchContainer>
    );
}

export default SearchBox;