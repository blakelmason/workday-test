import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import search from './slices/search'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		search,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk).prepend(sagaMiddleware),
})

sagaMiddleware.run(sagas)

export default store