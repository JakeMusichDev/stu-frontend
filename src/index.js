import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index'
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import AuthRoutes from './routes/AuthRoutes'
import App from './components/App'

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, logger),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
  <Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/auth" component={AuthRoutes} />
				<Route path="/stu" component={App}/>
			</Switch>
		</BrowserRouter>
  </Provider>,
  document.getElementById('root'));
