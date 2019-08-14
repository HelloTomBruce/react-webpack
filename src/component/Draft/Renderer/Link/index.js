import React from "react";

class Link extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { contentState, entityKey } = this.props;
        const { url } = contentState.getEntity(entityKey).getData();
        return <a href={url}>{this.props.children}</a>;
    }
}

export default Link;
