import { FETCH_AUCTIONS, FETCH_AUCTIONS_LOADING, FETCH_AUCTION_COMPLETE, ADD_AUCTION, GET_CURRENT_AUCTION, CURRENT_AUCTION_SELLER } from '../constants/Constants'

export default function auctionsReducer(state = {
	auctions: [],
	isLoading: false,
	fetchComplete: false,
	currentAuction: [],
	currentAuctionSeller: null
}, action) {
	switch(action.type) {

		case FETCH_AUCTIONS:
			return Object.assign({}, state, {
				auctions: action.auctions.data
			})

		case FETCH_AUCTIONS_LOADING:
			return Object.assign({}, state, {
				isLoading: action.isLoading
			})

		case FETCH_AUCTION_COMPLETE:
			return Object.assign({}, state, {
				fetchComplete: action.fetchComplete
			})

		case GET_CURRENT_AUCTION:
			return Object.assign({}, state, {
				currentAuction: action.currentAuction
			});

		case CURRENT_AUCTION_SELLER:
			return Object.assign({}, state, {
				currentAuctionSeller: action.currentAuctionSeller
			})

		case ADD_AUCTION:
			return Object.assign({}, state, {
				auctions: state.auctions.concat(action.auction)
			});

		default:
			return state
	}
}