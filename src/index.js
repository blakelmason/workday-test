import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import CssBaseline from '@mui/material/CssBaseline'
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@mui/material/styles'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'
import './index.scss'

let theme = createTheme()
theme = responsiveFontSizes(theme)

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</ApolloProvider>,
	document.getElementById('root')
)
