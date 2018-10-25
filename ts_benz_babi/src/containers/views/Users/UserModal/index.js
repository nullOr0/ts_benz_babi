import * as tslib_1 from "tslib";
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';
import { Modal, Form, Input, Select } from 'antd';
import { ComponentExt } from '@utils/reactExt';
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 }
    }
};
const userCategory = ['user', 'admin'];
let UserModal = class UserModal extends ComponentExt {
    constructor() {
        super(...arguments);
        this.loading = false;
        this.toggleLoading = () => {
            this.loading = !this.loading;
        };
        this.submit = (e) => {
            if (e) {
                e.preventDefault();
            }
            const { user, createUser, modifyUser, getUsers, changePageIndex, onCancel, form } = this.props;
            form.validateFields((err, values) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (!err) {
                    this.toggleLoading();
                    try {
                        if (this.typeIsAdd) {
                            yield createUser(values);
                            changePageIndex(1);
                        }
                        else {
                            yield modifyUser(Object.assign({}, values, { _id: user._id }));
                        }
                        getUsers();
                        onCancel();
                    }
                    catch (err) { }
                    this.toggleLoading();
                }
            }));
        };
    }
    get typeIsAdd() {
        return this.props.user === undefined;
    }
    get title() {
        return this.typeIsAdd ? 'Add User' : 'Modify User';
    }
    render() {
        const { visible, onCancel, user, form } = this.props;
        const { getFieldDecorator } = form;
        const initialAccount = user ? user.account : '';
        const initialCategory = user ? user.category : userCategory[0];
        return (React.createElement(Modal, { title: this.title, visible: visible, onOk: this.submit, onCancel: onCancel },
            React.createElement(Form, { onSubmit: this.submit },
                React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "account" }), getFieldDecorator('account', {
                    initialValue: initialAccount,
                    rules: [
                        {
                            required: true
                        }
                    ]
                })(React.createElement(Input, null))),
                this.typeIsAdd && (React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "password" }), getFieldDecorator('password', {
                    rules: [
                        {
                            required: true
                        }
                    ]
                })(React.createElement(Input, null)))),
                React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "category" }), getFieldDecorator('category', {
                    initialValue: initialCategory,
                    rules: [
                        {
                            required: true
                        }
                    ]
                })(React.createElement(Select, null, userCategory.map(c => (React.createElement(Select.Option, { key: c, value: c }, c)))))))));
    }
};
tslib_1.__decorate([
    observable
], UserModal.prototype, "loading", void 0);
tslib_1.__decorate([
    computed
], UserModal.prototype, "typeIsAdd", null);
tslib_1.__decorate([
    computed
], UserModal.prototype, "title", null);
tslib_1.__decorate([
    action
], UserModal.prototype, "toggleLoading", void 0);
UserModal = tslib_1.__decorate([
    inject((store) => {
        const { createUser, modifyUser, getUsers, changePageIndex } = store.userStore;
        return { createUser, modifyUser, getUsers, changePageIndex };
    }),
    observer
], UserModal);
export default Form.create()(UserModal);
//# sourceMappingURL=index.js.map