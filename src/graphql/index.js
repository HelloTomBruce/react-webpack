import client from "../utils/graphql";
import * as searchGql from "./search.graphql";

export const search = params =>
    client.query({ query: searchGql, variables: params });
