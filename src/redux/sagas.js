import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { searchGithubRepos } from '../api/github'
import { 
	clearResults, 
	loadMoreResults, 
	newResults, 
	setLoading, 
	setLoadingMore, 
	setSearchQuery 
} from './slices/search'

export const sagas = {
	SEARCH_GITHUB_REPOS: 'SEARCH_GITHUB_REPOS',
	LOAD_MORE_REPOS: 'LOAD_MORE_REPOS'
}

function* searchGithubReposSaga() {
	yield all([
		put(clearResults()),
		put(setLoading(true)),
		put(setSearchQuery())
	])
	const query = yield select(state => state.search.searchQuery)
	const results = yield call(searchGithubRepos, { query })
	yield all([
		put(newResults({
			results: results.nodes,
			page: results.pageInfo,
		})),
		put(setLoading(false)),
	])
}

function* loadMoreReposSaga() {
	yield all([
		put(setLoadingMore(true))
	])
	const { searchQuery, page } = yield select(state => state.search)
	const results = yield call(searchGithubRepos, {
		query: searchQuery,
		after: page.endCursor,
	})
	yield all([
		put(loadMoreResults({
			results: results.nodes,
			page: results.pageInfo,
		})),
		put(setLoadingMore(false))
	])

}

export default function* rootSaga() {
	yield all([
		takeLatest(sagas.SEARCH_GITHUB_REPOS, searchGithubReposSaga),
		takeLatest(sagas.LOAD_MORE_REPOS, loadMoreReposSaga)
	])
}