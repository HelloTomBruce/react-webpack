import React from "react";

class ImageDisplay extends React.Component {
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
        return <img src={data.url} />;
    }
}

export default ImageDisplay;
