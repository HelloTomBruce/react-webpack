import React from "react";
import StyleButton from "./StyleButton";
import Color from "./Color";
import Size from "./Size";
import Height from "./Height";
import Align from "./Align";
import Font from "./Font";
import "./index.less";

const INLINE_STYLES = [{ label: "Bold", style: "BOLD" }, { label: "Italic", style: "ITALIC" }, { label: "Underline", style: "UNDERLINE" }, { label: "Monospace", style: "CODE" }];

class InlineStyle extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChangeSize = fontSize => {
        this.props.onToggle({ inlineStyle: "SIZE", fontSize });
    };
    handleChangeHeight = lineHeight => {
        this.props.onToggle({ inlineStyle: "HEIGHT", lineHeight });
    };
    handleChangeAlign = textAlign => {
        this.props.onToggle({ inlineStyle: "ALIGN", textAlign });
    };
    handleChangeFont = fontFamily => {
        this.props.onToggle({ inlineStyle: "FONT", fontFamily });
    };
    render() {
        let currentStyle = this.props.editorState.getCurrentInlineStyle();
        return (
            <div className="inline-style">
                {INLINE_STYLES.map(item => {
                    return <StyleButton key={item.label} active={currentStyle.has(item.style)} label={item.label} onToggle={this.props.onToggle} style={item.style} />;
                })}
                <Color onToggle={this.props.onToggle} />
                <Font changeFont={this.handleChangeFont} />
                <Size changeSize={this.handleChangeSize} />
                <Height changeHeight={this.handleChangeHeight} />
                <Align changeAlign={this.handleChangeAlign} />
            </div>
        );
    }
}

export default InlineStyle;
