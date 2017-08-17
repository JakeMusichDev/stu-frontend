import React, { Component } from 'react'

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
			end_date: ''
		}
	}

	handleChange = (event) => {
		this.setState = {
			[event.target.name]: event.target.value
		}
	}

	onSubmit = (event) => {
		event.preventDefault()
	}

   render(){
      return(
        <div>
					<form >
						<p>
							<label>Add Auction</label>
							<input
								type="text"
								name="lot_title"
								onChange = {(e)=> this.handleChange(e)}
							/>
						</p>
						<p>
							<label>Start</label>
							<input
								type="date"
								name="start_date"
								value={this.state.title}
								onChange = {(e)=> this.handleChange(e)}
							/>
						</p>
						<input type="submit" onSubmit={(e) => this.onSubmit(e)}/>
					</form>
        </div>
      )
   }
}