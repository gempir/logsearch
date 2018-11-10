import React, { Component } from "react";
import Filter from "./Filter";
import LogView from "./LogView";
import { connect } from "react-redux"; 
import loadChannels from "../actions/loadChannels";

class LogSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: [],
            visibleLogs: [],
            isLoading: false,
        };
        
        props.dispatch(loadChannels());
    }

    render() {
        return (
            <div className="log-search">
                <Filter
                    channels={this.props.channels}
                    searchLogs={this.searchLogs}
                />
                <LogView logs={this.state.visibleLogs} isLoading={this.state.isLoading} />
            </div>
        );
    }

    searchLogs = (channel, username, year, month) => {
        this.setState({ ...this.state, isLoading: true });

        let options = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(`https://api.gempir.com/channel/${channel}/user/${username}/${year}/${month}`, options).then(this.checkStatus).then((response) => {
            return response.json()
        }).then((json) => {

            for (let value of json) {
                value.timestamp = Date.parse(value.timestamp)
            }

            this.setState({ ...this.state, isLoading: false, logs: json, visibleLogs: json });
        }).catch((error) => {
            this.setState({ ...this.state, isLoading: false, logs: [], visibleLogs: [] });
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

const mapStateToProps = (state) => {
    return {
        channels: state.channels,
    };
};

export default connect(mapStateToProps)(LogSearch);