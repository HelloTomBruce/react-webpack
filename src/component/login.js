import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../redux/action/login'
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd'
import '../component-less/login.less'

const mapStateToProps = state => ({
    isLogin: state.login.isLogin,
    token: state.login.token
})

const mapActionToProps = dispatch => {
    return {
        login: ({user, password}) => {dispatch(login(user, password))},
        logout: () => {dispatch(logout())}
    }
}

class LoginForm extends Component {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
                this.props.login(values)
            }
        })
    }
  
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('user', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or
                    <a href="">register now!</a>
                    {+this.props.isLogin}
                    {this.props.token}
                </Form.Item>
            </Form>
        )
    }
}

const WrapperLoginForm = Form.create({ name: 'login' })(LoginForm)

export default connect(mapStateToProps, mapActionToProps)(WrapperLoginForm)