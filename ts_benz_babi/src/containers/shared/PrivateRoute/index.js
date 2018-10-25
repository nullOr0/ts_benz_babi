import * as tslib_1 from "tslib";
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Route } from 'react-router-dom';
import { ComponentExt } from '@utils/reactExt';
import { getCookie } from '@utils/index';
import { COOKIE_KEYS } from '@constants/index';
let PrivateRoute = class PrivateRoute extends ComponentExt {
    constructor() {
        super(...arguments);
        this.gotoLogin = () => {
            const { routerStore } = this.props;
            routerStore.history.replace('/login');
        };
        this.checkLocalUserInfo = () => {
            const token = getCookie(COOKIE_KEYS.TOKEN);
            if (!token) {
                return this.gotoLogin();
            }
            const { userInfo, initUserInfo } = this.props;
            if (!userInfo) {
                try {
                    const userInfoByInit = initUserInfo();
                    if (userInfoByInit.token !== token) {
                        throw new Error('cookie 上储存的token与localStorage 上储存的token不一致!');
                    }
                }
                catch (err) {
                    console.warn(err);
                    this.gotoLogin();
                }
            }
        };
    }
    componentDidMount() {
        this.checkLocalUserInfo();
    }
    render() {
        const _a = this.props, { component: Component } = _a, rest = tslib_1.__rest(_a, ["component"]);
        return React.createElement(Route, Object.assign({}, rest, { render: props => React.createElement(Component, Object.assign({}, rest)) }));
    }
};
PrivateRoute = tslib_1.__decorate([
    inject((store) => {
        const { routerStore, authStore } = store;
        const { userInfo, initUserInfo } = authStore;
        return { routerStore, userInfo, initUserInfo };
    }),
    observer
], PrivateRoute);
export default PrivateRoute;
//# sourceMappingURL=index.js.map