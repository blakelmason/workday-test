import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
	// eslint-disable-next-line
	const token = process.env.REACT_APP_GITHUB_TOKEN
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		}
	}
})

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})

export default client