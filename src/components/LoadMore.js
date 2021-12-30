import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { sagas } from '../redux/sagas'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function LoadMore() {
	const page = useSelector(state => state.search.page)
	const loading = useSelector(state => state.search.loadingMore)
	const results = useSelector(state => state.search.results)
	const dispatch = useDispatch()

	if (loading) return (<Box textAlign="center"><CircularProgress mt={4} /></Box>)

	if (page.hasNextPage && results.length > 0) return (
		<Box textAlign="center">
			<Button variant="contained" onClick={() => dispatch({ type: sagas.LOAD_MORE_REPOS })} size="large" >
			Load More
			</Button>
		</Box>
	)

	return null
}