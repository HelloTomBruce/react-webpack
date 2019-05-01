import React, { Component } from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import AppLayout from "@/layout/app";
import ErrorTip from "@/component/ErrorTip";
import "@/style/reset.less";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ErrorTip />
                <AppLayout />
            </div>
        );
    }
}

const mapStateToProps = () => ({});

export default hot(module)(connect(mapStateToProps)(App));
