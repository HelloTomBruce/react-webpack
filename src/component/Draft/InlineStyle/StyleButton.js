import React from "react";

class StyleButton extends React.Component {
    constructor() {
        super();
    }
    onToggle = e => {
        e.preventDefault();
        this.props.onToggle({ inlineStyle: this.props.style });
    };
    render() {
        let className = "inline-style-btn";
        if (this.props.active) {
            className += " active";
        }
        return (
            <span className={className} type="link" onMouseDown={this.onToggle}>
                {this.props.label}
            </span>
        );
    }
}

export default StyleButton;
