import React, { Component } from 'react';
import { Autocomplete, TextField, Button } from 'react-md';


export default class Filter extends Component {
    render() {
		return (
            <form className="filter" autoComplete="off" onSubmit={this.onSubmit.bind(this)}>
                <Autocomplete
                    id="channel"
                    label="Channel"
                    placeholder="forsen"
                    data={this.props.channels}
                />
                <TextField
                    id="username"
                    label="Username"
                    lineDirection="center"
                    placeholder="gempir"
                />
                <Button flat primary type="submit" className="show-logs">Show logs</Button>
            </form>
		)
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(e);
    }
}