import React, { Component } from 'react';
import './styles/App.css';
import AuctionsContainer from './components/auctions/AuctionsContainer'
import AuctionForm from './components/auctions/AuctionForm'
import Navbar from './components/Nav'
import LoginForm from './components/auth/LoginForm'
import SignUpForm from './components/auth/SignUpForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Route, Switch} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
			<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
				<div className="App">
					<Navbar/>
					<Switch>
						<Route exact path="/auctions" render={() => <AuctionsContainer store={this.props.store} />}/>
						<Route path="/auth/register" component={SignUpForm}/>
						<Route path="/auth/login" component={LoginForm}/>
						<Route path="/auctions/new" component={AuctionForm}/>
					</Switch>
				</div>
			</MuiThemeProvider>
    );
  }
}

// route exact path='/' render{(props) => <home [...props]>
// APP componentDidMount, check to see if the token is here, if so,
//login route takes history as a props ({history}) => passes history to the ProtectedComponents
