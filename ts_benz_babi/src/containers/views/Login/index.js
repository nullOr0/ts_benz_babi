import * as tslib_1 from "tslib";
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { observable, runInAction } from 'mobx';
import { Form, Icon, Input, Button } from 'antd';
import forge from 'node-forge';
import * as styles from './index.scss';
const FormItem = Form.Item;
let Login = class Login extends React.Component {
    constructor() {
        super(...arguments);
        this.loading = false;
        this.submit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (!err) {
                    runInAction('SHOW_LOGIN_LOADING', () => {
                        this.loading = true;
                    });
                    const md = forge.md.md5.create();
                    md.update(values.password);
                    const account = {
                        email: values.email,
                        password: md.digest().toHex()
                    };
                    yield this.props.login(account);
                    runInAction('HIDE_LOGIN_LOADING', () => {
                        this.loading = false;
                    });
                }
            }));
        };
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (React.createElement("div", { className: styles.login },
            React.createElement(Form, { onSubmit: this.submit, className: styles.form },
                React.createElement("div", { className: styles.logoBox },
                    React.createElement(Icon, { type: "ant-design" })),
                React.createElement(FormItem, { hasFeedback: true }, getFieldDecorator('email', {
                    rules: [
                        {
                            required: true
                        }
                    ]
                })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "user", style: { color: 'rgba(0,0,0,.25)' } }), placeholder: "account" }))),
                React.createElement(FormItem, { hasFeedback: true }, getFieldDecorator('password', {
                    rules: [
                        {
                            required: true
                        }
                    ]
                })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "lock", style: { color: 'rgba(0,0,0,.25)' } }), type: "password", placeholder: "password" }))),
                React.createElement(FormItem, null,
                    React.createElement(Button, { type: "primary", htmlType: "submit", block: true, loading: this.loading }, "login")))));
    }
};
tslib_1.__decorate([
    observable
], Login.prototype, "loading", void 0);
Login = tslib_1.__decorate([
    inject((store) => {
        const { routerStore, authStore } = store;
        const { login } = authStore;
        return {
            routerStore,
            login
        };
    }),
    observer
], Login);
export default Form.create()(Login);
//# sourceMappingURL=index.js.map