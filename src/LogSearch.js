import React, { Component } from "react";
import "whatwg-fetch";
import Filter from "./Filter";
import LogView from "./LogView";
import { Paper } from 'material-ui';


const filterStyle = {
    flex: "0.1",
    padding: "0 1rem 1rem 1rem",
    "margin-right": "1rem"
};

const logViewStyle = {
    flex: "0.9",
};

export default class LogSearch extends Component {

    state = {
        channels: [],
        selectedChannel: "",
        logs: [],
        visibleLogs: [],
        userFilter: "",
        userError: "",
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
                <Paper style={filterStyle} zDepth={1}>
                    <Filter 
                        channels={this.state.channels} 
                        selectedChannel={this.state.selectedChannel} 
                        onChange={this.onChange} 
                        onSubmit={this.onSubmit} 
                        updateUserFilter={this.updateUserFilter}
                        userError={this.state.userError}
                    /> 
                </Paper>
                <Paper style={logViewStyle} zDepth={1}> 
                    <LogView logs={this.state.visibleLogs}/>
                </Paper>
			</div>
		);
    }

    onChange = (event, index, value) => {
        this.setState({
            ...this.state,
            selectedChannel: value,
            userError: ""
        });
    }

    updateUserFilter = (e) => {
        this.setState({
            ...this.state,
            userFilter: e.target.value,
            userError: ""
        });
    } 

    onSubmit = (e) => {
        e.preventDefault();

        let options = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(`https://api.gempir.com/channel/${this.state.selectedChannel}/user/${this.state.userFilter}`, options).then(this.checkStatus).then((response) => {
			return response.json()
		}).then((json) => {
			this.setState({...this.state, logs: json, visibleLogs: json});
		}).catch((error) => {
            this.setState({...this.state, logs: [], visibleLogs: [], userError: "Username not found"});
        });
    }

    checkStatus = (response) => {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}