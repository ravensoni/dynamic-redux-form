/* eslint-disable */ 
import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	}),
})