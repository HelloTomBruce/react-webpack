import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Home from "@/page/home";
import NotFound from "@/page/404";

function AppLayout() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/404" exact component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </div>
        </Router>
    );
}

export default AppLayout;
