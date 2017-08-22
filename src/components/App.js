import React from 'react';
import '../styles/App.css';
import AuctionsContainer from './auctions/AuctionsContainer'
import AuctionForm from './auctions/AuctionForm'
import Navbar from './Navbar/Nav'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Authenticator from '../routes/Authenticator'
import Profile from './profile/Profile'

import {Route, Switch} from 'react-router-dom'

const App = () => {
	return (
		<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
			<div className="App">
				<Navbar/>
				<Switch>
					<Route exact path='/stu/auctions' component={Authenticator(AuctionsContainer)}/>
					<Route path='/stu/auctions/new' component={Authenticator(AuctionForm)}/>
					<Route path='/stu/profile' component={Authenticator(Profile)}/>
				</Switch>
			</div>
		</MuiThemeProvider>
	);
}

export default App
