import React, { Component } from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import GraphqlExample from "@/component/graphql";
import ErrorTip from "@/component/errorTip";
import "./page-less/index.css";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ErrorTip />
                <GraphqlExample />
            </div>
        );
    }
}

const mapStateToProps = () => ({});

export default hot(module)(connect(mapStateToProps)(App));
