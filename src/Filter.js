import React, { Component } from 'react';
import { SelectField, MenuItem, TextField } from 'material-ui';

const style = {
    background: "#487eb0"
}

export default class Filter extends Component {
    render() {
		return (
			<form className="filter" onSubmit={this.props.onSubmit}>
                <SelectField floatingLabelText="Channel" value={this.props.selectedChannel} onChange={this.props.onChange}>
                    {this.props.channels.map((value, key) =>
                            <MenuItem key={key} value={value} primaryText={value} />
                    )}
                </SelectField>
                <TextField hintText="gempir" floatingLabelText="Username" onChange={this.props.updateUserFilter} errorText={this.props.userError}/>
			</form>
		);
    }
}