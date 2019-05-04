import React from "react";
import { connect } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AppRoute from "./route";
import NotFound from "@/page/404";
import Nav from "./component/Nav";

const mapStateToProps = ({ login }) => {
    return {
        isLogin: login.isLogin
    };
};

function AppLayout() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    {AppRoute.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        );
                    })}
                    <Route path="/404" exact component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </div>
        </Router>
    );
}

export default connect(mapStateToProps)(AppLayout);
