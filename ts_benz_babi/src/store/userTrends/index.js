import * as tslib_1 from "tslib";
import { observable, action, runInAction } from 'mobx';
import { StoreExt } from '@utils/reactExt';
export class UserTrendsStore extends StoreExt {
    constructor() {
        super(...arguments);
        /**
         * params endTime
         *
         * @type {string}
         * @memberof UserTrendsStore
         */
        this.endTime = '2018-09-24 23:59:59';
        /**
         *  params startTime
         *
         * @type {string}
         * @memberof UserTrendsStore
         */
        this.startTime = '2018-08-26 00:00:00';
        /**
         *  params pageID
         *
         * @type {string}
         * @memberof UserTrendsStore
         */
        this.pageID = 'true';
        /**
         *  params pageNo
         *
         * @type {number}
         * @memberof UserTrendsStore
         */
        this.pageNo = 1;
        /**
         *  params pageNo
         *
         * @type {number}
         * @memberof UserTrendsStore
         */
        this.pageSize = 10;
        /**
         * 用户趋势数据
         *
         * @type {UserTrendsStore.IUserTrendsLine[]}
         * @type {UserTrendsStore.IUserTrendsTable[]}
         * @memberof UserTrendsStore
         */
        this.userTrendsLine = [];
        this.userTrendsTable = [];
        this.getTabLine = (params) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.api.userTrends.tabLine(params);
                runInAction('LINE_DATA', () => {
                    this.userTrendsLine = res;
                });
            }
            catch (err) {
            }
        });
        this.getTable = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.api.userTrends.table({
                    startTime: this.startTime,
                    endTime: this.endTime,
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                });
                runInAction('TABLE_DATA', () => {
                    this.userTrendsTable = res;
                });
            }
            catch (err) { }
        });
    }
}
tslib_1.__decorate([
    observable
], UserTrendsStore.prototype, "endTime", void 0);
tslib_1.__decorate([
    observable
], UserTrendsStore.prototype, "startTime", void 0);
tslib_1.__decorate([
    observable
], UserTrendsStore.prototype, "pageID", void 0);
tslib_1.__decorate([
    observable
], UserTrendsStore.prototype, "pageNo", void 0);
tslib_1.__decorate([
    observable
], UserTrendsStore.prototype, "pageSize", void 0);
tslib_1.__decorate([
    observable
], UserTrendsStore.prototype, "userTrendsLine", void 0);
tslib_1.__decorate([
    observable
], UserTrendsStore.prototype, "userTrendsTable", void 0);
tslib_1.__decorate([
    action
], UserTrendsStore.prototype, "getTabLine", void 0);
tslib_1.__decorate([
    action
], UserTrendsStore.prototype, "getTable", void 0);
export default new UserTrendsStore();
//# sourceMappingURL=index.js.map