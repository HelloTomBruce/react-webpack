import React from "react";
import { Record, List } from "immutable";
import { Button } from "antd";

class Example extends React.PureComponent {
    constructor(props) {
        super(props);
        let originList = new Array(10000).fill(1).map((item, index) => {
            return {
                index:     index,
                completed: false
            };
        });
        this.state = {
            immutableData: Record({
                immutableList: List(originList)
            })(),
            immutableTime:  "",
            originListTime: ""
        };
    }
    changeImmutableList = () => {
        let startTime = new Date().getTime();
        this.setState(
            ({ immutableData }) => {
                return {
                    immutableData: immutableData.setIn(["immutableList", 5000, "completed"], true)
                };
            },
            () => {
                let endTime = new Date().getTime();
                this.setState({
                    immutableTime: endTime - startTime
                });
            }
        );
    };
    render() {
        return (
            <div>
                <Button onClick={this.changeImmutableList}>改变第五千个数据的状态</Button>
                <p>Immutable list消耗时间:{this.state.immutableTime}</p>
            </div>
        );
    }
}

export default Example;
