import React, { Component } from 'react';

export default class LogView extends Component {
    render() {
		if (!this.props.isLoading) {
			
		} else {

		}

		return (
			<div className="log-view">
				{this.props.logs.map((value, key) => 
					<div key={key} className="line">
						{/* <Chip style={this.chipStyle}>{value.timestamp}</Chip> {value.message} */}
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