import React, { Component } from 'react';
import { Autocomplete, TextField, Button } from 'react-md';


export default class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            channelFilter: "",
            userFilter: ""
        }
    }

    render() {
		return (
            <form className="filter" autoComplete="off" onSubmit={this.onSubmit.bind(this)}>
                <Autocomplete
                    id="channel"
                    label="Channel"
                    placeholder="forsen"
                    value={this.state.channelFilter}
                    onChange={this.onChannelFilterChange.bind(this)}
                    data={this.props.channels}
                />
                <TextField
                    id="username"
                    label="Username"
                    lineDirection="center"
                    value={this.state.userFilter}
                    onChange={this.onUserFilterChange.bind(this)}
                    placeholder="gempir"
                />
                <Button flat primary type="submit" className="show-logs">Show logs</Button>
            </form>
		)
    }

    onChannelFilterChange(value) {
        this.setState({...this.state, channelFilter: value});
    } 

    onUserFilterChange(value) {
        this.setState({...this.state, userFilter: value});
    } 

    onSubmit(e) {
        e.preventDefault();

        this.props.searchLogs(this.state.channelFilter, this.state.userFilter);
    }
}