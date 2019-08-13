import React from "react";
import { Button } from "antd";
import "./index.less";

class OperateBtn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="operate-btn">
                <Button onClick={this.props.undo}>Undo</Button>
                <Button onClick={this.props.redo}>Redo</Button>
                <Button onClick={this.props.logRaw}>Log Raw</Button>
            </div>
        );
    }
}

export default OperateBtn;
