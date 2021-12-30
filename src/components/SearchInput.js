import TextField from '@mui/material/TextField'
import { useSelector, useDispatch } from 'react-redux'
import { inputHandler } from '../redux/slices/search'
import { sagas } from '../redux/sagas'

export default function SearchInput() {
	const dispatch = useDispatch()
	const value = useSelector(state => state.search.input)
	const disabled = useSelector(state => state.search.disabled)
	return <TextField
		fullWidth
		value={value} 
		onChange={e => dispatch(inputHandler(e.target.value))} 
		id="search-github-input" 
		label="Search Github"
		onKeyDown={e => e.key === 'Enter' && !disabled && dispatch({ type: sagas.SEARCH_GITHUB_REPOS })}
	/>
}