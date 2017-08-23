import axios from 'axios'

import {
	API_URL, FETCH_AUCTIONS,
	FETCH_AUCTIONS_LOADING,
	FETCH_AUCTION_COMPLETE,
	GET_CURRENT_AUCTION,
	FETCH_CURRENT_AUCTION_BIDS,
	CURRENT_AUCTION_SELLER,
	CREATING_AUCTION
} from '../constants/Constants'

//---------ASYNC AUCTIONS ACTIONS----------//
export function fetchAuctionsData() {
	return dispatch => {
		dispatch(auctionsFetchLoading(true));
		return axios.get('http://localhost:3000/api/v1/auctions')
			.then(auctions => dispatch({ type: FETCH_AUCTIONS, auctions }))
			.then(() => {
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
		return axios.get(`http://localhost:3000/api/v1/users/${auction.user_id}`)
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
			})
	}
}

// -------ADD AUCTION ACTIONS------------//
export function addNewAuction(data) {
	return (dispatch) => {
		dispatch({type: CREATING_AUCTION, creatingAuction: true})
		return axios.post(API_URL + '/auctions', data)
			.catch(error => console.log(error))
			.then(response => console.log(response))
			.then(function(){
				dispatch({type: CREATING_AUCTION, creatingAuction: false})
			})

	}
}
