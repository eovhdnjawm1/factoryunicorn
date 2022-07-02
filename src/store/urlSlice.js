import { createSlice } from '@reduxjs/toolkit'

let url = createSlice({
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

export let { changeURL } = url.actions;
export default url;