import * as tslib_1 from "tslib";
import * as React from 'react';
import { Table, Divider, Popconfirm } from 'antd';
import { inject, observer } from 'mobx-react';
import { toJS, observable, action } from 'mobx';
import { ComponentExt } from '@utils/reactExt';
import UserModal from './../UserModal';
const baseColumns = [
    {
        title: 'Account',
        dataIndex: 'account',
        key: 'account'
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category'
    },
    {
        title: 'CreatedAt',
        dataIndex: 'createdAt',
        key: 'createdAt'
    }
];
class TableExtended extends Table {
}
let UserTable = class UserTable extends ComponentExt {
    constructor() {
        super(...arguments);
        this.userModalVisible = false;
        this.currentUser = null;
        this.hideUserModalVisible = () => {
            this.userModalVisible = !this.userModalVisible;
        };
        this.modifyUser = (user) => {
            this.currentUser = user;
            this.userModalVisible = true;
        };
    }
    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        const { scrollY, getUsersloading, users, deleteUser, handleTableChange, pageIndex, pageSize, total } = this.props;
        const columns = baseColumns.concat([
            {
                title: 'Action',
                key: 'action',
                render: (_, record) => (React.createElement("span", null,
                    React.createElement("a", { href: "javascript:;", onClick: () => this.modifyUser(record) }, "Modify"),
                    React.createElement(Divider, { type: "vertical" }),
                    React.createElement(Popconfirm, { placement: "top", title: "\u786E\u8BA4\u5220\u9664?", onConfirm: () => deleteUser(record._id), okText: "Yes", cancelText: "No" },
                        React.createElement("a", { href: "javascript:;" }, "Delete"))))
            }
        ]);
        return (React.createElement(React.Fragment, null,
            React.createElement(TableExtended, { className: "center-table", style: { width: '100%' }, bordered: true, rowKey: "_id", loading: getUsersloading, columns: columns, dataSource: toJS(users), scroll: { y: scrollY }, pagination: {
                    current: pageIndex,
                    showSizeChanger: true,
                    pageSize,
                    pageSizeOptions: ['3', '2', '1'],
                    total
                }, onChange: handleTableChange }),
            React.createElement(UserModal, { visible: this.userModalVisible, onCancel: this.hideUserModalVisible, user: this.currentUser })));
    }
};
tslib_1.__decorate([
    observable
], UserTable.prototype, "userModalVisible", void 0);
tslib_1.__decorate([
    observable
], UserTable.prototype, "currentUser", void 0);
tslib_1.__decorate([
    action
], UserTable.prototype, "hideUserModalVisible", void 0);
tslib_1.__decorate([
    action
], UserTable.prototype, "modifyUser", void 0);
UserTable = tslib_1.__decorate([
    inject((store) => {
        const { getUsersloading, users, getUsers, deleteUser, handleTableChange, pageIndex, pageSize, total } = store.userStore;
        return { getUsersloading, users, getUsers, deleteUser, handleTableChange, pageIndex, pageSize, total };
    }),
    observer
], UserTable);
export default UserTable;
//# sourceMappingURL=index.js.map