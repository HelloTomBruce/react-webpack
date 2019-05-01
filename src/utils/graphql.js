import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink, from } from "apollo-link";
import store from "@/redux/store";
import { showErrorTip } from "@/redux/action/error";

const MiddleWare = new ApolloLink((operation, forward) => {
    // request时对请求进行处理
    operation.setContext({
        headers: {
            authorization: localStorage.getItem("token") || null
        }
    });
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
    uri: "http://127.0.0.1:3016/graphql" // 配置请求url
});

const cache = new InMemoryCache(); // 缓存

export default new ApolloClient({
    link: from([MiddleWare, AfterWare, errorLink, httpLink]),
    cache
});
