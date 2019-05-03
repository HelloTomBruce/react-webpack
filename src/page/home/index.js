import React, { Component } from "react";
import { connect } from "react-redux";
import GraphqlExample from "@/component/graphql";

const mapStateToProps = ({ login }) => {
    return {
        isLogin: login.isLogin
    };
};

class Index extends Component {
    componentDidMount() {}
    render() {
        return (
            <div>
                <h1>home page</h1>
                {this.props.isLogin ? <GraphqlExample /> : null}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Index);
