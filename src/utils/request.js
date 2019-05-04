import axios from "axios";
import store from "@/redux/store";
import { showErrorTip } from "@/redux/action/error";
import { logout } from "@/redux/action/login";
import CONFIG from "@/config";

axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(config => {
    return config;
});

axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 403:
                    window.location.replace("/login");
                    store.dispatch(logout());
                    store.dispatch(
                        showErrorTip(CONFIG.TipConfig[error.response.data.code])
                    );
                    break;
                default:
                    break;
            }
            return Promise.reject(error.response);
        }
    }
);

const get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};

const post = (url, data) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, data)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};

export default {
    get,
    post
};
