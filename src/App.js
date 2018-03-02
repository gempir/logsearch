import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<input type="text" onChange={this.onChange} />
			</div>
		);
    }
    
    onChange(e) {
        console.log(e.target.value);
    }
}

export default App;
