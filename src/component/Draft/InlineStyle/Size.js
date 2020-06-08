import React from "react";
import { Dropdown } from "antd";

const FONT_SIZE_LIST = ["12", "14", "16", "18", "20", "24", "28", "30", "32", "36", "40", "48", "56", "64", "72", "96", "120", "144"];

class Size extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const FontSizeList = (
            <div className="font-size">
                {FONT_SIZE_LIST.map(item => {
                    return (
                        <span className="font-size-item" key={item} onClick={() => this.props.changeSize(item + "px")}>
                            {item}
                        </span>
                    );
                })}
            </div>
        );
        return (
            <Dropdown overlay={FontSizeList}>
                <a href="javascript:void(0)" className="font-size-link">
                    Size
                </a>
            </Dropdown>
        );
    }
}

export default Size;
