import * as tslib_1 from "tslib";
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { ComponentExt } from '@utils/reactExt';
let UserTrendsModal = class UserTrendsModal extends ComponentExt {
    constructor() {
        super(...arguments);
        this.loading = false;
        this.toggleLoading = () => {
            this.loading = !this.loading;
        };
    }
    render() {
        return (React.createElement("div", null, "\u7528\u6237\u8D8B\u52BFmodal"));
    }
};
tslib_1.__decorate([
    observable
], UserTrendsModal.prototype, "loading", void 0);
tslib_1.__decorate([
    action
], UserTrendsModal.prototype, "toggleLoading", void 0);
UserTrendsModal = tslib_1.__decorate([
    inject((store) => {
        const { getTabLine } = store.userTrendsStore;
        return { getTabLine };
    }),
    observer
], UserTrendsModal);
export default UserTrendsModal;
//# sourceMappingURL=index.js.map