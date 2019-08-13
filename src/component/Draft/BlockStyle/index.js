import React from "react";
import StyleButton from "./StyleButton";
import "./index.less";

const BLOCK_TYPES = [
    { label: "H1", style: "header-one" },
    { label: "H2", style: "header-two" },
    { label: "H3", style: "header-three" },
    { label: "H4", style: "header-four" },
    { label: "H5", style: "header-five" },
    { label: "H6", style: "header-six" },
    { label: "Blockquote", style: "blockquote" },
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" },
    { label: "Code Block", style: "code-block" }
];

class BlockStyle extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChangeAlign = textAlign => {
        this.props.onToggle(textAlign);
    };
    render() {
        const { editorState } = this.props;
        const selection = editorState.getSelection();
        const blockType = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();
        return (
            <div className="block-style">
                {BLOCK_TYPES.map(item => {
                    return <StyleButton key={item.label} active={blockType === item.style} label={item.label} onToggle={this.props.onToggle} style={item.style} />;
                })}
            </div>
        );
    }
}

export default BlockStyle;
