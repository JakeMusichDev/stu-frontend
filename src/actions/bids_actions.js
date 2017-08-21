import axios from 'axios'
import jwt_decode from 'jwt-decode'

import {FETCH_CURRENT_AUCTION_BIDS, FETCH_CURRENT_AUCTION_BIDS_LOADING, FETCH_CURRENT_AUCTION_BIDS_COMPLETE, PLACE_BID} from '../constants/Constants'

//---------ASYNC BIDS ACTIONS----------//
export function fetchCurrentAuctionBids(id) {
	return dispatch => {
		dispatch(fetchLoading(true));
		return axios.get(`http://localhost:3000/api/v1/auctions/${id}/bids`)
			.then(bids => dispatch({ type: FETCH_CURRENT_AUCTION_BIDS, bids }))
			.then(() => {
				dispatch(fetchComplete(true))
				dispatch(fetchLoading(false))
			})
	}
}

export function placeBid(price, auctionId) {
	return dispatch => {
		dispatch({type: PLACE_BID, placingBid: true})
		const headerToken = axios.defaults.headers.common['Authorization']
		const userId = jwt_decode(headerToken).id
		debugger
		return axios.post(`http://localhost:3000/api/v1/bids`, {
				headers: {
					Authorization: headerToken
				},
				bid: {
					collector_id: userId,
					auction_id: parseInt(auctionId),
					bid_price: parseInt(price)
				}
		})
			.then(response => console.log(response.data))
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


