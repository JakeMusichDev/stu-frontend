import React, { Component } from 'react'
import portrait from '../../styles/portrait.jpg'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Slider from 'material-ui/Slider'

export default class AuctionShow extends Component {

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
		return highest.bid_price
	}

	currentTimeLeft = (start, end) => {
		const startTime = new Date(start)
		const endTime = new Date(end)
		const diff = endTime - startTime
		return this.props.convertTime(diff)
	}

	createContent = (auction, bids) => {
		return (
			<div>
				<h3>{auction.id}. {auction.lot_title}</h3>
				<p>Description: {auction.lot_description}</p>
				<p>Item Year: {auction.lot_year}</p>
				<p>Dimensions: {auction.lot_dimensions}</p>
				<p>Seller Id: {auction.seller_id}</p>
				<div>
					<p>Time Left: {this.currentTimeLeft(auction.start_date, auction.end_date)}</p>
					<p>Current Highest Bid: ${this.getHighestBid(bids.data)}</p>
					<img src={portrait} />
				</div>
			</div>
		)
	}

	render() {
		const { currentAuction, bids, bidFetchComplete } = this.props;

		let content = null
		if(bidFetchComplete) {
			content = this.createContent(currentAuction, bids)
		} else {
			content = <h1>Select an Auction</h1>
		}

 		return(
			<div className="show">
				{content}
			</div>
      )
   }
}

