import React, { Component } from 'react'
import portrait from '../../styles/portrait.jpg'
import { Card, Container } from 'semantic-ui-react'


export default class AuctionsList extends Component {

	createList = () => {
		return this.props.auctions.map(auction => {
				return (
					<div key={auction.id} onClick={() => this.props.getCurrentAuction(auction)} className="list-item">
						<Card
							image={portrait}
							header={auction.lot_title}
							description={auction.lot_description}
						>
						</Card>
					</div>
				)
			}
		)
	}


	render() {
		const {fetchStatus} = this.props
		return (
			<div className="list">
				{fetchStatus ? this.createList() : <p>loading...</p>}
			</div>
		)
	}
}

