import React from "react";
import PropTypes from "prop-types";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    static childContextTypes = {
        count: PropTypes.number,
        add:   PropTypes.func
    };
    getChildContext = () => {
        return {
            count: this.state.count,
            add:   this.add
        };
    };
    add = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    render() {
        return (
            <div>
                <Children />
            </div>
        );
    }
}

class Children extends React.Component {
    constructor(props) {
        super(props);
    }
    static contextTypes = {
        count: PropTypes.number,
        add:   PropTypes.func
    };
    render() {
        let { count, add } = this.context;
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={add}>ADD</button>
            </div>
        );
    }
}

export default Parent;
