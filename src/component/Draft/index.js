import React from "react";
import { Editor, EditorState, RichUtils, AtomicBlockUtils, convertToRaw } from "draft-js";
import { Button } from "antd";
import InlineStyleControls from "./InlineStyle";
import BlockStyleControls from "./BlockStyle";
import MediaControl from "./Media";
import ImageDisplay from "./Renderer/Image";
import AudioDisplay from "./Renderer/Audio";
import VideoDisplay from "./Renderer/Video";
import "./index.less";

const STYLE_MAP = {
    COLOR: {
        color: "red"
    }
};

class DraftEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }
    onChange = editorState => {
        this.setState({
            editorState
        });
    };
    toggleInlineStyle = (inlineStyle, color) => {
        if (typeof color !== "undefined") {
            STYLE_MAP.COLOR.color = color;
        }
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    };
    toggleBlockStyle = blockStyle => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockStyle));
    };
    addImg = () => {
        const { editorState } = this.state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity("IMAGE", "IMMUTABLE", {
            url: "https://static.dingtalk.com/media/lADOjM5cK80C7s0C6g_746_750.jpg"
        });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        this.setState({
            editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
        });
    };
    addAudio = () => {
        const { editorState } = this.state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity("AUDIO", "IMMUTABLE", {
            url:  "http://tvideo.coolcollege.cn/9baa434b4a5a424ebe4ca285af4ab92f/1621fc0f5d8440dfaf0334b986613a48-a44a3eab91911703d5435c26930650dd-sq.mp4",
            name: "爱上你 - DJ小33可"
        });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        this.setState({
            editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
        });
    };
    addVideo = () => {
        const { editorState } = this.state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity("VIDEO", "IMMUTABLE", {
            url:  "http://tvideo.coolcollege.cn/4b5cc8b5706b45429fd38f836772fe24/54c0ed1212224f10a51e894a50db102c-90bbde245f39420a1ff6d93ca83ac6c5-ld.mp4",
            name: "浏览器的选择与安装"
        });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        this.setState({
            editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
        });
    };
    blockRendererFn = contentBlock => {
        let result = null;
        let type = contentBlock.getType();
        const { editorState } = this.state;
        const contentState = editorState.getCurrentContent();
        if (type === "atomic") {
            const entityKey = contentBlock.getEntityAt(0);
            if (!entityKey) {
                return null;
            }
            const entity = contentState.getEntity(entityKey);
            const mediaType = entity.getType();
            if (mediaType === "IMAGE") {
                result = {
                    component: ImageDisplay,
                    editable:  false
                };
            }
            if (mediaType === "AUDIO") {
                result = {
                    component: AudioDisplay,
                    editable:  false
                };
            }
            if (mediaType === "VIDEO") {
                result = {
                    component: VideoDisplay,
                    editable:  false
                };
            }
        }
        return result;
    };
    getBlockStyle = block => {
        switch (block.getType()) {
            case "blockquote":
                return "editor-blockquote";
            case "header-one":
                return "editor-h1";
            case "header-two":
                return "editor-h2";
            case "header-three":
                return "editor-h3";
            case "header-four":
                return "editor-h4";
            case "header-five":
                return "editor-h5";
            case "header-six":
                return "editor-h6";
            case "unordered-list-item":
                return "editor-ul";
            case "ordered-list-item":
                return "editor-ol";
            case "code-block":
                return "editor-code";
            default:
                return null;
        }
    };
    logRaw = () => {
        const { editorState } = this.state;
        const contentState = editorState.getCurrentContent();
        convertToRaw(contentState);
    };
    render() {
        let { editorState } = this.state;
        return (
            <div className="draft-editor">
                <div className="draft-editor-control">
                    <InlineStyleControls editorState={editorState} onToggle={this.toggleInlineStyle} />
                    <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockStyle} />
                    <MediaControl addImg={this.addImg} addAudio={this.addAudio} addVideo={this.addVideo} />
                    <Button onClick={this.logRaw}>Log Raw</Button>
                </div>
                <div className="draft-editor-editor">
                    <Editor editorState={editorState} customStyleMap={STYLE_MAP} onChange={this.onChange} blockRendererFn={this.blockRendererFn} blockStyleFn={this.getBlockStyle} />
                </div>
            </div>
        );
    }
}

export default DraftEditor;
