import React from "react";
import { Formik, Field } from "formik";
import { Form, Input, Button, Tooltip, Icon, Cascader, Select, AutoComplete, Row, Col } from "antd";

const Option = Select.Option;

const AutoCompleteOption = AutoComplete.Option;

const residences = [
    {
        value:    "zhejiang",
        label:    "Zhejiang",
        children: [
            {
                value:    "hangzhou",
                label:    "Hangzhou",
                children: [
                    {
                        value: "xihu",
                        label: "West Lake"
                    }
                ]
            }
        ]
    },
    {
        value:    "jiangsu",
        label:    "Jiangsu",
        children: [
            {
                value:    "nanjing",
                label:    "Nanjing",
                children: [
                    {
                        value: "zhonghuamen",
                        label: "Zhong Hua Men"
                    }
                ]
            }
        ]
    }
];

const emailValidate = value => {
    let errorMessage;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errorMessage = "The input is not valid E-mail!";
    } else if (!value) {
        errorMessage = "Please input your E-mail!";
    }
    return errorMessage;
};

const passwordValidate = value => {
    let errorMessage;
    if (!value) {
        errorMessage = "Please input your password!";
    }
    return errorMessage;
};

const confirmValidate = value => {
    let errorMessage;
    if (!value) {
        errorMessage = "Please input your password!";
    }
    return errorMessage;
};

const nicknameValidate = value => {
    let errorMessage;
    if (!value) {
        errorMessage = "Please input your nickname!";
    }
    return errorMessage;
};

const residenceValidate = value => {
    let errorMessage;
    if (!value || value.length < 3) {
        errorMessage = "Please select your habitual residence!";
    }
    return errorMessage;
};

const phoneValidate = value => {
    let errorMessage;
    if (!value) {
        errorMessage = "Please input your phone number!";
    }
    return errorMessage;
};

const websiteValidate = value => {
    let errorMessage;
    if (!value) {
        errorMessage = "Please input website!";
    }
    return errorMessage;
};

const captchaValidate = value => {
    let errorMessage;
    if (!value) {
        errorMessage = "Please input the captcha you got!";
    }
    return errorMessage;
};

const PasswordInput = ({ field, ...props }) => <Input.Password name={field.name} value={field.value} onChange={field.onChange} onBlur={field.onBlur} {...props} />;

const EmailInput = ({ field, ...props }) => <Input name={field.name} value={field.value} onChange={field.onChange} onBlur={field.onBlur} placeholder="email" type="email" {...props} />;

class ResidenceSelector extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChange = value => {
        let { field, form } = this.props;
        form.setFieldValue(field.name, value);
    };
    render() {
        let { field, ...props } = this.props;
        return <Cascader options={residences} name={field.name} value={field.value} changeOnSelect={true} onChange={this.handleChange} {...props} />;
    }
}

class PhoneInput extends React.Component {
    constructor(props) {
        super(props);
    }
    prefixChange = value => {
        let { form } = this.props;
        form.setFieldValue("prefix", value);
    };
    renderPrefix = () => {
        let { form } = this.props;
        let value = form.values.prefix;
        return (
            <Select style={{ width: 70 }} name="prefix" value={value} onChange={this.prefixChange}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );
    };
    render() {
        let { field, ...props } = this.props;
        return <Input addonBefore={this.renderPrefix()} name={field.name} value={field.value} onChange={field.onChange} {...props} />;
    }
}

const NicknameInput = ({ field, ...props }) => <Input name={field.name} value={field.value} onChange={field.onChange} onBlur={field.onBlur} placeholder="nickname" {...props} />;

class Website extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            autoCompleteResult: []
        };
    }
    handleWebsiteChange = value => {
        let autoCompleteResult;
        let { field, form } = this.props;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = [".com", ".org", ".net"].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
        form.setFieldValue(field.name, value);
    };
    render() {
        let { autoCompleteResult } = this.state;
        let { field } = this.props;
        const websiteOptions = autoCompleteResult.map(website => <AutoCompleteOption key={website}>{website}</AutoCompleteOption>);
        return (
            <AutoComplete value={field.value} name={field.name} dataSource={websiteOptions} onChange={this.handleWebsiteChange} placeholder="website">
                <Input />
            </AutoComplete>
        );
    }
}

const CaptchaInput = ({ field, ...props }) => <Input name={field.name} value={field.value} onChange={field.onChange} onBlur={field.onBlur} placeholder="" {...props} />;

class ExampleForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const formFieldLayout = {
            labelCol:   { span: 7 },
            wrapperCol: { span: 12 }
        };
        const formFooterLayout = {
            wrapperCol: {
                span:   12,
                offset: 7
            }
        };

        return (
            <div>
                <h1 style={{ textAlign: "center", padding: "20px 0" }}>My Form</h1>
                <Formik
                    initialValues={{
                        email:     "",
                        password:  "",
                        confirm:   "",
                        nickname:  "",
                        residence: [],
                        prefix:    "86",
                        phone:     "",
                        website:   "",
                        captcha:   ""
                    }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    render={props => (
                        <form onSubmit={props.handleSubmit}>
                            <Form>
                                <Form.Item
                                    {...formFieldLayout}
                                    required={true}
                                    label="Email"
                                    validateStatus={props.touched.email && props.errors.email ? "error" : ""}
                                    help={props.touched.email && props.errors.email ? props.errors.email : ""}
                                >
                                    <Field name="email" validate={emailValidate} component={EmailInput} />
                                </Form.Item>
                                <Form.Item
                                    {...formFieldLayout}
                                    required={true}
                                    label="Password"
                                    validateStatus={props.touched.password && props.errors.password ? "error" : ""}
                                    help={props.touched.password && props.errors.password ? props.errors.password : ""}
                                >
                                    <Field name="password" validate={passwordValidate} component={PasswordInput} />
                                </Form.Item>
                                <Form.Item
                                    {...formFieldLayout}
                                    required={true}
                                    validateStatus={props.touched.confirm && props.errors.confirm ? "error" : ""}
                                    help={props.touched.confirm && props.errors.confirm ? props.errors.confirm : ""}
                                    label="Confirm Password"
                                    hasFeedback
                                >
                                    <Field name="confirm" validate={confirmValidate} component={PasswordInput} />
                                </Form.Item>
                                <Form.Item
                                    {...formFieldLayout}
                                    required={true}
                                    validateStatus={props.touched.nickname && props.errors.nickname ? "error" : ""}
                                    help={props.touched.nickname && props.errors.nickname ? props.errors.nickname : ""}
                                    label={
                                        <span>
                                            Nickname&nbsp;
                                            <Tooltip title="What do you want others to call you?">
                                                <Icon type="question-circle-o" />
                                            </Tooltip>
                                        </span>
                                    }
                                >
                                    <Field name="nickname" validate={nicknameValidate} component={NicknameInput} />
                                </Form.Item>
                                <Form.Item
                                    {...formFieldLayout}
                                    label="Habitual Residence"
                                    required={true}
                                    validateStatus={props.touched.residence && props.errors.residence ? "error" : ""}
                                    help={props.touched.residence && props.errors.residence ? props.errors.residence : ""}
                                >
                                    <Field name="residence" validate={residenceValidate} component={ResidenceSelector} />
                                </Form.Item>
                                <Form.Item
                                    {...formFieldLayout}
                                    label="Phone Number"
                                    required={true}
                                    validateStatus={props.touched.phone && props.errors.phone ? "error" : ""}
                                    help={props.touched.phone && props.errors.phone ? props.errors.phone : ""}
                                >
                                    <Field name="phone" validate={phoneValidate} component={PhoneInput} />
                                </Form.Item>
                                <Form.Item
                                    {...formFieldLayout}
                                    label="Website"
                                    required={true}
                                    validateStatus={props.touched.website && props.errors.website ? "error" : ""}
                                    help={props.touched.website && props.errors.website ? props.errors.website : ""}
                                >
                                    <Field name="website" validate={websiteValidate} component={Website} />
                                </Form.Item>
                                <Form.Item
                                    {...formFieldLayout}
                                    required={true}
                                    validateStatus={props.touched.captcha && props.errors.captcha ? "error" : ""}
                                    help={props.touched.captcha && props.errors.captcha ? props.errors.captcha : ""}
                                    label="Captcha"
                                    extra="We must make sure that your are a human."
                                >
                                    <Row gutter={8}>
                                        <Col span={19}>
                                            <Field name="captcha" validate={captchaValidate} component={CaptchaInput} />
                                        </Col>
                                        <Col span={5}>
                                            <Button>Get captcha</Button>
                                        </Col>
                                    </Row>
                                </Form.Item>
                                <Form.Item {...formFooterLayout}>
                                    <Button htmlType="submit" type="primary">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </form>
                    )}
                />
            </div>
        );
    }
}

export default ExampleForm;
