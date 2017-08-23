import React, { Component } from 'react'
import moment from 'moment'

export default class Timer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			timeLeft: null,
			diff: null,
			ended: false
		}
	}

	componentDidMount() {
		this.parseTime(this.props.end)
		this.interval = setInterval(() => this.countdown(), 10000)
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.id !== nextProps.id) {
			this.parseTime(nextProps.end)
		}
	}

	parseTime = (end) => {
		const auctionClose = moment(end).unix();
		const currentTime = moment().unix();
		const diffTime = auctionClose - currentTime;
		const duration = moment.duration(diffTime * 1000, 'milliseconds');

		this.setState({
			timeLeft: duration,
			diff: diffTime
		});
	}

	countdown = () => {
		if (this.state.diff > 0) {
			this.setState({ timeLeft: moment.duration(this.state.timeLeft - 1000, 'milliseconds') })
		} else {
			this.setState({ended: true})
		}
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

   render(){
		 const currentDays = moment.duration(this.state.timeLeft).days()
		 const currentHours = moment.duration(this.state.timeLeft).hours()
		 const currentMinutes = moment.duration(this.state.timeLeft).minutes()
		 const currentSeconds = moment.duration(this.state.timeLeft).seconds()
		 return(
			<div className="timer-component">
					{this.state.ended ? <h3>days  {currentDays} : hours {currentHours} : minutes {currentMinutes} : seconds {currentSeconds} left</h3> : <p>All finished!</p>}
			</div>
      )
   }
}