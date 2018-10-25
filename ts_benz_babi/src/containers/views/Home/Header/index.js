import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Layout, Select, Menu, Dropdown, Icon } from 'antd';
import * as styles from './index.scss';
import './index.less';
// import logo from '../../../../../src/assets/images/logo.png'
const Option = Select.Option;
function Header({ sideBarCollapsed, toggleSideBarCollapsed, logout, personInform }) {
    const menu = (React.createElement(Menu, null,
        React.createElement(Menu.Item, { onClick: personInform }, "\u4E2A\u4EBA\u4FE1\u606F"),
        React.createElement(Menu.Item, null, "\u4FEE\u6539\u5BC6\u7801"),
        React.createElement(Menu.Item, { onClick: logout }, "\u9000\u51FA\u767B\u5F55")));
    return (React.createElement(Layout.Header, { className: styles.header },
        React.createElement("div", { className: styles.logoStyle },
            React.createElement("span", null, "Daimler")),
        React.createElement("div", { className: styles.languageSwitch },
            React.createElement(Select, { placeholder: "\u4E2D\u6587", className: styles.select },
                React.createElement(Option, { value: "Chinese" }, "\u4E2D\u6587"),
                React.createElement(Option, { value: "English" }, "English")),
            React.createElement(Dropdown, { overlay: menu },
                React.createElement("a", { className: "ant-dropdown-link", href: "#" },
                    "admin ",
                    React.createElement(Icon, { type: "down" }))),
            ",")));
}
export default inject((store) => {
    const { globalStore, authStore } = store;
    const { sideBarCollapsed, toggleSideBarCollapsed } = globalStore;
    const { logout } = authStore;
    return { sideBarCollapsed, toggleSideBarCollapsed, logout };
})(observer(Header));
//# sourceMappingURL=index.js.map