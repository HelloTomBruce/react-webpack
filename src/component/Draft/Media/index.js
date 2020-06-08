import React from "react";
import { Button } from "antd";
import "./index.less";

class Media extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="media-control">
                <Button onClick={this.props.addLink}>Link</Button>
                <Button onClick={this.props.addImg}>Image</Button>
                <Button onClick={this.props.addAudio}>Audio</Button>
                <Button onClick={this.props.addVideo}>Video</Button>
            </div>
        );
    }
}

export default Media;
