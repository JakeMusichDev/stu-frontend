import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addNewAuction} from '../../actions/auctions_actions'
import {getCurrentUser} from '../../actions/auth_actions'
import { Grid, Button, Form, Input, TextArea } from 'semantic-ui-react'
import Datetime from 'react-datetime'
import moment from 'moment'

class AuctionForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			lot_title: '',
			lot_description: '',
			lot_year: null,
			lot_medium: '',
			lot_dimensions: '',
			reserve: null,
			user_id: '',
			start_date: '',
			end_date: ''
		}
	}

	componentDidMount() {
		const user = this.props.getCurrentUser()
		user ? this.setState({user_id: user.payload}) : null
	}

	handleChange = (event) => {
		console.log(this.state)
		this.setState ({
			[event.target.name]: event.target.value
		})
	}

	handleStart = (event) => {
		console.log(moment(event)._d);
		this.setState({
			start_date: moment(event)._d
		})
	}

	handleEnd = (event) => {
		console.log(moment(event)._d);
		this.setState({
			end_date: moment(event)._d
		})
	}

	onSubmit = (event) => {
		//----get current user ----//
		event.preventDefault();
		this.props.addNewAuction(this.state)
	}

	handleFile = (e) => {
		// const reader = new FileReader();
		// const file = e.target.files[0];
		// console.log(file)
		// data_uri: '',
		// 	filename: '',
		// 	filetype: ''
	// 	reader.onload = (upload) => {
	// 		this.setState({
	// 			data_uri: upload.target.result,
	// 			filename: file.name,
	// 			filetype: file.type
	// 		});
	// 	};
	// 	reader.readAsDataURL(file);
	 }

   render(){
		 return(
      	<Grid
					textAlign='justified'
					style={{height: '100%', padding: '10vh'}}
					verticalAlign='middle'
				>
					<Grid.Column>
						<Form size="large" >
							<Form.Group>
								<input type="file" id="file-input" onChange={this.handleFile} />
								<Form.Field control={Input} label='Item Title' name="lot_title" onChange = {this.handleChange}/>
								<Form.Field control={Input} label='Item Year' name="lot_year" onChange = {this.handleChange}/>
							</Form.Group>
							<Form.Field control={TextArea} label='Description' name="lot_description" onChange = {this.handleChange}/>
							<Form.Field control={Input} label='Medium' name="lot_dimensions" onChange = {this.handleChange}/>
							<Form.Group className="calendar">
								<Datetime onChange={this.handleStart.bind(this)} name="start" closeOnSelect={false}/>
								<Datetime onChange={this.handleEnd.bind(this)} name="end"/>
							</Form.Group>
							<Form.Field onClick={this.onSubmit.bind(this)} control={Button}>Create Auction</Form.Field>
						</Form>
					</Grid.Column>

				</Grid>
      )
   }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addNewAuction: addNewAuction,
		getCurrentUser: getCurrentUser
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(AuctionForm)

//
// {/*<Modal*/}
// {/*className="calendar"*/}
// {/*trigger={<Button>Pick Time</Button>}*/}
// {/*header='pick a date'*/}
// {/*// content={}*/}
// {/*/>*/}