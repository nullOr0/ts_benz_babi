import * as tslib_1 from "tslib";
import { observable, action, runInAction } from 'mobx';
import { StoreExt } from '@utils/reactExt';
export class RegiondDstributionStore extends StoreExt {
    constructor() {
        super(...arguments);
        /**
         * 地域分析数据
         * @type {IRegiondDstributionStore.IMapData[]}  地图数据  1使用用户数
        * */
        this.userMapData = [];
        this.getUserMapData = (params) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.api.regiondDstribution.userMapData(params);
                runInAction('USER_MAP_DATA', () => {
                    this.userMapData = res;
                });
            }
            catch (e) {
            }
        });
    }
}
tslib_1.__decorate([
    observable
], RegiondDstributionStore.prototype, "userMapData", void 0);
tslib_1.__decorate([
    action
], RegiondDstributionStore.prototype, "getUserMapData", void 0);
export default new RegiondDstributionStore();
//# sourceMappingURL=index.js.map