import React from "react";
import { List } from "immutable";

class Example extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            listOne: {}
        };
    }
    componentDidMount() {
        let listOne = List.of(1, true, undefined, null, { a: 1 }, [1, 2, 3, 4]);
        listOne = listOne.set(2, 3);

        this.setState({
            listOne: listOne.toObject()
        });
    }
    render() {
        let { listOne } = this.state;
        return (
            <div>
                <h3>Immutable</h3>
                <p>{JSON.stringify(listOne)}</p>
            </div>
        );
    }
}

export default Example;
