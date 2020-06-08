import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.less";

const mapStateToProps = ({ login }) => {
    return {
        isLogin: login.isLogin
    };
};

class Nav extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="navContainer">
                <ul className="navList">
                    <li className="navList-item">
                        <Link to="/">Home</Link>
                    </li>
                    {!this.props.isLogin ? (
                        <li className="navList-item">
                            <Link to="/login">Login</Link>
                        </li>
                    ) : (
                        <li className="navList-item">
                            <Link to="/logout">Logout</Link>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}

export default connect(mapStateToProps)(Nav);
