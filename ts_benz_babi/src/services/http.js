import axios from 'axios';
// import * as qs from 'qs'
import { message } from 'antd';
// import {LOCALSTORAGE_KEYS} from '@constants/index'
import { getCookie } from '@utils/index';
import { COOKIE_KEYS } from '@constants/index';
var HTTPERROR;
(function (HTTPERROR) {
    HTTPERROR[HTTPERROR["LOGICERROR"] = 0] = "LOGICERROR";
    HTTPERROR[HTTPERROR["TIMEOUTERROR"] = 1] = "TIMEOUTERROR";
    HTTPERROR[HTTPERROR["NETWORKERROR"] = 2] = "NETWORKERROR";
})(HTTPERROR || (HTTPERROR = {}));
const TOKENERROR = [401, 402, 403];
const DEFAULTCONFIG = {
    baseURL: process.env.BASEURL,
};
const http = {};
const methods = ['get', 'post', 'put', 'delete'];
let authTimer = null;
const isSuccess = res => res.code === '200';
const resFormat = res => res.response || res.data || res.body || {};
methods.forEach(v => {
    http[v] = (url, data, baseUrl) => {
        const axiosConfig = {
            method: v,
            url,
            baseURL: baseUrl || DEFAULTCONFIG.baseURL,
            headers: {
                'Content-Type': 'application/json',
                'token': `${getCookie(COOKIE_KEYS.TOKEN)}`
            }
        };
        const instance = axios.create(DEFAULTCONFIG);
        // Add a request interceptor
        instance.interceptors.request.use(cfg => {
            // cfg.params = { ...cfg.params}
            return cfg;
        }, error => Promise.reject(error));
        // Add a response interceptor
        instance.interceptors.response.use(response => {
            let rdata = null;
            if (typeof response.data === 'object' && !isNaN(response.data.length)) {
                rdata = response.data;
            }
            else {
                rdata = response.data;
            }
            // console.log(rdata)
            if (!isSuccess(rdata)) {
                const _err = {
                    msg: rdata.msg,
                    code: rdata.code,
                    type: HTTPERROR[HTTPERROR.LOGICERROR],
                    config: response.config
                };
                return Promise.reject(_err);
            }
            return resFormat(rdata);
        }, error => {
            if (TOKENERROR.includes(error.response.status)) {
                message.destroy();
                message.error('用户认证失败! 请登录重试...');
                window.clearTimeout(authTimer);
                authTimer = window.setTimeout(() => {
                    location.replace('/#/login');
                }, 300);
                return;
            }
            const _err = {
                msg: error.response.statusText || error.message || '网络故障',
                type: /^timeout of/.test(error.message)
                    ? HTTPERROR[HTTPERROR.TIMEOUTERROR]
                    : HTTPERROR[HTTPERROR.NETWORKERROR],
                config: error.config
            };
            return Promise.reject(_err);
        });
        if (v === 'get') {
            axiosConfig.params = data;
        }
        else if (data instanceof FormData) {
            axiosConfig.data = data;
        }
        else {
            axiosConfig.data = data;
        }
        axiosConfig.startTime = new Date();
        return instance
            .request(axiosConfig)
            .then(res => res)
            .catch(err => {
            // console.log('http请求错误')
            // console.log(err)
            message.destroy();
            message.error(err.response || err.msg || err.stack || '未知错误');
            if (axiosConfig.url.includes('autoScript.set')) {
                return Promise.resolve({
                    err
                });
            }
            else {
                return Promise.reject({
                    err,
                    stack: err.msg || err.stack || ''
                });
            }
        });
    };
});
export default http;
//# sourceMappingURL=http.js.map