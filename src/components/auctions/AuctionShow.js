import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {placeBid} from "../../actions/bids_actions"
import Timer from '../timer/timer'
import tree from '../../styles/tree.jpg'
import moment from 'moment'

class AuctionShow extends Component {
	constructor(props) {
		super(props)

		this.state = {
			bid_price: ''
		}
	}

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


	handleBid = (event) => {
		this.setState({
			bid_price: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.placeBid(this.state.bid_price, event.target.value)
		this.setState({bid_price: ''})
	}

	createContent = (auction, bids) => {
		return (
			<div className="show-container-body">
				<div className="show-auction-image">
					<img src={tree} style={{width: '200px',}}/>
				</div>
				<div className="show-auction-detail">
					<h3>{auction.lot_title}, {auction.lot_year}</h3>
					<p>{auction.lot_medium} {auction.lot_dimensions}</p>
				</div>
				<div className="show-auction-artist-detail">
					<p>Artist: {this.props.seller.name }</p>
					<p>Contact: {this.props.seller.email }</p>
				</div>
				<div className="timer">
					{/*<Timer*/}
						{/*start={auction.start_date}*/}
						{/*end={auction.end_date}*/}
						{/*id={auction.id}*/}
					{/*/>*/}
					<div className="bidding-dock">
						<p>Current Highest Bid: ${this.getHighestBid(bids.data)}</p>
						<input type="price" onChange={this.handleBid}/>
						<button onClick={this.handleSubmit} value={auction.id} >bid</button>
					</div>
				</div>
			</div>
		)
	}

// <RaisedButton label="Bid" onClick={this.props.placeBid()}/>

	render() {
		const { currentAuction, bids, bidFetchComplete } = this.props;
		let content = null
		if(bidFetchComplete && bids) {
			content = this.createContent(currentAuction, bids)
		} else {
			content = null
		}

 		return(
			<div className="show-container">
				{content}
			</div>
      )
   }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({placeBid}, dispatch);
}

export default connect(null, mapDispatchToProps)(AuctionShow)


