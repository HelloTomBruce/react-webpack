import React, { Component } from "react";
import { ThemeContext, themes } from "./context";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionThree from "./SectionThree";
import ToolBar from "./toolBar";

class ContextComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme:       themes.light,
            changeTheme: this.changeTheme
        };
    }

    changeTheme = () => {
        this.setState(state => {
            return {
                theme: state.theme === themes.light ? themes.dark : themes.light
            };
        });
    };

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <ToolBar changeTheme={this.changeTheme} />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </ThemeContext.Provider>
        );
    }
}

export default ContextComponent;
