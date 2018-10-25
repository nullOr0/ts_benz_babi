import * as tslib_1 from "tslib";
import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import * as styles from './index.scss';
import Header from './Header';
import UserTable from './Table';
let Users = class Users extends React.Component {
    constructor() {
        super(...arguments);
        this.tableScrollY = 0;
        this.containerRef = null;
        this.setTableScrollY = () => {
            if (this.containerRef) {
                this.tableScrollY = this.containerRef.clientHeight - 60;
            }
        };
        this.setContainerRef = (ref) => {
            this.containerRef = ref;
            this.setTableScrollY();
        };
        this.bindOrUnbindResize = (type) => {
            const listener = type === 'bind' ? window.addEventListener : window.removeEventListener;
            listener('resize', this.setTableScrollY, false);
        };
    }
    componentDidMount() {
        this.bindOrUnbindResize('bind');
    }
    componentWillUnmount() {
        this.bindOrUnbindResize('unbind');
    }
    render() {
        return (React.createElement("div", { className: styles.container },
            React.createElement(Header, null),
            React.createElement("div", { className: styles.tableBox, ref: this.setTableScrollY },
                React.createElement(UserTable, { scrollY: this.tableScrollY }))));
    }
};
tslib_1.__decorate([
    observable
], Users.prototype, "tableScrollY", void 0);
tslib_1.__decorate([
    action
], Users.prototype, "setTableScrollY", void 0);
Users = tslib_1.__decorate([
    observer
], Users);
export default Users;
//# sourceMappingURL=index.js.map