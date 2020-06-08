import React from "react";
import { Formik, Field } from "formik";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const emailValidate = value => {
    let errorMessage;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errorMessage = "Invalid email address";
    }
    return errorMessage;
};

const validateAsync = value => {
    return sleep(2000).then(() => {
        if (["null"].indexOf(value) !== -1) {
            throw "error happen";
        }
    });
};

const Example = () => (
    <div>
        <h1>My Form</h1>
        <Formik
            initialValues={{ email: "", color: "red", firstName: "" }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
            render={props => (
                <form onSubmit={props.handleSubmit}>
                    <Field type="email" name="email" placeholder="Email" validate={emailValidate} />
                    <Field component="select" name="color">
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </Field>
                    <Field name="firstName" component={CustomInputComponent} />
                    <Field
                        name="lastName"
                        validate={validateAsync}
                        render={({ field, form }) => (
                            <div>
                                <input {...field} placeholder="lastName" />
                                {form.touched[field.name] && form.errors[field.name] && <div>{form.errors[field.name]}</div>}
                            </div>
                        )}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
        />
    </div>
);

const CustomInputComponent = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => (
    <div>
        <input type="text" {...field} {...props} />
        {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
);

export default Example;
