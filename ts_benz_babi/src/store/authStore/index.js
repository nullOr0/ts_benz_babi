import * as tslib_1 from "tslib";
import { observable, action, runInAction } from 'mobx';
import { StoreExt } from '@utils/reactExt';
import { routerStore } from './../';
import { setCookie, clearCookie, getCookie } from '@utils/index';
import { COOKIE_KEYS, LOCALSTORAGE_KEYS } from '@constants/index';
export class AuthStore extends StoreExt {
    constructor() {
        super(...arguments);
        /**
         * 用户信息
         *
         * @type {IAuthStore.UserInfo}
         * @memberof AuthStore
         */
        this.userInfo = null;
        this.login = (params) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.api.auth.login(params);
                console.log('----接口返回的数据----');
                console.log(res);
                runInAction('SET_USERINFO', () => {
                    this.userInfo = res;
                });
                console.log('----用户数据----');
                setCookie(COOKIE_KEYS.TOKEN, res.token);
                console.log(getCookie(COOKIE_KEYS.TOKEN));
                localStorage.setItem(LOCALSTORAGE_KEYS.USERINFO, JSON.stringify(res));
                routerStore.replace('/');
            }
            catch (err) {
                console.error(err);
            }
        });
        this.logout = () => {
            clearCookie(COOKIE_KEYS.TOKEN);
            localStorage.removeItem(LOCALSTORAGE_KEYS.USERINFO);
            routerStore.replace('/login');
        };
        /**
         * 初始化用户信息
         *
         * @memberof AuthStore
         */
        this.initUserInfo = () => {
            const lcoalUserInfo = localStorage.getItem(LOCALSTORAGE_KEYS.USERINFO);
            if (!lcoalUserInfo) {
                throw new Error('no local userinfo!!');
            }
            const userInfo = JSON.parse(lcoalUserInfo);
            this.userInfo = userInfo;
            return userInfo;
        };
    }
}
tslib_1.__decorate([
    observable
], AuthStore.prototype, "userInfo", void 0);
tslib_1.__decorate([
    action
], AuthStore.prototype, "login", void 0);
tslib_1.__decorate([
    action
], AuthStore.prototype, "logout", void 0);
tslib_1.__decorate([
    action
], AuthStore.prototype, "initUserInfo", void 0);
export default new AuthStore();
//# sourceMappingURL=index.js.map