import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import {loginUser} from '../../actions/auth_actions'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
			<div className='login-form'>
				{/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
				<style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
				<Grid
					textAlign='center'
					style={{ height: '100%' }}
					verticalAlign='middle'
				>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as='h2' color='pink' textAlign='center'>
							<Image src='/logo.png' />
							{' '}Log-in to your account
						</Header>
						<Form size='large' onSubmit={this.onSubmit}>
							<Segment stacked>
								<Form.Input
									fluid
									icon='user'
									iconPosition='left'
									placeholder='E-mail address'
									name="email"
									onChange = {this.handleChange}
								/>
								<Form.Input
									fluid
									icon='user'
									iconPosition='left'
									placeholder='Name'
									name="name"
									onChange = {this.handleChange}
								/>
								<Form.Input
									fluid
									icon='lock'
									iconPosition='left'
									placeholder='Password'
									type='text'
									name="password"
									onChange = {this.handleChange}
								/>

								<Button color='pink' fluid size='large'>Login</Button>
							</Segment>
						</Form>
						<Message>
							New to us? <a href='#'>Sign Up</a>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {loggedIn: state.authReducer.loggedIn}
}

export default withRouter(connect(mapStateToProps, {loginUser: loginUser})(LoginForm))
