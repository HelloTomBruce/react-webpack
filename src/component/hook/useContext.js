import React, { useContext } from "react";

const defaultContext = {
    count: 0
};

const Context = React.createContext(defaultContext);

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 2
        };
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                <Children />
            </Context.Provider>
        );
    }
}

function Children() {
    let context = useContext(Context);
    return <div>{context.count}</div>;
}

export default Parent;
