import React from 'react'
import {connect} from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import LoginForm from '../components/auth/LoginForm'
import SignUpForm from '../components/auth/SignUpForm'

const AuthRoutes = (props) => {
	return(
		<div className="AuthRoutes">
			<Switch>
				<Route path="/auth/login" render={ ({history}) => props.loggedIn ? <Redirect to="/stu/auctions"/> : <LoginForm history={history} /> } />
				<Route path="/auth/register" render={ ({history}) => props.loggedIn ? <Redirect to="/stu/auctions"/> : <SignUpForm history={history} /> } />
			</Switch>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.authReducer.loggedIn
	}
}

export default connect(mapStateToProps)(AuthRoutes)





// <Route path="/auth/register" component={SignUpForm}/>

// {/*<Route path='/login'*/}
// 			 {/*render={({history}) => (*/}
// 				 {/*this.props.auth.currentUserId ? <Redirect to='/' /> : <LoginForm history={history}/>*/}
// 			 {/*)}*/}
// {/*/>*/}
// {/*<Route path='/signup'*/}
// {/*render={({history}) => (*/}
// 	{/*this.props.auth.currentUserId ? <Redirect to='/' /> : <SignUpForm history={history}/>*/}
// {/*)}*/}
// {/*/>*/}