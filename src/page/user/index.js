import React from "react";
import img from "@/img/touxiang.jpg";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: ""
        };
    }
    componentDidMount() {
        let userId = this.props.match.params;
        this.setState({
            userId
        });
    }
    render() {
        return (
            <div className="userPage">
                <div className="userPage-top">
                    <img className="userPage-top-img" src={img} />
                </div>
            </div>
        );
    }
}

export default User;
