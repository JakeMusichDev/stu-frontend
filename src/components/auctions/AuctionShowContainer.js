import React, { Component } from 'react'
import {connect} from 'react-redux'

class AuctionShowContainer extends Component {
	componentDidMount() {
		this.props.getCurrentUser()
	}

	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			this.props = nextProps
		}
	}

	render(){
		const {currentAuctionSeller, fetchComplete, auctions, currentAuction, getCurrentAuction, fetchCurrentAuctionBids, bids, bidFetchComplete} = this.props;
      return(
        <div>
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
   }
}

const mapStateToProps = (state) => {
	return {
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
		fetchCurrentAuctionBids: fetchCurrentAuctionBids,
		getCurrentUser: getCurrentUser
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionShowContainer)
