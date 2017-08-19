
import jwt_decode from 'jwt-decode';
import axios from 'axios';

import {API_URL, CREATING_USER, LOGGED_IN, LOGGING_IN, LOGGED_OUT, CURRENT_USER } from '../constants/Constants'

export function createUser({name, email, password, type}) {
	return dispatch => {
		dispatch({ type: CREATING_USER})
		return axios.post(API_URL + (type === 'collector'? 'collectors' : 'sellers'), {name, email, password})
			.then( response => {
				const token = response.data.jwt
				window.localStorage.setItem('jwt', token )
				setAuthToken(token)
				dispatch({type: LOGGED_IN, payload: {user_id: response.data.id, jwt: token}})
			})
			.catch( error => console.log(error) )
	}
}

export function loginUser({name, email, password, type}) {
	return dispatch => {
		dispatch({ type: LOGGING_IN})
		return axios.post(API_URL + 'login', {name, email, password})
			.then( response => {
				const token = response.data.jwt;
				window.localStorage.setItem('jwt', token );
				setAuthToken(token)
				dispatch({type: LOGGED_IN, payload: {user_id: response.data.id, jwt: token}});
			})
			.catch( error => console.log(error) )
	}
}

export function logOutUser() {
	return dispatch => {
		window.localStorage.clear()
		dispatch({type: LOGGED_OUT})
	}
}

export function setAuthToken(token) {
	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common['Authorization']
	}
}

export function getCurrentUser() {
	const headerToken = axios.defaults.headers.common['Authorization']
	const userId = jwt_decode(headerToken).id
	return {
		type: CURRENT_USER, payload: userId
	}
}
