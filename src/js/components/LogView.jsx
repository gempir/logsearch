import React, { Component } from 'react';
import { Chip } from 'react-md';
import moment from 'moment';

export default class LogView extends Component {
    render() {
		if (!this.props.isLoading) {
			
		} else {

		}

		return (
			<div className="log-view">
				{this.props.logs.map((value, key) => 
					<div key={key} className="line">
						<a href={`#${value.timestamp}`}><Chip id={value.timestamp} label={this.formatDate(value.timestamp)} className="timestamp" /></a> {value.message}
					</div>
				)}
				{/* <CircularProgress 
					size={80}
					style={this.loadingStyle}
				/> */}
			</div>
		);
	}
	
	formatDate = (timestamp) => {
		return moment(timestamp).format("YYYY-MM-DD HH:mm:ss UTC");
	}
}