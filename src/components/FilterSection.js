import { FilterForm, FilterCategory } from '../styles/Catalog.styles'

const Filter = () =>{
    return(
        <FilterForm>
            <FilterCategory name='By type'>
                <option value='any'>Any type</option>
                <option value='donuts'>Donuts</option>
                <option value='notDonuts'>Not donuts</option>
            </FilterCategory>
            <FilterCategory name='By price'>
                <option value='any'>Any price</option>
                <option value='price'>Low to high</option>
                <option value='notDonuts'>High to low</option>
            </FilterCategory>
            <FilterCategory name='By name'>
                <option value='any'>Any name</option>
                <option value='aToZ'>A to Z</option>
                <option value='zToA'>Z to A</option>
            </FilterCategory>
        </FilterForm>
    );
}

export default Filter;