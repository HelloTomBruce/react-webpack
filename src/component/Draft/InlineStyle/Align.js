import React from "react";
import { Dropdown } from "antd";

const Align_LIST = ["center", "left", "right"];

class Align extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const AlignList = (
            <div className="text-align">
                {Align_LIST.map(item => {
                    return (
                        <span className="text-align-item" key={item} onClick={() => this.props.changeAlign(item)}>
                            {item}
                        </span>
                    );
                })}
            </div>
        );
        return (
            <Dropdown overlay={AlignList}>
                <a href="javascript:void(0)" className="text-align-link">
                    Align
                </a>
            </Dropdown>
        );
    }
}

export default Align;
