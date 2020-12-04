import { useState } from 'react';
import { SearchContainer, InputBox, SearchButton, ClearButton } from '../styles/Catalog.styles'

const SearchBox = ({state: [searchQuery, setSearchQuery]}) =>{

    const [ text, setText] = useState('');

    return(
        <SearchContainer>
            <InputBox value={text} placeholder='Search...' onChange={e => (setText(e.target.value))}/>
            <SearchButton onClick={e =>(setSearchQuery(text))}>Search</SearchButton>
            <ClearButton onClick={e => {setSearchQuery(''); setText('')}}>Clear</ClearButton>
        </SearchContainer>
    );
}

export default SearchBox;