import React from "react";
import { message } from "antd";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(err) {
        message.warn(typeof err === "string" ? err : JSON.stringify(err));
        return { hasError: true };
    }
    componentDidCatch(err, info) {
        message.warn(
            typeof err === "string" ? err : JSON.stringify(err),
            typeof info === "string" ? info : JSON.stringify(info)
        );
    }
    render() {
        if (this.state.hasError) {
            return <h1>has error</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
