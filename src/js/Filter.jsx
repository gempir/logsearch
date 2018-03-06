import React, { Component } from 'react';
import { Autocomplete, TextField, Button, SelectField } from 'react-md';
import moment from "moment";

export default class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            channel: "",
            username: "",
            year: moment().year(),
            month: moment().format("MMMM")
         }
    }

    render() {
		return (
            <form className="filter" autoComplete="off" onSubmit={this.onSubmit}>
                <Autocomplete
                    id="channel"
                    label="Channel"
                    placeholder="forsen"
                    onChange={this.onChannelChange}
                    onAutocomplete={this.onChannelChange}
                    data={this.props.channels}
                />
                <TextField
                    id="username"
                    label="Username"
                    lineDirection="center"
                    onChange={this.onUsernameChange}
                    placeholder="gempir"
                />
                <SelectField
                    id="year"
                    label="Year"
                    defaultValue={moment().year()}
                    menuItems={[moment().year(), moment().subtract(1, "year").year(),  moment().subtract(2, "year").year()]}
                    onChange={this.onYearChange}
                    value={this.state.year}
                />
                <SelectField
                    id="month"
                    label="Month"
                    defaultValue={this.state.month}
                    menuItems={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
                    onChange={this.onMonthChange}
                    value={this.state.month}
                />
                <Button flat primary swapTheming type="submit" className="show-logs">Show logs</Button>
            </form>
		)
    }

    onChannelChange = (value) => {
        this.setState({...this.state, channel: value});
    } 

    onUsernameChange = (value) => {
        this.setState({...this.state, username: value});
    }
    
    onYearChange = (value) => {
        this.setState({...this.state, year: value});
    } 

    onMonthChange = (value) => {
        this.setState({...this.state, month: value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchLogs(this.state.channel, this.state.username, this.state.year, this.state.month);
    }
}