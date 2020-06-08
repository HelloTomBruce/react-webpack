import { SHOW_ERROR_TIP, HIDE_ERROR_TIP } from "../action-type/error";

const initState = {
    showErrorInfo: false,
    message:       ""
};

const ErrorReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_ERROR_TIP:
            return {
                ...state,
                showErrorInfo: true,
                message:       action.payload.msg
            };
        case HIDE_ERROR_TIP:
            return {
                ...state,
                showErrorInfo: false,
                message:       ""
            };
        default:
            return state;
    }
};

export default ErrorReducer;
