import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useSelector } from 'react-redux'
import CardHeader from '@mui/material/CardHeader'
import CardActionArea from '@mui/material/CardActionArea'
import { indigo } from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'


export default function Results() {
	const loading = useSelector(state => state.search.loading)
	const results = useSelector(state => state.search.results)

	if (loading) return <Box textAlign="center"><CircularProgress/></Box>
	if (results.length === 0) return <Typography align="center">No Results</Typography>

	return (
		<Box 
			display="grid" 
			justifyContent="center" 
			gridTemplateColumns="repeat(auto-fill, 268px)"
			gridAutoRows="1fr"
			gap={3}
			mb={3}
		>
			{results.map((result, i) => (
				<Card key={`card-${i}`} sx={{height: 275, backgroundColor: indigo[50] }}>
					<CardActionArea 							
						rel="noopener"
						href={result.url} 
						target="_blank" sx={{
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
						}}>
						<CardHeader 
							avatar={<Avatar alt={result.owner.name  || '-'} src={result.owner.avatarUrl}/>} 
							title={<Typography variant="subtitle2">{result.name}</Typography>}
							subheader={result.owner.name  || '-'}
						/>
						<CardContent>
							<Typography variant="body2" sx={{ width: '100%', wordBreak: 'break-word' }} >{formatDescription(result.description)}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			))}
		</Box>
	)
}

function formatDescription(description) {
	if (typeof description === 'string') {
		if (description.length > 256) return description.slice(0, 256) + '...'
		else return description
	} else return
}