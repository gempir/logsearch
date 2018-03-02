import React, { Component } from "react";
import "whatwg-fetch";
import Filter from "./Filter";
import LogView from "./LogView";

export default class LogSearch extends Component {

    state = {
        channels: [],
        selectedChannel: "",
        logs: "",
        userFilter: "",
    }

	constructor(props) {
		super(props);	

		fetch("https://api.gempir.com/channel").then((response) => {
			return response.json()
		}).then((json) => {
			this.setState({...this.state, channels: json.channels, selectedChannel: json.channels[0]});
		});
	}

	render() {
		return (
			<div className="log-search">
                <Filter channels={this.state.channels} selectedChannel={this.state.selectedChannel} onChange={this.onChange} onSubmit={this.onSubmit} updateUserFilter={this.updateUserFilter}/>
                <LogView logs={this.state.logs}/>
			</div>
		);
    }

    onChange = (event, index, value) => {
        this.setState({
            ...this.state,
            selectedChannel: value
        });
    }

    updateUserFilter = (e) => {
        this.setState({
            ...this.state,
            userFilter: e.target.value
        });
    } 

    onSubmit = (e) => {
        e.preventDefault();

        let options = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(`https://api.gempir.com/channel/${this.state.selectedChannel}/user/${this.state.userFilter}`, options).then((response) => {
			return response.text()
		}).then((text) => {
			this.setState({...this.state, logs: text});
		}).catch(() => {});
    }
}