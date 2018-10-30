import * as tslib_1 from "tslib";
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS, observable, action } from 'mobx';
import { thirtyDays } from '@utils/date';
import { dataHandle } from '@utils/data';
import { multipleLines } from '@utils/echart';
import * as styles from '../index.scss';
let Line = class Line extends React.Component {
    constructor(props) {
        super(props);
        this.loading = false;
        this.toggleLoading = () => {
            this.loading = !this.loading;
        };
        this.state = {
            startTime: '',
            endTime: '',
            getLineValue: []
        };
    }
    componentDidMount() {
        this.props.getLine({
            startTime: thirtyDays().t2,
            endTime: thirtyDays().t1,
        });
    }
    /*
    * 通过改变时间参数endTime,startTime
    * 更新折线图和table的数据
    * */
    componentDidUpdate(prevProps) {
        const { timeParams } = this.props;
        if (this.props.timeParams !== prevProps.timeParams) {
            this.props.getLine({
                startTime: timeParams.startTime,
                endTime: timeParams.endTime,
            });
        }
    }
    render() {
        const { lineData } = this.props;
        console.log('----line----');
        // console.log(line)
        // console.log(toJS(lineData).entitys)
        const value = dataHandle('line', toJS(lineData), ['#118AAE', '#B99011'], ['流失用户', '回流用户']);
        console.log(value);
        multipleLines('lossAndBackflow', value.xData, value.yData, ['流失用户', '回流用户']);
        return (React.createElement("div", { className: styles.lossAndBackflow, id: "lossAndBackflow" }));
    }
};
tslib_1.__decorate([
    observable
], Line.prototype, "loading", void 0);
tslib_1.__decorate([
    action
], Line.prototype, "toggleLoading", void 0);
tslib_1.__decorate([
    action
    /*
    * 通过改变时间参数endTime,startTime
    * 更新折线图和table的数据
    * */
], Line.prototype, "componentDidUpdate", null);
Line = tslib_1.__decorate([
    inject((store) => {
        // @ts-ignore
        const { getLine, lineData } = store.lossOfBackflowStore;
        // @ts-ignore
        const { timeParams } = store.pageHeaderStore;
        // @ts-ignore
        return { getLine, lineData, timeParams };
    }),
    observer
], Line);
export default Line;
//# sourceMappingURL=index.js.map