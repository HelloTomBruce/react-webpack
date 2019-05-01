import { SHOW_ERROR_TIP, HIDE_ERROR_TIP } from "../action-type/error";

export const showErrorTip = msg => {
    return {
        type:    SHOW_ERROR_TIP,
        payload: {
            msg
        }
    };
};

export const closeErrorTip = () => {
    return {
        type: HIDE_ERROR_TIP
    };
};
