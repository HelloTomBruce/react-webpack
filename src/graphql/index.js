import client from "../utils/graphql";
import * as userList from "./userList.graphql";
import * as userById from "./userById.graphql";

export const getUserList = params =>
    client.query({ query: userList, variables: params });

export const getUserById = params => {
    return client.query({
        query:     userById,
        variables: params
    });
};
