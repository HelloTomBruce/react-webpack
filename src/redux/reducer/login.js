import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../action-type/login";
import Storage from "@/utils/localStorage";
import { clearCookie } from "@/utils/tool";

const initState = {
    isLogin: Storage.hasItem("token"),
    token:   Storage.getItem("token")
};

const LoginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                token:   action.payload.token
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLogin: false,
                token:   ""
            };
        case LOGOUT:
            Storage.removeItem("token");
            clearCookie();
            return {
                ...state,
                isLogin: false,
                token:   ""
            };
        default:
            return state;
    }
};

export default LoginReducer;
