import {CREATING_USER, LOGGED_IN, LOGGED_OUT } from '../constants/Constants'

export default function authReducer(state = {
	currentUser: null,
	loggingIn: false,
	jwt: ""
}, action) {
	switch(action.type) {
		case CREATING_USER:
			return Object.assign({}, state, { loggingIn: true } )
		case LOGGED_IN:
			return Object.assign({}, state, {currentUser: action.payload.user_id, loggingIn: false, jwt: action.payload.jwt})
		case LOGGED_OUT:
			return Object.assign({}, state, {currentUser: null, jwt: ''})
		default:
			return state
	}
}