import React, { Component } from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import HookExample from "@/component/hook/useRef";
import "./page-less/index.css";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HookExample />
            </div>
        );
    }
}

const mapStateToProps = () => ({});

export default hot(module)(connect(mapStateToProps)(App));
