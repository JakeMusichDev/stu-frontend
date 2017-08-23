import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {fetchAuctionsData, getCurrentAuction} from "../../actions/auctions_actions"
import {fetchCurrentAuctionBids} from "../../actions/bids_actions"
import {getCurrentUser} from "../../actions/auth_actions"


import AuctionsList from './AuctionsList'
import AuctionShow from './AuctionShow'

export class AuctionsContainer extends Component {
	componentDidMount() {
		this.props.getCurrentUser()
		if (this.props.auctions.length === 0) {
			this.props.fetchAuctionsData()
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			this.props = nextProps
		}
	}

	render() {
		const {currentAuctionSeller, fetchComplete, auctions, currentAuction, getCurrentAuction, fetchCurrentAuctionBids, bids, bidFetchComplete} = this.props;
		if (fetchComplete && currentAuction) {
			return (
				<div className="container">
					<AuctionsList
						auctions={auctions}
						fetchStatus={fetchComplete}
						getCurrentAuction={getCurrentAuction}
					/>
					<AuctionShow
						currentAuction={currentAuction}
						convertTime={this.timeConversion}
						fetchCurrentAuctionBids={fetchCurrentAuctionBids}
						bids={bids}
						bidFetchComplete={bidFetchComplete}
						seller={currentAuctionSeller}
					/>
				</div>
			)
		} else {
			return <p>loading...</p>
		}
	}
}

const mapStateToProps = (state) => {
	return {
		auctions: state.auctionsReducer.auctions,
		isLoading: state.auctionsReducer.isLoading,
		fetchComplete: state.auctionsReducer.fetchComplete,
		currentAuction: state.auctionsReducer.currentAuction,
		currentAuctionSeller: state.auctionsReducer.currentAuctionSeller,
		bids: state.bidsReducer.bids,
		highest_bid: state.bidsReducer.highest_bid,
		bidsLoading: state.bidsReducer.bidsLoading,
		bidFetchComplete: state.bidsReducer.bidFetchComplete

	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		fetchAuctionsData: fetchAuctionsData,
		getCurrentAuction: getCurrentAuction,
		fetchCurrentAuctionBids: fetchCurrentAuctionBids,
		getCurrentUser: getCurrentUser
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionsContainer)

