import React, { Component } from 'react';
import { Chip } from 'react-md';

export default class LogView extends Component {
    render() {
		if (!this.props.isLoading) {
			
		} else {

		}

		return (
			<div className="log-view">
				{this.props.logs.map((value, key) => 
					<div key={key} className="line">
						<Chip label={value.timestamp} /> {value.message}
					</div>
				)}
				{/* <CircularProgress 
					size={80}
					style={this.loadingStyle}
				/> */}
			</div>
		);
    }
}