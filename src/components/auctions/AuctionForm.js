import React, { Component } from 'react'
import { Grid, Button, Checkbox, Form, Input, Radio, Select, TextArea, Modal } from 'semantic-ui-react'
import Datetime from 'react-datetime'
import moment from 'moment'

export default class AuctionForm extends Component {
	constructor() {
		super()

		this.state = {
			lot_title: '',
			lot_description: '',
			lot_year: '',
			lot_medium: '',
			lot_dimensions: '',
			reserve: '',
			seller_id: '',
			start_date: '',
			end_date: '',

		}
	}

	handleChange = (event) => {
		this.setState ({
			[event.target.name]: event.target.value
		})
	}

	onSubmit = (event) => {
		event.preventDefault()
		// this.props.createAuction(this.state)
	}

	handleDate = (event) => {
		console.log(moment(event)._d)
		this.setState({
			// [event.target.name]: moment(event)._d
		})
	}


	handleFile = (e) => {
		const reader = new FileReader();
		const file = e.target.files[0];
		console.log(file)
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
								<Form.Field control={Input} label='Item Title' name="lot_title" onChange = {() => this.handleChange}/>
								<Form.Field control={Input} label='Item Year' name="lot_year" onChange = {() => this.handleChange}/>
							</Form.Group>
							<Form.Field control={TextArea} label='Description' name="lot_description" onChange = {() => this.handleChange}/>
							<Form.Field control={Input} label='Medium' name="lot_dimensions" onChange = {() => this.handleChange}/>
							<Form.Group>
								<Datetime onChange={this.handleDate} name="start" closeOnSelect={false}/>
								<Datetime onChange={this.handleDate} name="end"/>
							</Form.Group>
							{/*<Modal*/}
								{/*className="calendar"*/}
								{/*trigger={<Button>Pick Time</Button>}*/}
								{/*header='pick a date'*/}
								{/*// content={}*/}
							{/*/>*/}

							<Form.Field control={Button}>Create Auction</Form.Field>
						</Form>
					</Grid.Column>

				</Grid>
      )
   }
}

{/*<Datetime className='calendar' onChange={this.handleDate}/>*/}