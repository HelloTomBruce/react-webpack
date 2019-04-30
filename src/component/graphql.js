import React from "react";
import { search } from "@/graphql";

class GraphqlExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        search().then(res => {
            this.setState({
                list: res.data.books
            });
        });
    }
    render() {
        return (
            <div>
                <h3>Graphql Example</h3>
                {this.state.list.map(item => {
                    return <div>{item.name}</div>;
                })}
            </div>
        );
    }
}

export default GraphqlExample;
