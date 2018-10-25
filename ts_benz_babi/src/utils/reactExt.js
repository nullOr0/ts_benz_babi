import * as React from 'react';
import { message, notification } from 'antd';
import * as api from '@services/api';
/**
 * 扩展组件/store类以方便调用
 * 集成api, 公用组件
 */
export class ComponentExt extends React.Component {
    constructor() {
        super(...arguments);
        this.api = api;
        this.$message = message;
        this.$notification = notification;
    }
}
export class StoreExt {
    constructor() {
        this.api = api;
        this.$message = message;
        this.$notification = notification;
    }
}
//# sourceMappingURL=reactExt.js.map