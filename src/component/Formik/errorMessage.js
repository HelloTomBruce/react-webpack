import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

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

const ValidationSchemaExample = () => (
    <div>
        <h1>Signup</h1>
        <Formik
            initialValues={{
                name:  "",
                email: ""
            }}
            onSubmit={values => {
                alert(values);
            }}
        >
            {() => (
                <Form>
                    <Field name="name" validate={validateAsync} />
                    <ErrorMessage name="name" />
                    <Field name="email" type="email" validate={emailValidate} />
                    <ErrorMessage name="email" />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default ValidationSchemaExample;
