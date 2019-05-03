import React from "react";
import { connect } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Home from "@/page/home";
import NotFound from "@/page/404";
import Login from "@/page/login";
import Logout from "@/page/logout";

const mapStateToProps = ({ login }) => {
    return {
        isLogin: login.isLogin
    };
};

function AppLayout(props) {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {!props.isLogin ? (
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        ) : (
                            <li>
                                <Link to="/logout">Logout</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/404" exact component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </div>
        </Router>
    );
}

export default connect(mapStateToProps)(AppLayout);
