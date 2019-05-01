import { combineReducers } from "redux";
import count from "./counter.js";
import list from "./list.js";
import login from "./login";
import error from "./error";

const rootReducer = combineReducers({
    count,
    list,
    login,
    error
});

export default rootReducer;
