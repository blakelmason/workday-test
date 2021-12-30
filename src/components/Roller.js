import Button from '@mui/material/Button'
import { times } from 'lodash'
import { useState } from 'react'
import leftShark from '../images/leftShark.gif'

export default function Roller() {
	const [rolled, setRolled] = useState(false)
	return (
		<Button
			rel="noopener"
			target="blank"  
			href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
			color="secondary" 
			size="large" 
			variant="contained"
			onClick={() => setRolled(true)}
			sx={{ width: 170, display: 'flex', justifyContent: 'space-between' }}
		>
			{(rolled ? times(3, () => ({
				src: 'https://emoji.gg/assets/emoji/3416-rickroll.gif',
				alt: 'the-roller'
			})) : [
				{
					src: 'https://emojis.slackmojis.com/emojis/images/1481054971/1409/partywizard.gif?1481054971',
					alt: 'party-wizard',
				},
				{
					src: 'https://emoji.gg/assets/emoji/squidwarddance.gif',
					alt: 'squidward-dance',
				},
				{
					src: leftShark,
					alt: 'left-shark',
				}
			]).map((icon, i) => 
				<img 
					{...icon} 
					style={{ height: 36, width: 'auto' }} 
					key={`button-icon-${i}`} 
				/>
			)}
		</Button>
	)
}