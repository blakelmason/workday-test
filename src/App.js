import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import SearchInput from './components/SearchInput'
import ProgrammingLanguageDropdown from './components/ProgrammingLanguageDropdown'
import Grid from '@mui/material/Grid'
import Roller from './components/Roller'
import SearchButton from './components/SearchButton'
import Results from './components/Results'
import Divider from '@mui/material/Divider'
import LoadMore from './components/LoadMore'

export default function App() {
	return (
		<Container sx={{ mt: 3, mb: 5 }} maxWidth="md">
			<Typography sx={{ mb: 3 }} align="center" variant="h2">
				Sea Otter Team Tech Test
			</Typography>
			<Grid container spacing={2} sx={{ mb: 2 }}>
				<Grid item xs={12} sm={8}><SearchInput /></Grid>
				<Grid item xs={12} sm={4}><ProgrammingLanguageDropdown /></Grid>
			</Grid>
			<Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
				<SearchButton/>
				<Roller />
			</Box>
			<Typography mb={1} align="center" variant="h4">Results</Typography>
			<Divider sx={{ mb: 3 }} />
			<Results />
			<LoadMore />
		</Container>
	)
}
