import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createUser} from "../../actions/auth_actions"
import {withRouter} from 'react-router'

class SignUpForm extends Component {
	constructor() {
		super()

		this.state = {
			name: '',
			email: '',
			password: '',
			type: 'seller'
		}
	}

	handleChange = (event) => {
		this.setState ({
			[event.target.name]: event.target.value
		})
	}

	onSubmit = (event) => {
		event.preventDefault()
		this.props.createUser(this.state)
	}

	render(){

		return(
			<div>
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
					<label>Are you an artist or maker?</label> <br/>
					<input type="radio" name='type'/> <br/>
					<input type="submit" />
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {loggedIn: state.authReducer.loggedIn}
}


export default withRouter(connect(mapStateToProps, {createUser: createUser})(SignUpForm))
