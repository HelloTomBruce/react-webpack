import React from "react";
import { Dropdown } from "antd";

const LINE_HEIGHT_LIST = ["1", "1.2", "1.5", "1.75", "2", "2.5", "3", "4"];

class Height extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const LineHeightList = (
            <div className="line-height">
                {LINE_HEIGHT_LIST.map(item => {
                    return (
                        <span className="line-height-item" key={item} onClick={() => this.props.changeHeight(item)}>
                            {item}
                        </span>
                    );
                })}
            </div>
        );
        return (
            <Dropdown overlay={LineHeightList}>
                <a href="" className="line-height-link">
                    Height
                </a>
            </Dropdown>
        );
    }
}

export default Height;
