import React from 'react';
import './styles/App.css';
import AuctionsContainer from './components/auctions/AuctionsContainer'
import AuctionForm from './components/auctions/AuctionForm'
import Navbar from './components/Nav'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Authenticator from './routes/Authenticator'

import {Route, Switch} from 'react-router-dom'

const App = () => {
	return (
		<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
			<div className="App">
				<Navbar/>
				<Switch>
					<Route exact path='/stu/auctions' component={Authenticator(AuctionsContainer)}/>
					<Route path='/stu/auctions/new' component={Authenticator(AuctionForm)}/>
				</Switch>
			</div>
		</MuiThemeProvider>
	);
}

export default App
