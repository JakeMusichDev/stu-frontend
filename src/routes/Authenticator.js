import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import bindActionCreators from 'redux'
import {setAuthToken, getCurrentUser} from "../actions/auth_actions"

export default function(ProtectedComponent) {
	class Authenticator extends Component {
		static contextTypes = {
			router: PropTypes.object
		}

		componentWillMount() {
			if (!localStorage.getItem('jwt')) {
				this.context.router.history.push('/auth/login')
			} else {
				setAuthToken(localStorage.getItem('jwt'))
			}
		}

		componentWillUpdate(nextProps) {
			if (!localStorage.getItem('jwt')) {
				this.context.router.history.push('/auth/login')
			}
		}

		render() {
			return(
				<ProtectedComponent {...this.props}/>
			)
		}
	}
	return Authenticator
}
