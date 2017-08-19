import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter, Redirect } from 'react-router'
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
		this.props.loginUser(this.state)
	}

	render() {
		return(
			<div>
				<form onSubmit={this.onSubmit}>
					<label>Name</label>
					<input
						type="text"
						name="name"
						onChange = {this.handleChange}
					/>
					<label>Email</label>
					<input
						type="text"
						name="email"
						onChange = {this.handleChange}
					/>
					<label>Password</label>
					<input
						type="text"
						name="password"
						onChange = {this.handleChange}
					/>
					<input type="submit" />
				</form>
			</div>
		)
	}
}

// {this.props.loggedIn ? <Redirect to="/stu"/> : null}

const mapStateToProps = (state) => {
	return {loggedIn: state.authReducer.loggedIn}
}

export default withRouter(connect(mapStateToProps, {loginUser: loginUser})(LoginForm))
