import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import portrait from '../../styles/portrait.jpg'

export default class AuctionsList extends Component {

	createList = () => {
		return this.props.auctions.map(auction => {
			return (
				<GridTile
					key={auction.id}
					title={auction.lot_title}
					padding={1}
					cols={2}
					onClick={() => this.props.getCurrentAuction(auction)}
					>
					<img src={portrait}/>
				</GridTile>
				)
			}
		)
	}


	render(){
		const styles = {
			root: {
				display: 'block',
				flexDirection: 'column',
				justifyContent: 'left',
				align: 'flex-start',
				margin: '100px',

			},
			gridList: {
				width: 300,
				height: 800,
				overflowY: 'auto'
			}
		};
		return(
			<div className="list" style={styles.root}>
				<GridList
					cellHeight={400}
					style={styles.gridList}>
					{ this.props.fetchStatus ? this.createList() : <p>loading...</p> }
				</GridList>
			</div>
		)
	}
}

