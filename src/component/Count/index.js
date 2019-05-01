import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input } from "antd";
import { addCount, decCount } from "@/redux/action/count";
import "./index.less";

const mapStateToProps = state => ({
    num: state.count.num
});

const mapActionToProps = dispatch => {
    return {
        add: num => {
            dispatch(addCount(num));
        },
        dec: num => {
            dispatch(decCount(num));
        }
    };
};

class Count extends Component {
    constructor(props) {
        super(props);
        this.addNum = this.addNum.bind(this);
        this.decNum = this.decNum.bind(this);
    }

    addNum() {
        this.props.add(1);
    }

    decNum() {
        this.props.dec(1);
    }

    render() {
        return (
            <div className="count-container">
                <Button
                    className="operate-btn"
                    onClick={this.addNum}
                    size="default"
                >
                    ADD
                </Button>
                <Input value={this.props.num} size="default" />
                <Button
                    className="operate-btn"
                    onClick={this.decNum}
                    size="default"
                >
                    DEC
                </Button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapActionToProps
)(Count);
