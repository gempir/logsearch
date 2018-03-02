import React, { Component } from 'react';

export default class LogView extends Component {
    render() {
		return (
			<div className="log-view">
                {this.props.logs}
			</div>
		);
    }
}