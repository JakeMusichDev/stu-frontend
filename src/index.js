import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index'
import {createBrowserHistory} from 'history'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import App from './App'

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, logger, middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
  <Provider store={store}>
		<ConnectedRouter history={history}>
			<App/>
		</ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
