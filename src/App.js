import React, { Component } from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import AppLayout from "@/layout/app";
import ErrorTip from "@/component/ErrorTip";
import ErrorBoundary from "@/component/ErrorBoundary";
import "@/style/index.less";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ErrorTip />
                <ErrorBoundary>
                    <AppLayout />
                </ErrorBoundary>
            </div>
        );
    }
}

const mapStateToProps = () => ({});

export default hot(module)(connect(mapStateToProps)(App));
