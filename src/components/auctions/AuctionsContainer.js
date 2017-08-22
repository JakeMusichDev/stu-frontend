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
		if (this.props.auctions.length === 0 ) {
			this.props.fetchAuctionsData()
		}
	}

	componentWillReceiveProps(nextProps) {
		if(this.props !== nextProps) {
			this.props = nextProps
		}
	}

	timeConversion = (millisec) => {
		var seconds = (millisec / 1000).toFixed(1);
		var minutes = (millisec / (1000 * 60)).toFixed(1);
		var hours = (millisec / (1000 * 60 * 60)).toFixed(1);
		var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
		if (seconds < 60) {
			return seconds + " Sec";
		} else if (minutes < 60) {
			return minutes + " Min";
		} else if (hours < 24) {
			return hours + " Hrs";
		} else {
			return days + " Days"
		}
	}

	render(){
		const { currentAuctionSeller, fetchComplete, auctions, currentAuction, getCurrentAuction, fetchCurrentAuctionBids, bids, bidFetchComplete} = this.props;
		return(
			<div className="container">
				{ fetchComplete &&
				<AuctionsList
					auctions={auctions}
					fetchStatus={fetchComplete}
					getCurrentAuction={getCurrentAuction}
				/>}
				{ currentAuction &&
					<AuctionShow
						currentAuction={currentAuction}
						convertTime={this.timeConversion}
						fetchCurrentAuctionBids={fetchCurrentAuctionBids}
						bids={bids}
						bidFetchComplete={bidFetchComplete}
						seller={currentAuctionSeller}
					/>
				}
			</div>
		)
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


// if(fetchComplete && currentAuction ) {
// 	return(
// 		<AuctionsList
// 			auctions={auctions}
// 			fetchStatus={fetchComplete}
// 			getCurrentAuction={getCurrentAuction}
// 		/>
// 		<AuctionShow
// 		currentAuction={currentAuction}
// 		convertTime={this.timeConversion}
// 		fetchCurrentAuctionBids={fetchCurrentAuctionBids}
// 		bids={bids}
// 		bidFetchComplete={bidFetchComplete}
// 		/>
// 	)
// }