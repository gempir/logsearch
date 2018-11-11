import React, { Component } from "react";
import Filter from "./Filter";
import LogView from "./LogView";
import { connect } from "react-redux"; 
import loadChannels from "../actions/loadChannels";
import loadLogs from "../actions/loadLogs";

class LogSearch extends Component {
    constructor(props) {
        super(props);

        props.dispatch(loadChannels());
    }

    render() {
        return (
            <div className="log-search">
                <Filter
                    channels={this.props.channels}
                    searchLogs={this.searchLogs}
                />
                <LogView />
            </div>
        );
    }

    searchLogs = (channel, username, year, month) => {
        this.props.dispatch(loadLogs(channel, username, year, month));
    }
}

const mapStateToProps = (state) => {
    return {
        channels: state.channels,
    };
};

export default connect(mapStateToProps)(LogSearch);