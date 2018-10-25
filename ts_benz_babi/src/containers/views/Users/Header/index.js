import * as tslib_1 from "tslib";
import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { Button } from 'antd';
import * as styles from './index.scss';
import UserModal from './../UserModal';
let Header = class Header extends React.Component {
    constructor() {
        super(...arguments);
        this.userModalVisible = false;
        this.toggleUserModalVisible = () => {
            this.userModalVisible = !this.userModalVisible;
        };
    }
    render() {
        return (React.createElement("div", { className: styles.header },
            React.createElement(Button, { type: "primary", onClick: this.toggleUserModalVisible }, "add user"),
            React.createElement(UserModal, { visible: this.userModalVisible, onCancel: this.toggleUserModalVisible })));
    }
};
tslib_1.__decorate([
    observable
], Header.prototype, "userModalVisible", void 0);
tslib_1.__decorate([
    action
], Header.prototype, "toggleUserModalVisible", void 0);
Header = tslib_1.__decorate([
    observer
], Header);
export default Header;
//# sourceMappingURL=index.js.map