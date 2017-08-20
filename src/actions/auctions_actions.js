import axios from 'axios'

import {FETCH_AUCTIONS, FETCH_AUCTIONS_LOADING, FETCH_AUCTION_COMPLETE, GET_CURRENT_AUCTION, ADD_AUCTION, FETCH_CURRENT_AUCTION_BIDS, CURRENT_AUCTION_SELLER} from '../constants/Constants'

//---------ASYNC AUCTIONS ACTIONS----------//
export function fetchAuctionsData() {
	return dispatch => {
		dispatch(auctionsFetchLoading(true));
		return axios.get('http://localhost:3000/api/v1/auctions')
			.then(auctions => dispatch({ type: FETCH_AUCTIONS, auctions }))
			.then(function(){
				dispatch(auctionsFetchComplete(true))
				dispatch(auctionsFetchLoading(false))
			})
	}
}

function auctionsFetchLoading(isLoading) {
	return{
		type: FETCH_AUCTIONS_LOADING,
		isLoading: isLoading
	}
}

function auctionsFetchComplete(fetchComplete) {
	return {
		type: FETCH_AUCTION_COMPLETE,
		fetchComplete: fetchComplete
	}
}

export function getCurrentAuction(auction) {
	return dispatch => {
		return axios.get(`http://localhost:3000/api/v1/sellers/${auction.seller_id}`)
			.then(response => dispatch({type: CURRENT_AUCTION_SELLER, currentAuctionSeller: response.data}))
			.then( () => dispatch({type: GET_CURRENT_AUCTION, currentAuction: auction}))
	}
}

//----------ASYNC BID ACTIONS-------------//
function fetchAuctionBids(id) {
	return dispatch => {
		return axios.get(`http://localhost:3000/api/v1/auctions/${id}/bids`)
			.then(response => response.json() )
			.then(bids => dispatch({ type: FETCH_CURRENT_AUCTION_BIDS, bids }))
			.then(function() {
				dispatch()
			})
	}
}

// -------ADD AUCTION ACTIONS------------//
// export function addNewAuction(data) {
// 	return dispatch => {
// 		dispatch()
// 		return fetch('http://localhost:3000/api/v1/auctions', {
// 			method: 'POST',
// 			headers: {
// 				'Accept': 'application/json',
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify{
// 			  data
// 			}
// 		}).then(this.fetchAuctionsData())
// 	}
// }

