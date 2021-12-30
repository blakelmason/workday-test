import client from '../graphql/client'
import { loader } from 'graphql.macro'

const searchQuery = loader('../graphql/search.gql')

export async function searchGithubRepos(variables) {
	const response = await client.query({
		query: searchQuery,
		variables,
	})
	return response.data.search
}