import * as tslib_1 from "tslib";
import * as React from 'react';
import { inject } from 'mobx-react';
let Map = class Map extends React.Component {
};
Map = tslib_1.__decorate([
    inject((store) => {
        // @ts-ignore
        const { getUserMapData, userMapData } = store.regiondDstributionStore;
        // @ts-ignore
        const { timeParams } = store.pageHeaderStore;
        // @ts-ignore
        return { getUserMapData, userMapData, timeParams };
    })
], Map);
export default Map;
//# sourceMappingURL=index.js.map