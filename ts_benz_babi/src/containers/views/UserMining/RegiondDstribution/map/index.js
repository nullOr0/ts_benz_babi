import * as tslib_1 from "tslib";
import * as React from 'react';
import { inject } from 'mobx-react';
import { toJS } from 'mobx';
import { dataHandle } from '@utils/data';
import TabMapTable from '@components/TabMapTable';
// import {thirtyDays} from '@utils/date'
import * as styles from '../index.scss';
let Map = class Map extends React.Component {
    componentDidMount() {
        this.props.getUserMapData({
            // startTime: thirtyDays().t2,
            // endTime: thirtyDays().t1,
            queryTime: '2018-10-15 00:00:00',
            areaType: 1,
            timeType: 'day'
        });
    }
    render() {
        const { userMapData } = this.props;
        console.log('地图数据');
        console.log(toJS(userMapData));
        const value = dataHandle('map', toJS(userMapData), '', '');
        console.log(value);
        return (React.createElement("div", { className: styles.mapTable },
            React.createElement(TabMapTable, null)));
    }
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