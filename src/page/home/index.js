import React, { Component } from "react";
import { connect } from "react-redux";
import GraphqlExample from "@/component/graphql";
import "./index.less";

const mapStateToProps = ({ login }) => {
    return {
        isLogin: login.isLogin
    };
};

class Index extends Component {
    componentDidMount() {}
    render() {
        return (
            <div className="homePage">
                <h1 className="homePage-title">home page</h1>
                {this.props.isLogin ? <GraphqlExample /> : null}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Index);
