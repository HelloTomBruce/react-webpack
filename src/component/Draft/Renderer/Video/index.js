import React from "react";

class VideoDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { block, contentState } = this.props;
        const entityKey = block.getEntityAt(0);
        if (!entityKey) {
            return null;
        }
        const entity = contentState.getEntity(entityKey);
        const data = entity.getData();
        return <video src={data.url} autoPlay={false} controls={true} loop={false} preload="auto" />;
    }
}

export default VideoDisplay;
