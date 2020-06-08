import React from "react";
import { Editor, EditorState, RichUtils, AtomicBlockUtils, CompositeDecorator, convertToRaw, DefaultDraftBlockRenderMap } from "draft-js";
import Immutable from "Immutable";
import DraftJsUtils from "draftjs-utils";
import InlineStyleControls from "./InlineStyle";
import BlockStyleControls from "./BlockStyle";
import MediaControl from "./Media";
import OperateBtn from "./OperateBtn";
import ImageDisplay from "./Renderer/Image";
import AudioDisplay from "./Renderer/Audio";
import VideoDisplay from "./Renderer/Video";
import LinkDisplay from "./Renderer/Link";
import "./index.less";
import "draft-js/dist/Draft.css";

const STYLE_MAP = {
    COLOR: {
        color: "red"
    },
    SIZE: {
        fontSize: "14px"
    },
    HEIGHT: {
        lineHeight: "1"
    },
    ALIGN: {
        textAlign: "left"
    },
    FONT: {
        fontFamily: "Arial, Helvetica, sans-serif"
    }
};

const blockRenderMap = Immutable.Map({
    "header-one": {
        element: "div"
    },
    "header-two": {
        element: "div"
    },
    "header-three": {
        element: "div"
    },
    "header-four": {
        element: "div"
    },
    "header-five": {
        element: "div"
    },
    "header-six": {
        element: "div"
    },
    blockquote: {
        element: "blockquote"
    },
    "code-block": {
        element: "pre"
    },
    atomic: {
        element: "figure"
    },
    unstyled: {
        element: "div"
    }
});

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

const getSelectionBlock = editorState => {
    return editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getAnchorKey());
};

const findLinkEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(
        character => {
            const entityKey = character.getEntity();
            return entityKey !== null && contentState.getEntity(entityKey).getType() === "LINK";
        },
        function() {
            callback(...arguments);
        }
    );
};
class DraftEditor extends React.Component {
    constructor(props) {
        super(props);
        const decorator = new CompositeDecorator([
            {
                strategy:  findLinkEntities,
                component: LinkDisplay
            }
        ]);
        this.state = {
            editorState: EditorState.createEmpty(decorator)
        };
    }
    onChange = editorState => {
        this.setState({
            editorState
        });
    };
    toggleInlineStyle = ({ inlineStyle, color, fontSize, lineHeight, textAlign, fontFamily }) => {
        if (typeof color !== "undefined") {
            STYLE_MAP.COLOR.color = color;
        }
        if (typeof fontSize !== "undefined") {
            STYLE_MAP.SIZE.fontSize = fontSize;
        }
        if (typeof lineHeight !== "undefined") {
            STYLE_MAP.HEIGHT.lineHeight = lineHeight;
        }
        if (typeof fontFamily !== "undefined") {
            STYLE_MAP.FONT.fontFamily = fontFamily;
        }
        if (typeof textAlign !== "undefined") {
            STYLE_MAP.ALIGN.textAlign = textAlign;
            const { editorState } = this.state;
            const currentBlock = getSelectionBlock(editorState);
            let data = Object.assign({}, currentBlock.getData(), { textAlign });
            this.onChange(DraftJsUtils.setBlockData(editorState, data));
            return;
        }
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    };
    toggleBlockStyle = blockStyle => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockStyle));
    };
    addLink = () => {
        const { editorState } = this.state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity("LINK", "SEGMENTED", {
            url: "http://www.google.com"
        });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        this.setState({
            editorState: RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey)
        });
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
        const entityKey = contentBlock.getEntityAt(0);
        if (!entityKey) {
            return null;
        }
        const entity = contentState.getEntity(entityKey);
        if (type === "atomic") {
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
            if (mediaType === "LINK") {
                result = {
                    component: LinkDisplay,
                    editable:  false
                };
            }
        }
        return result;
    };
    getBlockStyle = block => {
        let textAlign = block.getData().get("textAlign");
        switch (block.getType()) {
            case "blockquote":
                return `editor-blockquote editor-${textAlign}`;
            case "header-one":
                return `editor-h1 editor-${textAlign}`;
            case "header-two":
                return `editor-h2 editor-${textAlign}`;
            case "header-three":
                return `editor-h3 editor-${textAlign}`;
            case "header-four":
                return `editor-h4 editor-${textAlign}`;
            case "header-five":
                return `editor-h5 editor-${textAlign}`;
            case "header-six":
                return `editor-h6 editor-${textAlign}`;
            case "unordered-list-item":
                return `editor-ul editor-${textAlign}`;
            case "ordered-list-item":
                return `editor-ol editor-${textAlign}`;
            case "code-block":
                return `editor-code editor-${textAlign}`;
            default:
                return textAlign ? `editor-${textAlign}` : null;
        }
    };
    logRaw = () => {
        const { editorState } = this.state;
        const contentState = editorState.getCurrentContent();
        convertToRaw(contentState);
    };
    undo = () => {
        this.onChange(EditorState.undo(this.state.editorState));
    };
    redo = () => {
        this.onChange(EditorState.redo(this.state.editorState));
    };
    render() {
        let { editorState } = this.state;
        return (
            <div className="draft-editor">
                <div className="draft-editor-control">
                    <InlineStyleControls editorState={editorState} onToggle={this.toggleInlineStyle} />
                    <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockStyle} />
                    <MediaControl addImg={this.addImg} addAudio={this.addAudio} addVideo={this.addVideo} addLink={this.addLink} />
                    <OperateBtn logRaw={this.logRaw} undo={this.undo} redo={this.redo} />
                </div>
                <div className="draft-editor-editor">
                    <Editor
                        placeholder="Tell me what are you doing about..."
                        editorState={editorState}
                        customStyleMap={STYLE_MAP}
                        onChange={this.onChange}
                        blockRendererFn={this.blockRendererFn}
                        blockStyleFn={this.getBlockStyle}
                        blockRenderMap={extendedBlockRenderMap}
                        spellCheck={true}
                    />
                </div>
            </div>
        );
    }
}

export default DraftEditor;
