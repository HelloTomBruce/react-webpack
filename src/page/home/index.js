import React, { Component } from "react";
import { connect } from "react-redux";
import GraphqlExample from "@/component/graphql";
import "./index.less";
import "@/img/touxiang.jpg";

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
                <section className="sectionOne">
                    <div className="sectionOne-left">
                        <img src="assets/img/touxiang.jpg" />
                    </div>
                    <div className="sectionOne-right">
                        <p className="sectionOne-right-info">
                            this is a description.
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Index);
