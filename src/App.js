import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LogSearch from './LogSearch';
import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
					<LogSearch />
				</MuiThemeProvider>
			</div>
		);
    }
}

export default App;
