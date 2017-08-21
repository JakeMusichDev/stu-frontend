import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOutUser} from '../../actions/auth_actions'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'


class Navbar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			visible: false
		}
	}

	toggleVisibility = () => this.setState({ visible: !this.state.visible })

	render() {
		// const {visible} = this.props
		return (
			<div>
				<Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
				<Sidebar.Pushable as={Segment}>
					<Sidebar as={Menu} animation='overlay' direction='top' visible={this.state.visible} inverted>
						<Menu.Item name='home'>
							<Icon name='home' />
							<NavLink to="/stu/auctions/new">
								New
							</NavLink>
						</Menu.Item>
						<Menu.Item name='gamepad'>
							<NavLink to="/stu/auctions">
								List
							</NavLink>
						</Menu.Item>
						<Menu.Item name='camera'>
							<Icon name='id badge' />
							<NavLink to="/stu/profile">
								Profile
							</NavLink>
						</Menu.Item>
					</Sidebar>
					<Sidebar.Pusher>
						<Segment basic>
							<Header as='h3'>Application Content</Header>
							<Image src='/assets/images/wireframe/paragraph.png' />
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		)
	}
}
// onClick={this.props.logOutUser()}
export default connect(null, {logOutUser: logOutUser})(Navbar)

