import * as tslib_1 from "tslib";
import { action, observable, runInAction } from 'mobx';
import { StoreExt } from '@utils/reactExt';
export class PageHeaderStore extends StoreExt {
    constructor() {
        super(...arguments);
        /**
         * 时间参数
         *
         * @type {IPageHeaderStore.ITimeParams[]}
         * @memberof ITimeStore
         */
        this.timeParams = [];
        this.loadTime = (date, dateString) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const params = {
                startTime: dateString[0].replace(/\./g, '-') + ' 00:00:00',
                endTime: dateString[1].replace(/\./g, '-') + ' 00:00:00',
            };
            try {
                runInAction('TIME_PARAMS', () => {
                    // @ts-ignore
                    this.timeParams = params;
                });
            }
            catch (err) { }
        });
    }
}
tslib_1.__decorate([
    observable
], PageHeaderStore.prototype, "timeParams", void 0);
tslib_1.__decorate([
    action
], PageHeaderStore.prototype, "loadTime", void 0);
export default new PageHeaderStore();
//# sourceMappingURL=index.js.map