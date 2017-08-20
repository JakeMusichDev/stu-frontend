import axios from 'axios'
import jwt_decode from 'jwt-decode'

import {FETCH_CURRENT_AUCTION_BIDS, FETCH_CURRENT_AUCTION_BIDS_LOADING, FETCH_CURRENT_AUCTION_BIDS_COMPLETE, PLACE_BID} from '../constants/Constants'

//---------ASYNC BIDS ACTIONS----------//
export function fetchCurrentAuctionBids(id) {
	return dispatch => {
		// dispatch(fetchLoading(true));
		return axios.get(`http://localhost:3000/api/v1/auctions/${id}/bids`)
			.then(bids => dispatch({ type: FETCH_CURRENT_AUCTION_BIDS, bids }))
			.then(function(){
				dispatch(fetchComplete(true))
				dispatch(fetchLoading(false))
			})
	}
}

export function placeBid(bid_price, auction_id) {
	return dispatch => {
		// dispatch({type: PLACE_BID})
		const headerToken = axios.defaults.headers.common['Authorization']
		const userId = jwt_decode(headerToken).id
		return axios.post(`http://localhost:3000/api/v1/bids`, {
				headers: {
					Authorization: headerToken
				},
				bid: {
					collector_id: userId,
					auction_id: 1,
					bid_price: 10000,
				}
		})
			.then(fetchCurrentAuctionBids(userId))
	}
}

function fetchLoading(bidsLoading) {
	return{
		type: FETCH_CURRENT_AUCTION_BIDS_LOADING,
		bidsLoading: bidsLoading
	}
}

function fetchComplete(bidFetchComplete) {
	return {
		type: FETCH_CURRENT_AUCTION_BIDS_COMPLETE,
		bidFetchComplete: bidFetchComplete
	}
}


