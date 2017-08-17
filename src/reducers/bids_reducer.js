import {
	FETCH_CURRENT_AUCTION_BIDS, FETCH_CURRENT_AUCTION_BIDS_LOADING, FETCH_CURRENT_AUCTION_BIDS_COMPLETE
} from '../constants/Constants'

export default function bidsReducer(state = {
	bids: [],
	highest_bid: null,
	bidsLoading: false,
	bidFetchComplete: false,
}, action) {
	switch(action.type) {

		case FETCH_CURRENT_AUCTION_BIDS:
			return Object.assign({}, state, {
				bids: action.bids
			})

		case FETCH_CURRENT_AUCTION_BIDS_LOADING:
			return Object.assign({}, state, {
				bidsLoading: action.bidsLoading
			})

		case FETCH_CURRENT_AUCTION_BIDS_COMPLETE:
			return Object.assign({}, state, {
				bidFetchComplete: action.bidFetchComplete
			})

		// case ADD_Bid:
		// 	return Object.assign({}, state, {
		// 		auctions: state.auctions.concat(action.auction)
		// 	});

		default:
			return state
	}
}