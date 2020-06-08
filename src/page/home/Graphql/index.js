import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserList } from "@/graphql";
import { Table, Tag } from "antd";
import { showErrorTip } from "@/redux/action/error";

const mapStateToProps = () => {
    return {};
};

const mapDispatchToMethods = dispatch => {
    return {
        showErrorTip: msg => dispatch(showErrorTip(msg))
    };
};

const columns = [
    {
        title:     "Name",
        dataIndex: "name",
        key:       "name",
        render:    (name, record) => {
            return (
                <span>
                    <Link to={`/user/${record.id}`}>{name}</Link>
                </span>
            );
        }
    },
    {
        title:     "Sex",
        dataIndex: "sex",
        key:       "sex"
    },
    {
        title:     "Intro",
        dataIndex: "intro",
        key:       "intro"
    },
    {
        title:     "Skills",
        key:       "skills",
        dataIndex: "skills",
        render:    skills => (
            <span>
                {skills.map(skill => {
                    let color = skill.length > 5 ? "orange" : "green";
                    return (
                        <Tag color={color} key={skill}>
                            {skill.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        )
    }
];

class GraphqlExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        getUserList()
            .then(res => {
                this.setState({
                    list: res.data.users
                });
                return;
            })
            .catch(err => {
                this.props.showErrorTip(err);
            });
    }
    render() {
        return (
            <div>
                <h3>User List</h3>
                <Table columns={columns} dataSource={this.state.list} rowKey="id" />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToMethods
)(GraphqlExample);
