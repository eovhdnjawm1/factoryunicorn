import { createSlice } from '@reduxjs/toolkit'

let users = createSlice({
	name: 'user',
	initialState : [],
	reducers: {
		addUsers(state, action){
			state.push(action.payload);
		}
	}
})

export let { addUsers } = users.actions;


export default users