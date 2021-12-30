import search, {
	inputHandler,
	dropdownHandler,
} from './search'

describe('Testing the search slice', () => {

	test('should return the initial state', () => {
		expect(search(undefined, {})).toEqual({
			input: '',
			searchQuery: '',
			dropdown: '',
			loading: false,
			results: [],
			page: {},
			loadingMore: false,
			disabled: true,
		})
	})

	test('Handle input from the SearchInput component', () => {
		const previousState = {
			disabled: true,
			input: ''
		}

		const testInput ='test input'

		const nextState = {
			disabled: false,
			input: testInput
		}

		expect(search(previousState, inputHandler(testInput))).toEqual(nextState)
	})

	test('Handle changes to ProgrammingLanguageDropdown', () => {
		const previousState = {
			dropdown: ''
		}

		const testDropdown ='test dropdown'

		const nextState = {
			dropdown: testDropdown
		}
		expect(search(previousState, dropdownHandler(testDropdown))).toEqual(nextState)
	})
})