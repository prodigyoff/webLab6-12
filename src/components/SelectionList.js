import { FilterForm, FilterCategory, SelectLabel } from '../styles/Catalog.styles'

const SelectionList = ({name, options, state: [value, setValue], ...props}) =>{
    return(
        <FilterForm>
            <SelectLabel htmlFor='filter'>{name}</SelectLabel>
            <FilterCategory name='filter' value={value} onChange={e => setValue(e.target.value)} {...props}>
            <option value='None'>No Filter</option>
                {options.map((thisOption) =>
                    <option key={thisOption} value={thisOption}>{thisOption}</option>
                )}
            </FilterCategory>
        </FilterForm>
    )
}
export default SelectionList;