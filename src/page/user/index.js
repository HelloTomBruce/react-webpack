import React from "react";
import { connect } from "react-redux";
import { getUserById } from "@/graphql";
import { showErrorTip } from "@/redux/action/error";
import img from "@/img/touxiang.jpg";
import "./index.less";

const mapStateToProps = () => {
    return {};
};

const mapDispatchToMethods = dispatch => {
    return {
        showErrorTip: msg => dispatch(showErrorTip(msg))
    };
};

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id:     "",
                name:   "",
                sex:    "",
                intro:  "",
                skills: []
            }
        };
    }
    componentDidMount() {
        let userId = this.props.match.params.id;
        getUserById({
            id: +userId
        })
            .then(res => {
                this.setState({
                    user: res.data.user
                });
                return;
            })
            .catch(err => {
                this.props.showErrorTip(err);
            });
    }
    render() {
        return (
            <div className="userPage">
                <div className="userInfo">
                    <div className="userInfo-top">
                        <img className="userInfo-top-img" src={img} />
                    </div>
                    <div className="userInfo-bottom">
                        <div className="userInfo-bottom-item">
                            <label>姓名：</label>
                            <span>{this.state.user.name}</span>
                        </div>
                        <div className="userInfo-bottom-item">
                            <label>性别：</label>
                            <span>{this.state.user.sex}</span>
                        </div>
                        <div className="userInfo-bottom-item">
                            <label>介绍：</label>
                            <p>{this.state.user.intro}</p>
                        </div>
                        <div className="userInfo-bottom-item">
                            <label>爱好与特长：</label>
                            <p>{this.state.user.skills.join(",")}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToMethods
)(User);
