import * as tslib_1 from "tslib";
import { observable, action, runInAction } from 'mobx';
import { StoreExt } from '@utils/reactExt';
export class LossOfBackflowStore extends StoreExt {
    constructor() {
        super(...arguments);
        this.lineData = [];
        this.getLine = (params) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.api.lossOfBackflow.line(params);
                runInAction('LINE_DATA', () => {
                    this.lineData = res;
                });
            }
            catch (e) { }
        });
    }
}
tslib_1.__decorate([
    observable
], LossOfBackflowStore.prototype, "lineData", void 0);
tslib_1.__decorate([
    action
], LossOfBackflowStore.prototype, "getLine", void 0);
export default new LossOfBackflowStore();
//# sourceMappingURL=index.js.map