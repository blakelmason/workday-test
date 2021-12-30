import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { dropdownHandler } from '../redux/slices/search'

export default function ProgrammingLanguageDropdown() {
	const value = useSelector(state => state.search.dropdown)
	const dispatch = useDispatch()

	const label = 'Programming Language'

	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">{label}</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={value}
				label={label}
				onChange={e => dispatch(dropdownHandler(e.target.value))}
			>
				<MenuItem value="" >&nbsp;</MenuItem>
				{[
					'C', 
					'C++', 
					'C#', 
					'Go', 
					'Java', 
					'JavaScript', 
					'PHP', 
					'Python', 
					'Ruby', 
					'Scala',
					'TypeScript'
				].map((language, i) => 
					<MenuItem value={language} key={`menu-item-${i}`}>{language}</MenuItem>
				)}
			</Select>
		</FormControl>
	)
}