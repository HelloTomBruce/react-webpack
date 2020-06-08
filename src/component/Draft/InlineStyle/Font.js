import React from "react";
import { Dropdown } from "antd";

const Font_LIST = [
    {
        name:   "Araial",
        family: "Arial, Helvetica, sans-serif"
    },
    {
        name:   "Georgia",
        family: "Georgia, serif"
    },
    {
        name:   "Impact",
        family: "Impact, serif"
    },
    {
        name:   "Monospace",
        family: '"Courier New", Courier, monospace'
    },
    {
        name:   "Tahoma",
        family: 'tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif'
    }
];

class Font extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const FontList = (
            <div className="font-family">
                {Font_LIST.map(item => {
                    return (
                        <span className="font-family-item" key={item.name} onClick={() => this.props.changeFont(item.family)}>
                            {item.name}
                        </span>
                    );
                })}
            </div>
        );
        return (
            <Dropdown overlay={FontList}>
                <a href="javascript:void(0)" className="font-family-link">
                    Font
                </a>
            </Dropdown>
        );
    }
}

export default Font;
