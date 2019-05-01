import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "@/redux/action/login";
import { Form, Icon, Input, Button } from "antd";
import "./index.less";

const mapStateToProps = () => ({});

const mapActionToProps = dispatch => {
    return {
        login: ({ name }) => {
            dispatch(login(name));
        }
    };
};

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator("name", {
                        rules: [
                            {
                                required: true,
                                message:  "Please input your username!"
                            }
                        ]
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type="user"
                                    style={{ color: "rgba(0,0,0,.25)" }}
                                />
                            }
                            placeholder="Username"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                    Or
                    <Link to="/register">register now!</Link>
                </Form.Item>
            </Form>
        );
    }
}

const WrapperLoginForm = Form.create({ name: "login" })(LoginForm);

export default connect(
    mapStateToProps,
    mapActionToProps
)(WrapperLoginForm);
