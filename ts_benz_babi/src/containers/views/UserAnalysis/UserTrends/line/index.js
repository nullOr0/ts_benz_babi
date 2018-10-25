import * as tslib_1 from "tslib";
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS, observable, action } from 'mobx';
import { thirtyDays } from '@utils/date';
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
        this.props.getTabLine({
            startTime: thirtyDays().t2,
            endTime: thirtyDays().t1,
            pageID: true
        });
    }
    /*
    * 通过改变时间参数endTime,startTime
    * 更新折线图和table的数据
    * */
    componentDidUpdate(prevProps) {
        const { timeParams } = this.props;
        if (this.props.timeParams !== prevProps.timeParams) {
            this.props.getTabLine({
                startTime: timeParams.startTime,
                endTime: timeParams.endTime,
                pageID: true
            });
        }
    }
    render() {
        const { userTrendsLine } = this.props;
        console.log('----line----');
        console.log(toJS(userTrendsLine));
        return (React.createElement("div", { className: styles.userTrendsLine }, "\u7528\u6237\u8D8B\u52BFLine"));
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
        const { getTabLine, userTrendsLine } = store.userTrendsStore;
        const { timeParams } = store.pageHeaderStore;
        // @ts-ignore
        return { getTabLine, userTrendsLine, timeParams };
    }),
    observer
], Line);
export default Line;
//# sourceMappingURL=index.js.map