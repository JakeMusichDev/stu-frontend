import React, { Component } from 'react'
import {connect} from 'react-redux'
import {placeBid} from "../../actions/bids_actions"
import tree from '../../styles/tree.jpg'
import BiddingDock from '../auctions/AuctionShow'
import Divider from 'material-ui/Divider'

import Slider from 'material-ui/Slider'

class AuctionShow extends Component {
	componentWillUpdate(nextProps, nextState) {
		if(this.props.currentAuction !== nextProps.currentAuction) {
			this.props = nextProps
			this.props.fetchCurrentAuctionBids(this.props.currentAuction.id)
		}
	}

	getHighestBid = (array) => {
		var highest = {bid_price:0}
		for (let i = 0; i < array.length; i++) {
			if(array[i].bid_price > highest.bid_price) {
				highest = array[i]
			}
		}
		debugger
		return highest.bid_price
	}

	currentTimeLeft = (start, end) => {
		const startTime = new Date(start)
		const endTime = new Date(end)
		const diff = endTime - startTime
		return this.props.convertTime(diff)
	}

// <RaisedButton label="Bid" onClick={this.props.placeBid()}/>
	createContent = (auction, bids) => {
		return (
			<div className="show-container-body">
				<div className="show-auction-image">
					<img src={tree} style={{width: '200px',}}/>
				</div>
				<div className="show-auction-detail">
					<h3>{}, {auction.lot_year}</h3>
					<p>{auction.lot_medium} {auction.lot_dimensions}</p>
				</div>
				<div className="show-auction-artist-detail">
					<p>Artist: {this.props.seller.name }</p>
					<p>Contact: {this.props.seller.email }</p>
				</div>
				<div>
					<p>Time Left:
						{this.currentTimeLeft(auction.start_date, auction.end_date)}
					</p>
					<p>Current Highest Bid: ${this.getHighestBid(bids.data)}</p>
				</div>
			</div>
		)
	}

	render() {
		const { currentAuction, bids, bidFetchComplete } = this.props;
		let content = null
		if(bidFetchComplete && bids) {
			content = this.createContent(currentAuction, bids)
		} else {
			//-------ADD A BETTER COMPONENT----OR EXPAND-----//
			content = <h1></h1>
		}

 		return(
			<div className="show-container">
				{content}
			</div>
      )
   }
}

export default connect(null, {placeBid:placeBid})(AuctionShow)


