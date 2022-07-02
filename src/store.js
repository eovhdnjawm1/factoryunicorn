import { configureStore, createSlice } from '@reduxjs/toolkit'
import url from './store/urlSlice.js'
import users from './store/userSlice.js'

export default configureStore({
  reducer: { 
	users : users.reducer,
	BASE_URL : url.reducer,
  }
}) 