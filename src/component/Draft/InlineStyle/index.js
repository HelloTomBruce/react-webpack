import React from "react";
import { ChromePicker } from "react-color";
import StyleButton from "./StyleButton";
import "./index.less";

const INLINE_STYLES = [{ label: "Bold", style: "BOLD" }, { label: "Italic", style: "ITALIC" }, { label: "Underline", style: "UNDERLINE" }, { label: "Monospace", style: "CODE" }];

class InlineStyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showColor:    false,
            currentColor: ""
        };
    }
    handleChangeColor = color => {
        this.setState({
            currentColor: color.hex
        });
        this.props.onToggle("COLOR", color.hex);
    };
    selectColor = () => {
        this.setState({
            showColor: true
        });
    };
    closeColor = () => {
        this.setState({
            showColor: false
        });
    };
    render() {
        let { showColor, currentColor } = this.state;
        let currentStyle = this.props.editorState.getCurrentInlineStyle();
        return (
            <div className="inline-style">
                {INLINE_STYLES.map(item => {
                    return <StyleButton key={item.label} active={currentStyle.has(item.style)} label={item.label} onToggle={this.props.onToggle} style={item.style} />;
                })}
                <StyleButton label="Color" onToggle={this.selectColor} />
                {showColor ? (
                    <div className="inline-style-color">
                        <div className="inline-style-color-cover" onClick={this.closeColor} />
                        <ChromePicker color={currentColor} onChangeComplete={this.handleChangeColor} />
                    </div>
                ) : null}
            </div>
        );
    }
}

export default InlineStyle;
