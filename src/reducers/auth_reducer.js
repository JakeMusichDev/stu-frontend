import {CREATING_USER, LOGGED_IN, LOGGED_OUT, CURRENT_USER } from '../constants/Constants'

export default function authReducer(state = {
	currentUser: null,
	loggingIn: false,
	loggedIn: false,
	jwt: ""
}, action) {
	switch(action.type) {
		case CREATING_USER:
			return Object.assign({}, state, { loggingIn: true } )
		case LOGGED_IN:
			return Object.assign({}, state, {currentUser: action.payload.user_id, loggingIn: false, loggedIn: true, jwt: action.payload.jwt})
		case CURRENT_USER:
			return Object.assign({}, state, {currentUser: action.payload, loggedIn: true});
		case LOGGED_OUT:
			return Object.assign({}, state, {currentUser: null, jwt: '', loggedIn: false})
		default:
			return state
	}
}