
import Button from '@mui/material/Button'
import { sagas } from '../redux/sagas'
import { useDispatch, useSelector } from 'react-redux'

export default function SearchButton() {
	const dispatch = useDispatch()
	const disabled = useSelector(state => state.search.disabled)
	return (
		<Button
			onClick={() => dispatch({ type: sagas.SEARCH_GITHUB_REPOS })}
			sx={{ mr: 2, width: 110 }}
			size="large"
			variant="contained"
			disabled={disabled}
		>
			Search
		</Button>
	)
}