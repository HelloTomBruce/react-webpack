import React from "react";
import { ChromePicker } from "react-color";
import StyleButton from "./StyleButton";

class Color extends React.Component {
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
        this.props.onToggle({ inlineStyle: "COLOR", color: color.hex });
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
        return (
            <div style={{ display: "inline-block" }}>
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

export default Color;
