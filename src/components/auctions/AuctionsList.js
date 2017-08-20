import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import portrait from '../../styles/portrait.jpg'
import { Card, Image } from 'semantic-ui-react'


export default class AuctionsList extends Component {

	createList = () => {
		return this.props.auctions.map(auction => {
				return (
					<div key={auction.id} onClick={() => this.props.getCurrentAuction(auction)}>
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
			<Card.Group className="list">
				{fetchStatus ? this.createList() : <p>loading...</p>}
			</Card.Group>
		)
	}
}

