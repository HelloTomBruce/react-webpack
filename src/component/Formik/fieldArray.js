import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

const FriendList = () => (
    <div>
        <h1>Friend List</h1>
        <Formik
            initialValues={{
                friends: ["jared", "ian", "brent"],
                dogs:    [
                    {
                        name: "tom",
                        age:  3
                    },
                    {
                        name: "tt",
                        age:  1
                    }
                ]
            }}
            onSubmit={values =>
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500)
            }
            render={({ values }) => (
                <Form>
                    <FieldArray
                        name="friends"
                        render={arrayHelpers => (
                            <div>
                                {values.friends && values.friends.length > 0 ? (
                                    values.friends.map((friend, index) => (
                                        <div key={index}>
                                            <Field name={`friends.${index}`} />
                                            <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                                -
                                            </button>
                                            <button type="button" onClick={() => arrayHelpers.insert(index, "")}>
                                                +
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <button type="button" onClick={() => arrayHelpers.push("")}>
                                        Add a friend
                                    </button>
                                )}
                            </div>
                        )}
                    />
                    <FieldArray
                        name="dogs"
                        render={arrayHelpers => (
                            <div>
                                {values.dogs && values.dogs.length > 0
                                    ? values.dogs.map((friend, index) => (
                                          <div key={index}>
                                              <Field name={`dogs[${index}].name`} />
                                              <Field name={`dogs.${index}.age`} />
                                              <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                                  -
                                              </button>
                                          </div>
                                      ))
                                    : null}
                                <button type="button" onClick={() => arrayHelpers.push({ name: "", age: "" })}>
                                    +
                                </button>
                            </div>
                        )}
                    />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            )}
        />
    </div>
);

export default FriendList;
