import { createSlice } from '@reduxjs/toolkit'

export const search = createSlice({
	name: 'search',
	initialState: {
		input: '',
		searchQuery: '',
		dropdown: '',
		loading: false,
		results: [],
		page: {},
		loadingMore: false,
		disabled: true,
	},
	reducers: {
		inputHandler: (state, action) => {
			if (action.payload.length > 0) state.disabled = false
			else state.disabled === true
			state.input = action.payload
		},
		dropdownHandler: (state, action) => {
			state.dropdown = action.payload
		},
		setSearchQuery: (state) => {
			if (state.dropdown) state.searchQuery = `language:${state.dropdown} ${state.input}`
			else state.searchQuery = state.input
		},
		setLoading: (state, action) => {
			state.loading = action.payload
			if (action.payload === true) state.disabled = true
			else state.disabled = false
		},
		newResults: (state, action) => {
			state.results = action.payload.results
			state.page = action.payload.page
		},
		setLoadingMore: (state, action) => {
			state.loadingMore = action.payload
			if (action.payload === true) state.disabled = true
			else state.disabled = false
		},
		loadMoreResults: (state, action) => {
			state.results.push(...action.payload.results)
			state.page = action.payload.page
		},
		clearResults: (state) => {
			state.results = []
		}
	},
})

export const { 
	inputHandler,
	dropdownHandler,
	setLoading,
	newResults,
	setLoadingMore,
	loadMoreResults,
	setSearchQuery,
	clearResults,
} = search.actions

export default search.reducer