import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import auctionsReducer from './auction_reducer'
import bidsReducer from './bids_reducer'
import authReducer from './auth_reducer'


const rootReducer = combineReducers({
		auctionsReducer,
		bidsReducer,
		authReducer,
		routing: routerReducer
})

export default rootReducer