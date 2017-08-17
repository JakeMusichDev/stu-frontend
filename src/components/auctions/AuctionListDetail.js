import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class AuctionListDetail extends Component {

	render() {
		const { id, lot_title, lot_description, lot_medium, lot_year, start_date, end_date } = this.props.auctionInfo;
		return (
			<div>
				<div className="auction-information">
					<Link to={`/auctions/${id}`}>{lot_title}, {lot_year}</Link>
					<p>Medium: {lot_medium}</p>
					<p>Description: {lot_description}</p>
					<p>Current Bid: {}</p>
					<p>Time Till End (s): {id ? this.parseDate(start_date, end_date) : <p>loading</p> }</p>
				<br/> <br/> <br/> <br/>
				</div>
			</div>
		)
	}
}

