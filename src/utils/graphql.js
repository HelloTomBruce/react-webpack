import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink, from } from "apollo-link";
import store from "@/redux/store";
import { showErrorTip } from "@/redux/action/error";
import CONFIG from "@/config";

const MiddleWare = new ApolloLink((operation, forward) => {
    return forward(operation);
});

const AfterWare = new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
        // 服务器返回数据
        return response;
    });
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            store.dispatch(
                showErrorTip(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                )
            )
        );
    if (networkError)
        store.dispatch(showErrorTip(`[Network error]: ${networkError}`));
});

const httpLink = new createHttpLink({
    uri:         CONFIG.GRAPHQL, // 配置请求url
    credentials: "include"
});

const cache = new InMemoryCache(); // 缓存

export default new ApolloClient({
    link: from([MiddleWare, AfterWare, errorLink, httpLink]),
    cache
});
