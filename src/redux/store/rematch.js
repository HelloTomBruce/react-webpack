import { init } from "@rematch/core";
import createSagaMiddleware from "redux-saga";
import rootReducer from "@/redux/reducer/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = init({
    redux: {
        reducers: {
            ...rootReducer
        },
        middlewares: [sagaMiddleware]
    }
});

export default store;
