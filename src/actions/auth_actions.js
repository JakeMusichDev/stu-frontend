import axios from 'axios'
import {push} from 'react-router-redux'

import {API_URL, CREATING_USER, LOGGED_IN, LOGGING_IN } from '../constants/Constants'

export function createUser({name, email, password, type}) {
	return dispatch => {
		dispatch({ type: CREATING_USER})
		return axios.post(API_URL + (type === 'collector'? 'collectors' : 'sellers'), {name, email, password})
			.then( response => {
				console.log(response)
				dispatch({type: LOGGED_IN, payload: {user_id: response.data.user.id, jwt: response.data.jwt}})
				window.localStorage.setItem('jwt', response.data.jwt )
				dispatch(push('/'));
			})
			.catch( error => console.log(error) )
	}
}

export function loginUser({name, email, password, type}) {
	return dispatch => {
		dispatch({ type: LOGGING_IN})
		return axios.post(API_URL + (type === 'collector' ? 'collectors' : 'sellers'), {name, email, password})
			.then( response => {
				dispatch({type: LOGGED_IN, payload: {user_id: response.data.id, jwt: response.data.jwt}})
				window.localStorage.setItem('jwt', response.data.jwt )
			})
			.catch( error => console.log(error) )
	}
}
