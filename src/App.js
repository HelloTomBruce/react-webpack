import React, { Component } from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import GraphqlExample from "@/component/graphql";
import "./page-less/index.css";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <GraphqlExample />
            </div>
        );
    }
}

const mapStateToProps = () => ({});

export default hot(module)(connect(mapStateToProps)(App));
