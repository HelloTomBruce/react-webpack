import client from "../utils/graphql";
import * as User from "./user.graphql";

export const getUserList = params =>
    client.query({ query: User, variables: params });
