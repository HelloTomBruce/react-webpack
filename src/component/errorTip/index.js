import React from "react";
import { connect } from "react-redux";
import { message } from "antd";
import { closeErrorTip } from "@/redux/action/error";

const mapStateToProps = ({ error }) => {
    return {
        showErrorInfo: error.showErrorInfo,
        message:       error.message
    };
};

const mapDispatchToMethods = dispatch => {
    return {
        closeErrorTip: () => dispatch(closeErrorTip())
    };
};

class ErrorTip extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        if (this.props.showErrorInfo) {
            message.warn(this.props.message);
            setTimeout(() => {
                this.props.closeErrorTip();
            }, 2000);
        }
    }
    render() {
        return <div />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToMethods
)(ErrorTip);
