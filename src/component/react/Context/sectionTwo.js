import React from "react";
import { ThemeContext } from "./context";
import { Button } from "antd";

class SectionTwo extends React.Component {
    constructor(props) {
        super(props);
    }
    static contextType = ThemeContext.Consumer;

    render() {
        let style = {
            color: this.context.theme.color
        };
        return (
            <section>
                <h1 style={style}>section two {this.context.theme.title}</h1>
                <Button onClick={this.context.changeTheme}>Change Theme</Button>
            </section>
        );
    }
}

export default SectionTwo;
