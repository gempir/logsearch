import React, { Component } from 'react';
import { Chip } from 'material-ui';

const style = {
	"font-weight": "600",
	"font-size": "12px",
	display: "inline-block",
}

export default class LogView extends Component {

	

    render() {
		return (
			<div className="log-view">
				{this.props.logs.map((value, key) => 
					<div className="line">
						<Chip style={style}>{value.timestamp}</Chip> {value.message}
					</div>
				)}
			</div>
		);
    }
}