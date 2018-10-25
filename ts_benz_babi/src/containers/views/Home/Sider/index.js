import * as tslib_1 from "tslib";
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Layout } from 'antd';
import * as styles from './index.scss';
import SiderMenu from './Menu';
import './index.less';
let Sider = class Sider extends React.Component {
    constructor() {
        super(...arguments);
        this.handleThemeChange = (e) => {
            this.props.changeSiderTheme(e ? 'dark' : 'light');
        };
        this.handleSideBar = (sideBarCollapsed) => {
            this.props.toggleSideBarCollapsed(sideBarCollapsed ? 'menu-unfold' : 'menu-fold');
        };
    }
    render() {
        const { sideBarCollapsed, sideBarTheme } = this.props;
        return (React.createElement(Layout.Sider, { className: styles.sider, trigger: null, theme: sideBarTheme, collapsible: true, collapsed: sideBarCollapsed },
            React.createElement(SiderMenu, null)));
    }
};
Sider = tslib_1.__decorate([
    inject((store) => {
        const { routerStore, globalStore } = store;
        const { sideBarCollapsed, sideBarTheme, changeSiderTheme, toggleSideBarCollapsed } = globalStore;
        return {
            routerStore,
            sideBarCollapsed,
            sideBarTheme,
            changeSiderTheme,
            toggleSideBarCollapsed,
        };
    }),
    observer
], Sider);
export default Sider;
//# sourceMappingURL=index.js.map