import React, { Component } from 'react';
import { connect } from "react-redux";
import { Chip } from 'react-md';
import moment from 'moment';
import loadLogs from "../actions/loadLogs";
import twitchEmotes from "../emotes/twitch";
import reactStringReplace from "react-string-replace";

class LogView extends Component {
	constructor(props) {
		super(props);

		props.dispatch(loadLogs("forsen", "pajlada", "2018", "November"));
	}

	render() {
		return (
			<div className="log-view">
				{this.props.logs.slice(this.props.logs.length - 101, this.props.logs.length - 1).reverse().map((value, key) =>
					<div key={key} className="line">
						<a href={`#${value.timestamp}`}><span id={value.timestamp} className="timestamp">{this.formatDate(value.timestamp)}</span></a>{this.renderMessage(value.message)}
					</div>
				)}
				{this.props.loading && <CircularProgress
					size={80}
					style={this.loadingStyle}
				/>}
			</div>
		);
	}

	renderMessage = (message) => {
		for (let emoteCode in twitchEmotes) {
			const regex = new RegExp(`(?:^|\ )(${emoteCode})(?:$|\ )`);

			message = reactStringReplace(message, regex, (match, i) => (
				<img key={i} src={this.buildTwitchEmote(twitchEmotes[emoteCode].id)} alt={match} />
			));
		}

		return (
			<p>
				{message}
			</p>
		);
	}

	formatDate = (timestamp) => {
		return moment(timestamp).format("YYYY-MM-DD HH:mm:ss UTC");
	}

	buildTwitchEmote = (id) => {
		return `https://static-cdn.jtvnw.net/emoticons/v1/${id}/1.0`;
	}
}

const mapStateToProps = (state) => {
	return {
		logs: state.logs,
		loading: state.loading
	};
};

export default connect(mapStateToProps)(LogView);