import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/auth_actions'

class LoginForm extends Component {
	constructor() {
		super()

		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	handleChange = (event) => {
		this.setState ({
			[event.target.name]: event.target.value
		})
	}

	onSubmit = (event) => {
		event.preventDefault()
		console.log(this.state)
		this.props.loginUser(this.state)
	}

	render(){

		return(
			<form onSubmit={(e) => this.onSubmit(e)}>
				<label>Name</label>
				<input
					type="text"
					name="name"
					onChange = {(e)=> this.handleChange(e)}
				/>
				<label>Email</label>
				<input
					type="text"
					name="email"
					onChange = {(e) => this.handleChange(e)}
				/>
				<label>Password</label>
				<input
					type="text"
					name="password"
					onChange = {(e)=> this.handleChange(e)}
				/>
				<input type="submit" />
			</form>
		)
	}
}

export default connect(null, {loginUser: loginUser})(LoginForm)
