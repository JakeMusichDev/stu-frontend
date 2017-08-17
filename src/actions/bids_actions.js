import axios from 'axios'

import {FETCH_CURRENT_AUCTION_BIDS, FETCH_CURRENT_AUCTION_BIDS_LOADING, FETCH_CURRENT_AUCTION_BIDS_COMPLETE} from '../constants/Constants'

//---------ASYNC BIDS ACTIONS----------//
export function fetchCurrentAuctionBids(id) {
	return dispatch => {
		dispatch(fetchLoading(true));
		return axios.get(`http://localhost:3000/api/v1/auctions/${id}/bids`)
			.then(bids => dispatch({ type: FETCH_CURRENT_AUCTION_BIDS, bids }))
			.then(function(){
				dispatch(fetchComplete(true))
				dispatch(fetchLoading(false))
			})
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
