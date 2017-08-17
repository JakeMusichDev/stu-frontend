import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


export default class Navbar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			open: false
		}
	}

	handleToggle = () => this.setState({open: !this.state.open});

	handleClose = () => this.setState({open: false});

	render() {
		return (
			<div className="nav">
				<AppBar
					title="STU"
					onClick={this.handleToggle}
				/>
				<Drawer
					docked={false}
					width={200}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
				>
					<AppBar title="MENU" />
					<MenuItem onClick={this.handleClose}>
						<NavLink to="/auctions">
							Auctions List
						</NavLink>
					</MenuItem>

					<MenuItem onClick={this.handleClose}>
						<NavLink to="/auctions/new">
							New Auction
						</NavLink>
					</MenuItem>

					<MenuItem onClick={this.handleClose}>
						<NavLink to="/login">
							Login
						</NavLink>
					</MenuItem>

			</Drawer>
			</div>
		)
	}
}