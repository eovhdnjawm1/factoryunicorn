import { configureStore, createSlice } from '@reduxjs/toolkit'

// useState 역할
let user = createSlice({
	name: 'username',
	initialState : 'kim',
})


let urls = createSlice({
	name: "url",
	initialState : "https://asia-northeast3-fu-webapp.cloudfunctions.net/api/codingTest",
	reducers: {
		changeURL(state, action) {
			if (action){
				return state += action.payload
			}
			else {
				return null
			}
		},
	}
})

export let { changeURL } = urls.actions;


export default configureStore({
  reducer: { 
	user : user.reducer,
	BASE_URL : urls.reducer,
  }
}) 